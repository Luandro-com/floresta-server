const test = require('tape')
const mockFetch = require('./fetch')
const validator = require('validator')
const faker = require('faker')

const testEmails = [ 'admin@example.com', 'editor@example.com', 'customer@example.com' ]
const testPassword = 'nooneknows'
let tokens = {
  admin: '',
  customer: '',
  editor: '',
}
let userId
let productId
let variantId
let categoryId
let subCategoryId
let orderId

module.exports = () => {
  test.onFinish(() => process.exit(0))
  // LOGIN AS ADMIN, EDITOR and USER
  test(`should login and return users with ADMIN, EDITOR and CUSTOMER roles`, (t) => {
    t.plan(testEmails.length)
    const login = `
      mutation($email: String! $password: String!) {
        login(email: $email password: $password) {
          token
          user {
            id
            email
            role
          }
        }
      }
    `
    testEmails.forEach(email => mockFetch(login, { email, password: testPassword })
      .then(res => {
        const type = email.split('@')[0]
        tokens[type] = res.login.token // Set token for future requests
        t.equal(type.toLocaleUpperCase(), res.login.user.role)
        if (type === 'customer') {
          userId = res.login.user.id
        }
      })
    )
  })
  // CUSTOMERS
  test(`Should get all customers if admin and fail if editor or user`, (t) => {
    t.plan(testEmails.length)
    const customers = `{
      customers {
        id
        role
      }
    }`
    mockFetch(customers, null, tokens.admin)
      .then(res => {
        const customerRoles = res.customers.filter(user => user.role === 'CUSTOMER')
        t.deepEqual(res.customers, customerRoles)
      })
    mockFetch(customers, null, tokens.editor)
      .then(res => {
        t.false(res.customers)
      })
    mockFetch(customers, null, tokens.customer)
      .then(res => {
        t.false(res.customers)
      })
  })
  // DRAFTS
  test(`Should get all drafts if admin and editor and fail if user`, (t) => {
    t.plan(testEmails.length)
    const drafts = `{
      drafts {
        id
      }
    }`
    mockFetch(drafts, null, tokens.admin)
      .then(res => {
        t.ok(res.drafts)
      })
    mockFetch(drafts, null, tokens.editor)
      .then(res => {
        t.ok(res.drafts)
      })
    mockFetch(drafts, null, tokens.customer)
      .then(res => {
        t.false(res)
      })
  })
  // ALL ORDERS
  test(`Should get all orders if admin and fail if editor or user`, (t) => {
    t.plan(testEmails.length)
    const allOrders = `{
      allOrders {
        id
      }
    }`
    mockFetch(allOrders, null, tokens.admin)
      .then(res => {
        orderId = res.allOrders[0].id
        t.ok(res.allOrders)
      })
    mockFetch(allOrders, null, tokens.editor)
      .then(res => {
        t.false(res.allOrders)
      })
    mockFetch(allOrders, null, tokens.customer)
      .then(res => {
        t.false(res.allOrders)
      })
  })
  // ADMINS
  test(`Should get all users with ADMIN role if admin and fail if editor or user`, (t) => {
    t.plan(testEmails.length)
    const admins = `{
      admins {
        id
        role
      }
    }`
    mockFetch(admins, null, tokens.admin)
      .then(res => {
        const adminUsers = res.admins.filter(user => {
          return (user.role === 'EDITOR' || user.role === 'ADMIN')
        })
        t.deepEqual(res.admins, adminUsers)
      })
    mockFetch(admins, null, tokens.editor)
      .then(res => {
        t.false(res.admins)
      })
    mockFetch(admins, null, tokens.customer)
      .then(res => {
        t.false(res.admins)
      })
  })
  // PAYMENTS
  // test(`Should get all payments if admin and fail if editor or user`, (t) => {
  //   t.plan(testEmails.length)
  //   const payments = `{
  //     payments {
  //       id
  //       customer {
  //         email
  //       }
  //     }
  //   }`
  //   mockFetch(payments, null, tokens.admin)
  //     .then(res => {
  //       t.equal(true, validator.isEmail(res.payments[0].customer.email))
  //     })
  //   mockFetch(payments, null, tokens.editor)
  //     .then(res => {
  //       t.false(res.payments)
  //     })
  //   mockFetch(payments, null, tokens.customer)
  //     .then(res => {
  //       t.false(res.payments)
  //     })
  // })
  // UPDATE USER ROLE
  test(`Should update user role to EDITOR and back to CUSTOMER if admin and fail if editor or user`, (t) => {
    const updateUserRole = `
      mutation($userId: ID! $role: Role!) {
        updateUserRole(userId: $userId role: $role) {
          id
          role
        }
      }
    `
    mockFetch(updateUserRole, { userId, role: 'EDITOR' }, tokens.admin)
      .then(res => {
        t.equal('EDITOR', res.updateUserRole.role)
        mockFetch(updateUserRole, { userId, role: 'CUSTOMER' }, tokens.admin)
          .then(response => {
            t.equal('CUSTOMER', response.updateUserRole.role)
            t.end()
          })
      })
    mockFetch(updateUserRole, { userId, role: 'EDITOR' }, tokens.editor)
      .then(res => {
        t.false(res.updateUserRole)
      })
    mockFetch(updateUserRole, { userId, role: 'EDITOR' }, tokens.customer)
      .then(res => {
        t.false(res.updateUserRole)
      })
  })
  // SAVE PRODUCT
  test(`Should create and update a product if ADMIN and fail is customer or editor.`, (t) => {
    const saveProduct = `
      mutation($input: ProductInput!) {
        saveProduct(input: $input) {
          id
          name
          price
          slug
        }
      }
    `
    const name1 = faker.commerce.productName()
    const name2 = faker.commerce.productName()
    const variables = {
      input: {
        price: faker.random.number(),
        name: name1,
        stockQuantity: faker.random.number(),
        description: faker.commerce.color(),
        image: faker.image.food(),
      }
    }

    const variables2 = {
      input: {
        productId,
        price: faker.random.number(),
        name: name2,
        stockQuantity: faker.random.number(),
        description: faker.commerce.color(),
        image: faker.image.food(),
      }
    }

    mockFetch(saveProduct, variables, tokens.admin)
      .then(res => {
        productId = res.saveProduct.id
        const productName = res.saveProduct.name
        t.ok(res.saveProduct)
        mockFetch(saveProduct, variables2, tokens.admin)
          .then(response => {
            t.ok(response.saveProduct)
            t.false((response.saveProduct.name === productName))
            t.end()
          })
      })
    mockFetch(saveProduct, variables, tokens.editor)
      .then(res => {
        t.false(res.saveProduct)
      })
    mockFetch(saveProduct, variables, tokens.customer)
      .then(res => {
        t.false(res.saveProduct)
      })
  })
  // SAVE PRODUCT VARIANT
  test(`Should create and update a product variant if ADMIN and fail is customer or editor.`, (t) => {
    const saveProductVariant = `
      mutation($input: ProductVariantInput!) {
        saveProductVariant(input: $input) {
          id
          name
          slug
          information
          image
        }
      }
    `
    const variables = {
      input: {
        productId,
        name: faker.commerce.productName(),
        information: faker.commerce.color(),
        image: faker.image.food(),
      }
    }
    const variables2 = {
      input: {
        productId,
        variantId,
        name: faker.commerce.productName(),
        information: faker.commerce.color(),
        image: faker.image.food(),
      }
    }


    mockFetch(saveProductVariant, variables, tokens.admin)
      .then(res => {
        variantId = res.saveProductVariant.id
        t.ok(res.saveProductVariant.id)
        t.ok(res.saveProductVariant)
        mockFetch(saveProductVariant, variables2, tokens.admin)
          .then(updateRes => {
            t.equal(variables2.input.name, updateRes.saveProductVariant.name)
            t.end()
          })
      })
    mockFetch(saveProductVariant, variables, tokens.editor)
      .then(res => {
        t.false(res.saveProductVariant)
      })
    mockFetch(saveProductVariant, variables, tokens.customer)
      .then(res => {
        t.false(res.saveProductVariant)
      })
  })
  // REMOVE PRODUCT VARIANT
  test(`Should create and update a product variant if ADMIN and fail is customer or editor.`, (t) => {
    const removeProductVariant = `
      mutation($variantId: ID!) {
        removeProductVariant(variantId: $variantId)
      }
    `
    mockFetch(removeProductVariant, { variantId }, tokens.admin)
      .then(removeRes => {
        t.ok(removeRes.removeProductVariant)
        t.end()
      })
    mockFetch(removeProductVariant, { variantId }, tokens.editor)
      .then(res => {
        t.false(res.removeProduct)
      })
    mockFetch(removeProductVariant, { variantId }, tokens.editor)
      .then(res => {
        t.false(res.removeProduct)
      })
  })
  // SAVE PRODUCT CATEGORY
  test(`Should create and update a product category if ADMIN and fail is customer or editor.`, (t) => {
    const saveProductCategory = `
      mutation($input: ProductCategoryInput!) {
        saveProductCategory(input: $input) {
          id
          name
          slug
          information
          image
        }
      }
    `
    const variables = {
      input: {
        productId,
        name: faker.commerce.productName(),
        information: faker.commerce.color(),
        image: faker.image.food(),
      }
    }
    const variables2 = {
      input: {
        productId,
        categoryId,
        name: faker.commerce.productName(),
        information: faker.commerce.color(),
        image: faker.image.food(),
      }
    }


    mockFetch(saveProductCategory, variables, tokens.admin)
      .then(res => {
        categoryId = res.saveProductCategory.id
        t.ok(res.saveProductCategory.id)
        t.ok(res.saveProductCategory)
        mockFetch(saveProductCategory, variables2, tokens.admin)
          .then(updateRes => {
            t.equal(variables2.input.name, updateRes.saveProductCategory.name)
            t.end()
          })
      })
    mockFetch(saveProductCategory, variables, tokens.editor)
      .then(res => {
        t.false(res.saveProductCategory)
      })
    mockFetch(saveProductCategory, variables, tokens.customer)
      .then(res => {
        t.false(res.saveProductCategory)
      })
  })
  // SAVE PRODUCT SUBCATEGORY
  test(`Should create and update a product sub-category if ADMIN and fail is customer or editor.`, (t) => {
    const saveProductSubCategory = `
      mutation($input: ProductSubCategoryInput!) {
        saveProductSubCategory(input: $input) {
          id
          name
          slug
          information
          image
        }
      }
    `
    const variables = {
      input: {
        categoryId,
        name: faker.commerce.productName(),
        information: faker.commerce.color(),
        image: faker.image.food(),
      }
    }
    const variables2 = {
      input: {
        categoryId,
        subCategoryId,
        name: faker.commerce.productName(),
        information: faker.commerce.color(),
        image: faker.image.food(),
      }
    }


    mockFetch(saveProductSubCategory, variables, tokens.admin)
      .then(res => {
        subCategoryId = res.saveProductSubCategory.id
        t.ok(res.saveProductSubCategory.id)
        t.ok(res.saveProductSubCategory)
        mockFetch(saveProductSubCategory, variables2, tokens.admin)
          .then(updateRes => {
            t.equal(variables2.input.name, updateRes.saveProductSubCategory.name)
            t.end()
          })
      })
    mockFetch(saveProductSubCategory, variables, tokens.editor)
      .then(res => {
        t.false(res.saveProductSubCategory)
      })
    mockFetch(saveProductSubCategory, variables, tokens.customer)
      .then(res => {
        t.false(res.saveProductSubCategory)
      })
  })
  // REMOVE PRODUCT SUBCATEGORY
  test(`Should remove product sub-category if ADMIN and fail is customer or editor.`, (t) => {
    const removeProductSubCategory = `
      mutation($subCategoryId: ID!) {
        removeProductSubCategory(subCategoryId: $subCategoryId)
      }
    `
    mockFetch(removeProductSubCategory, { subCategoryId }, tokens.admin)
      .then(removeRes => {
        t.ok(removeRes.removeProductSubCategory)
        t.end()
      })
    mockFetch(removeProductSubCategory, { subCategoryId }, tokens.editor)
      .then(res => {
        t.false(res.removeProduct)
      })
    mockFetch(removeProductSubCategory, { subCategoryId }, tokens.editor)
      .then(res => {
        t.false(res.removeProduct)
      })
  })
  // REMOVE PRODUCT CATEGORY
  test(`Should remove product category if ADMIN and fail is customer or editor.`, (t) => {
    const removeProductCategory = `
      mutation($categoryId: ID!) {
        removeProductCategory(categoryId: $categoryId)
      }
    `
    mockFetch(removeProductCategory, { categoryId }, tokens.admin)
      .then(removeRes => {
        t.ok(removeRes.removeProductCategory)
        t.end()
      })
    mockFetch(removeProductCategory, { categoryId }, tokens.editor)
      .then(res => {
        t.false(res.removeProduct)
      })
    mockFetch(removeProductCategory, { categoryId }, tokens.editor)
      .then(res => {
        t.false(res.removeProduct)
      })
  })
  // REMOVE PRODUCT
  test(`Should remove a product if ADMIN and fail is customer or editor.`, (t) => {
    const removeProduct = `
      mutation($productId: ID!) {
        removeProduct(productId: $productId)
      }
    `
    mockFetch(removeProduct, { productId }, tokens.admin)
      .then(removeResponse => {
        t.ok(removeResponse.removeProduct)
        t.end()
      })
    mockFetch(removeProduct, { productId }, tokens.editor)
      .then(res => {
        t.false(res.removeProduct)
      })
    mockFetch(removeProduct, { productId }, tokens.customer)
      .then(res => {
        t.false(res.removeProduct)
      })
  })
  // UPDATE ORDER STATUS
  test(`Should get orders, update order to PACKAGING if ADMIN and fail is customer or editor.`, (t) => {
    t.plan(testEmails.length)
    const updateOrderStatus = `
      mutation($orderId: ID! $status: OrderStatus!) {
        updateOrderStatus(orderId: $orderId status: $status) {
          status
          id
        }
      }
    `
    const newStatus = 'PACKAGING'
    mockFetch(updateOrderStatus, { orderId, status: newStatus }, tokens.admin)
      .then(res => {
        t.equal(newStatus, res.updateOrderStatus.status)
      })
      .catch(err => console.log('errrrr', err))
    mockFetch(updateOrderStatus, { orderId, status: 'PACKAGING' }, tokens.editor)
      .then(res => {
        t.false(res.updateOrderStatus)
      })
    mockFetch(updateOrderStatus, { orderId, status: 'PACKAGING' }, tokens.editor)
      .then(res => {
        t.false(res.updateOrderStatus)
      })
  })
  // SAVE/REMOVE POST
}