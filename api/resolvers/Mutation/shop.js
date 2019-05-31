const { getUserId } = require('../../services/auth/utils')
const { transaction, initSession } = require('../../services/payment/pagseguro')
const camel = require('camelcase')

const getSameItem = (products, productId, variantsIds) => products.filter(p => {
  if (variantsIds) {
    let formatedVariantes = []
    p.variants.filter(v => formatedVariantes.push(v.id))
    return (p.product.id === productId && formatedVariantes.length === variantsIds.length && formatedVariantes.sort().every((value, index) => { return value === variantsIds.sort()[index]}))
  }
  return p.product.id === productId
})[0]

const formatPrice = price => {
  let chars = price.toString().split('')
  chars.splice(-2, 0, '.')
  return chars.join('')
}


const shop = {
  async saveAddress(parent, args, ctx, info) {
    const { input } = args
    const id = getUserId(ctx)
    const addressId = input.addressId
    if (input.addressId) {
      delete input.addressId
    }
    const address = await ctx.db.mutation.upsertAddress({
      where: { id: addressId || '' },
      update: { ...input },
      create: { ...input, customer: { connect: { id }} },
    }, info)
    return address
  },
  async removeAddress(parent, args, ctx, info) {
    const id = getUserId(ctx)
    await ctx.db.mutation.deleteAddress({
      where: { id: args.addressId }
    })
    return ctx.db.query.addresses({
      where: { customer: { id }}
    })
  },
  async saveOrder(parent, args, ctx, info) {
    const { input } = args
    const id = getUserId(ctx)
    const orderId = input.orderId
    const cartId = input.cartId
    const shippingAddressId = input.shippingAddressId
    const shippingValue = input.shippingValue
    const shippingOption = input.shippingOption
    if (input.orderId) delete input.orderId
    if (input.cartId) delete input.cartId
    if (input.shippingValue) delete input.shippingValue
    if (input.shippingOption) delete input.shippingOption
    if (input.shippingAddressId) delete input.shippingAddressId
    const address = await ctx.db.query.address({ where: { id: shippingAddressId } }, `{
      street
      number
      complement
      zip
      district
      city
      state
      country
      firstName
      lastName
    }`)
    const { products } = await ctx.db.query.cart({ where: { id: cartId } }, `{ products { product { price } } }`)
    const price = products.reduce((prev, curr) => {
      return prev + curr.product.price
    }, 0)
    const code = await initSession()
    const order = await ctx.db.mutation.upsertOrder({
      where: { code },
      update: { ...input },
      create: {
        code,
        ...input,
        subTotalPrice: price,
        totalPrice: price,
        customer: { connect: { id } },
        cart: { connect: { id: cartId } },
        shippingAddress: { create: { ...address } },
        shippingValue,
        shippingOption,
      },
    }, info)
    return order


  },
  async cancelOrder(parent, args, ctx, info) {
    const { orderId } = args
    const id = getUserId(ctx)
    await ctx.db.mutation.updateOrder({
      where: { id: orderId },
      data: { status: 'CANCELED'}
    })
    return ctx.db.query.orders({ where: { customer: { id } } })

  },
  async updateCartItem(parent, args, ctx, info) {
    const { input: { productId, quantity, variantsIds } } = args
    // if (variantsIds && variantsIds.length !== 1 && variantsIds.length !== 12) throw 'Variants must be 1 or 12'
    const id = getUserId(ctx)
    let cart
    const existingCart = await ctx.db.query.user({ where: { id } }, `{ cart { id products { id product { id } variants { id } quantity } } }`)
    cart = existingCart.cart
    if (!cart) {
      cart = await ctx.db.mutation.createCart({
        data: {
          customer: {
            connect: {
              id
            }
          }
        }
      }, `{ id products { id } }`)
    }
    const sameItem = getSameItem(cart.products, productId, variantsIds)
    if(sameItem) {
      if (quantity <= 0) {
        await ctx.db.mutation.deleteCartItem({
          where: { id: sameItem.id },
        })
      } else {
        await ctx.db.mutation.updateCartItem({
          where: { id: sameItem.id },
          data: {
            quantity: quantity
          }
        })
      }
    } else {
      if (variantsIds) {
        let variants = {}
        await variantsIds.map(v => Object.assign(variants, { connect: { id: v } }))
        await ctx.db.mutation.createCartItem({ data: {
          quantity,
          cart: { connect: { id: cart.id } },
          product: { connect: { id: productId }},
          variants,
        }})
    
      } else {
        await ctx.db.mutation.createCartItem({ data: {
          quantity,
          cart: { connect: { id: cart.id } },
          product: { connect: { id: productId }},
        }}) 
      }
    }
    const userCart = await ctx.db.query.cart({ where: { id: cart.id } }, info)
    return userCart
  },
  async removeCartItem(parent, args, ctx, info) {
    const { productId } = args
    const id = getUserId(ctx)
    const { cart } = await ctx.db.query.user({ where: { id } }, `{ cart { id products { id product { id } variants { id } quantity } } }`)
    const sameItem = getSameItem(cart.products, productId, variantsIds)
    if(sameItem) {
      const nextQuantity = sameItem.quantity - quantity
      if (nextQuantity > 0) {
        await ctx.db.mutation.updateCartItem({
          where: { id: sameItem.id },
          data: { quantity: nextQuantity }
        })
      } else {
        await ctx.db.mutation.deleteCartItem({
          where: { id: sameItem.id },
        })
      }
      
    } else {
      let variants = {}
      await variantsIds.map(v => Object.assign(variants, { connect: { id: v } }))
      await ctx.db.mutation.createCartItem({ data: {
        quantity,
        cart: { connect: { id: cart.id } },
        product: { connect: { id: productId }},
        variants,
      }})
    }
    const userCart = await ctx.db.query.cart({ where: { id: cart.id } }, info)
    console.log('userCart', info)
    return userCart
    
  },
  async addToCart(parent, args, ctx, info) {
    const { input: { productId, quantity, variantsIds } } = args
    if (variantsIds && variantsIds.length !== 1 && variantsIds.length !== 12) throw 'Variants must be 1 or 12'
    const id = getUserId(ctx)
    let cart
    const existingCart = await ctx.db.query.user({ where: { id } }, `{ cart { id products { id product { id } variants { id } quantity } } }`)
    cart = existingCart.cart
    if (!cart) {
      cart = await ctx.db.mutation.createCart({
        data: {
          customer: {
            connect: {
              id
            }
          }
        }
      }, `{ id products { id } }`)
    }
    const sameItem = getSameItem(cart.products, productId, variantsIds)
    if(sameItem) {
      await ctx.db.mutation.updateCartItem({
        where: { id: sameItem.id },
        data: {
          quantity: sameItem.quantity + quantity
        }
      })
    } else {
      if (variantsIds) {
        let variants = {}
        await variantsIds.map(v => Object.assign(variants, { connect: { id: v } }))
        await ctx.db.mutation.createCartItem({ data: {
          quantity,
          cart: { connect: { id: cart.id } },
          product: { connect: { id: productId }},
          variants,
        }})
    
      } else {
        await ctx.db.mutation.createCartItem({ data: {
          quantity,
          cart: { connect: { id: cart.id } },
          product: { connect: { id: productId }},
        }}) 
      }
    }
    const userCart = await ctx.db.query.cart({ where: { id: cart.id } }, info)
    return userCart
  },
  async removeFromCart(parent, args, ctx, info) {
    const { input: { productId, quantity, variantsIds } } = args
    const id = getUserId(ctx)
    const { cart } = await ctx.db.query.user({ where: { id } }, `{ cart { id products { id product { id } variants { id } quantity } } }`)
    const sameItem = getSameItem(cart.products, productId, variantsIds)
    if(sameItem) {
      const nextQuantity = sameItem.quantity - quantity
      if (nextQuantity > 0) {
        await ctx.db.mutation.updateCartItem({
          where: { id: sameItem.id },
          data: { quantity: nextQuantity }
        })
      } else {
        await ctx.db.mutation.deleteCartItem({
          where: { id: sameItem.id },
        })
      }
      
    } else {
      let variants = {}
      await variantsIds.map(v => Object.assign(variants, { connect: { id: v } }))
      await ctx.db.mutation.createCartItem({ data: {
        quantity,
        cart: { connect: { id: cart.id } },
        product: { connect: { id: productId }},
        variants,
      }})
    }
    const userCart = await ctx.db.query.cart({ where: { id: cart.id } }, info)
    console.log('userCart', info)
    return userCart
    
  },
  async subscribe(parent, args, ctx, info) {
    try {
      const res = await ctx.db.mutation.createNewsletterSubscription({ data: { email: args.email }})
      console.log('RES', res)
      return true
    } catch (err) {
      console.log('Error on newsletter', err)
      return false
    }
  },
  async payment(parent, args, ctx, info) {
    console.log('-------------------- PAYMENT ----------------------')
    const { 
      method,
      orderId,
      document,
      paymentHash,
      cardToken,
      installmentValue,
      installmentNoInterest,
      installmentQuantity,
      holderName,
      holderDocument,
      holderBirth,
      holderPhone,
      billingAddressId } = args.input
      const order = await ctx.db.query.order({ where: { id: orderId } }, `{
        totalPrice
        shippingValue
        shippingOption
        cart {
          id
          products {
            id
            quantity
            product {
              price
              name
              description
            }
          }
        }
        shippingAddress {
          street
          number
          complement
          zip
          district
          city
          state
          country
        }
        customer {
          id
          firstName
          lastName
          email
        }
      }`)
      const { cart, shippingValue, shippingOption, customer } = order
      let items = {
        item: []
      }
      cart.products.map(p => items.item.push({
        id: p.id,
        description: p.product.description,
        quantity: p.quantity.toString(),
        amount: formatPrice(p.product.price),
      }))
      let transactionData = {}
      if (method === "CREDITCARD") {
        transactionData = {
          mode: 'default',
          method: 'creditCard',
          sender: {
            name: `${customer.firstName} ${customer.lastName}`,
            email: process.env.PRODUCTION ? customer.email : `${customer.email.split('@')[0]}@sandbox.pagseguro.com.br`,
            phone: {
              areaCode: '11',
              number: '30380000',
            },
            documents: {
              document: {
                type: 'CPF',
                value: '22111944785',
              },
            },
            hash: paymentHash,
          },
          currency: 'BRL',
          notificationURL: 'https://sualoja.com.br/notificacao',
          items,
          extraAmount: '0.00',
          reference: orderId,
          shippingAddressRequired: 'true',
          shipping: {
            address: Object.assign(order.shippingAddress, { postalCode: order.shippingAddress.zip }),
            type: shippingOption === 'pac' ? '1' : (shippingOption === 'sedex') ? '2' : '3',
            cost: formatPrice(shippingValue),
          },
          creditCard: {
            token: cardToken,
            installment: {
              quantity: installmentQuantity,
              value: installmentValue,
              noInterestInstallmentQuantity: installmentNoInterest,
            },
            holder: {
              name: holderName,
              documents: {
                document: {
                  type: 'CPF',
                  value: '22111944785',
                },
              },
              birthDate: '20/10/1980',
              phone: {
                areaCode: '11',
                number: '999991111',
              },
            },
            billingAddress: {
              street: 'Av. Brigadeiro Faria Lima',
              number: '1384',
              complement: '1 andar',
              district: 'Jardim Paulistano',
              city: 'Sao Paulo',
              state: 'SP',
              country: 'BRA',
              postalCode: '01452002',
            },
          },
        }
      } else if (method === "BOLETO") {

      } else if (method === "EFT") {

      }
      console.log('transactionData', transactionData)
      const res = await transaction(transactionData)
      console.dir(res)
      const { code, status, type, grossAmount, feeAmount, netAmount } = res.transaction
      return await ctx.db.mutation.createPayment({
        data: {
          paymentId: code,
          type,
          status: parseInt(status),
          customer: {
            connect: { id: order.customer.id },
          },
          merchantOrderId: code,
          order: {
            connect: { id: orderId },
          },
          amount: parseInt(grossAmount),
          feeAmount: parseInt(feeAmount),
          netAmount: parseInt(netAmount),
          installments: installmentQuantity,
        }
      }, info)
  },
}

module.exports = { shop }
