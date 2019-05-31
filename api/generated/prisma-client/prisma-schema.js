module.exports = {
        typeDefs: /* GraphQL */ `type Address {
  id: ID!
  type: AddressType!
  street: String!
  number: String!
  complement: String
  zip: String!
  district: String
  city: String
  state: String
  country: String
  firstName: String!
  lastName: String!
  customer: User!
}

type AddressConnection {
  pageInfo: PageInfo!
  edges: [AddressEdge]!
  aggregate: AggregateAddress!
}

input AddressCreateInput {
  type: AddressType
  street: String!
  number: String!
  complement: String
  zip: String!
  district: String
  city: String
  state: String
  country: String
  firstName: String!
  lastName: String!
  customer: UserCreateOneWithoutAddressesInput!
}

input AddressCreateManyWithoutCustomerInput {
  create: [AddressCreateWithoutCustomerInput!]
  connect: [AddressWhereUniqueInput!]
}

input AddressCreateWithoutCustomerInput {
  type: AddressType
  street: String!
  number: String!
  complement: String
  zip: String!
  district: String
  city: String
  state: String
  country: String
  firstName: String!
  lastName: String!
}

type AddressEdge {
  node: Address!
  cursor: String!
}

enum AddressOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  street_ASC
  street_DESC
  number_ASC
  number_DESC
  complement_ASC
  complement_DESC
  zip_ASC
  zip_DESC
  district_ASC
  district_DESC
  city_ASC
  city_DESC
  state_ASC
  state_DESC
  country_ASC
  country_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AddressPreviousValues {
  id: ID!
  type: AddressType!
  street: String!
  number: String!
  complement: String
  zip: String!
  district: String
  city: String
  state: String
  country: String
  firstName: String!
  lastName: String!
}

input AddressScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  type: AddressType
  type_not: AddressType
  type_in: [AddressType!]
  type_not_in: [AddressType!]
  street: String
  street_not: String
  street_in: [String!]
  street_not_in: [String!]
  street_lt: String
  street_lte: String
  street_gt: String
  street_gte: String
  street_contains: String
  street_not_contains: String
  street_starts_with: String
  street_not_starts_with: String
  street_ends_with: String
  street_not_ends_with: String
  number: String
  number_not: String
  number_in: [String!]
  number_not_in: [String!]
  number_lt: String
  number_lte: String
  number_gt: String
  number_gte: String
  number_contains: String
  number_not_contains: String
  number_starts_with: String
  number_not_starts_with: String
  number_ends_with: String
  number_not_ends_with: String
  complement: String
  complement_not: String
  complement_in: [String!]
  complement_not_in: [String!]
  complement_lt: String
  complement_lte: String
  complement_gt: String
  complement_gte: String
  complement_contains: String
  complement_not_contains: String
  complement_starts_with: String
  complement_not_starts_with: String
  complement_ends_with: String
  complement_not_ends_with: String
  zip: String
  zip_not: String
  zip_in: [String!]
  zip_not_in: [String!]
  zip_lt: String
  zip_lte: String
  zip_gt: String
  zip_gte: String
  zip_contains: String
  zip_not_contains: String
  zip_starts_with: String
  zip_not_starts_with: String
  zip_ends_with: String
  zip_not_ends_with: String
  district: String
  district_not: String
  district_in: [String!]
  district_not_in: [String!]
  district_lt: String
  district_lte: String
  district_gt: String
  district_gte: String
  district_contains: String
  district_not_contains: String
  district_starts_with: String
  district_not_starts_with: String
  district_ends_with: String
  district_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  state: String
  state_not: String
  state_in: [String!]
  state_not_in: [String!]
  state_lt: String
  state_lte: String
  state_gt: String
  state_gte: String
  state_contains: String
  state_not_contains: String
  state_starts_with: String
  state_not_starts_with: String
  state_ends_with: String
  state_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  AND: [AddressScalarWhereInput!]
  OR: [AddressScalarWhereInput!]
  NOT: [AddressScalarWhereInput!]
}

type AddressSubscriptionPayload {
  mutation: MutationType!
  node: Address
  updatedFields: [String!]
  previousValues: AddressPreviousValues
}

input AddressSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AddressWhereInput
  AND: [AddressSubscriptionWhereInput!]
  OR: [AddressSubscriptionWhereInput!]
  NOT: [AddressSubscriptionWhereInput!]
}

enum AddressType {
  BILLING
  SHIPPING
}

input AddressUpdateInput {
  type: AddressType
  street: String
  number: String
  complement: String
  zip: String
  district: String
  city: String
  state: String
  country: String
  firstName: String
  lastName: String
  customer: UserUpdateOneRequiredWithoutAddressesInput
}

input AddressUpdateManyDataInput {
  type: AddressType
  street: String
  number: String
  complement: String
  zip: String
  district: String
  city: String
  state: String
  country: String
  firstName: String
  lastName: String
}

input AddressUpdateManyMutationInput {
  type: AddressType
  street: String
  number: String
  complement: String
  zip: String
  district: String
  city: String
  state: String
  country: String
  firstName: String
  lastName: String
}

input AddressUpdateManyWithoutCustomerInput {
  create: [AddressCreateWithoutCustomerInput!]
  delete: [AddressWhereUniqueInput!]
  connect: [AddressWhereUniqueInput!]
  set: [AddressWhereUniqueInput!]
  disconnect: [AddressWhereUniqueInput!]
  update: [AddressUpdateWithWhereUniqueWithoutCustomerInput!]
  upsert: [AddressUpsertWithWhereUniqueWithoutCustomerInput!]
  deleteMany: [AddressScalarWhereInput!]
  updateMany: [AddressUpdateManyWithWhereNestedInput!]
}

input AddressUpdateManyWithWhereNestedInput {
  where: AddressScalarWhereInput!
  data: AddressUpdateManyDataInput!
}

input AddressUpdateWithoutCustomerDataInput {
  type: AddressType
  street: String
  number: String
  complement: String
  zip: String
  district: String
  city: String
  state: String
  country: String
  firstName: String
  lastName: String
}

input AddressUpdateWithWhereUniqueWithoutCustomerInput {
  where: AddressWhereUniqueInput!
  data: AddressUpdateWithoutCustomerDataInput!
}

input AddressUpsertWithWhereUniqueWithoutCustomerInput {
  where: AddressWhereUniqueInput!
  update: AddressUpdateWithoutCustomerDataInput!
  create: AddressCreateWithoutCustomerInput!
}

input AddressWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  type: AddressType
  type_not: AddressType
  type_in: [AddressType!]
  type_not_in: [AddressType!]
  street: String
  street_not: String
  street_in: [String!]
  street_not_in: [String!]
  street_lt: String
  street_lte: String
  street_gt: String
  street_gte: String
  street_contains: String
  street_not_contains: String
  street_starts_with: String
  street_not_starts_with: String
  street_ends_with: String
  street_not_ends_with: String
  number: String
  number_not: String
  number_in: [String!]
  number_not_in: [String!]
  number_lt: String
  number_lte: String
  number_gt: String
  number_gte: String
  number_contains: String
  number_not_contains: String
  number_starts_with: String
  number_not_starts_with: String
  number_ends_with: String
  number_not_ends_with: String
  complement: String
  complement_not: String
  complement_in: [String!]
  complement_not_in: [String!]
  complement_lt: String
  complement_lte: String
  complement_gt: String
  complement_gte: String
  complement_contains: String
  complement_not_contains: String
  complement_starts_with: String
  complement_not_starts_with: String
  complement_ends_with: String
  complement_not_ends_with: String
  zip: String
  zip_not: String
  zip_in: [String!]
  zip_not_in: [String!]
  zip_lt: String
  zip_lte: String
  zip_gt: String
  zip_gte: String
  zip_contains: String
  zip_not_contains: String
  zip_starts_with: String
  zip_not_starts_with: String
  zip_ends_with: String
  zip_not_ends_with: String
  district: String
  district_not: String
  district_in: [String!]
  district_not_in: [String!]
  district_lt: String
  district_lte: String
  district_gt: String
  district_gte: String
  district_contains: String
  district_not_contains: String
  district_starts_with: String
  district_not_starts_with: String
  district_ends_with: String
  district_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  state: String
  state_not: String
  state_in: [String!]
  state_not_in: [String!]
  state_lt: String
  state_lte: String
  state_gt: String
  state_gte: String
  state_contains: String
  state_not_contains: String
  state_starts_with: String
  state_not_starts_with: String
  state_ends_with: String
  state_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  customer: UserWhereInput
  AND: [AddressWhereInput!]
  OR: [AddressWhereInput!]
  NOT: [AddressWhereInput!]
}

input AddressWhereUniqueInput {
  id: ID
}

type AggregateAddress {
  count: Int!
}

type AggregateCart {
  count: Int!
}

type AggregateCartItem {
  count: Int!
}

type AggregateCreditCard {
  count: Int!
}

type AggregateCupom {
  count: Int!
}

type AggregateNewsletterSubscription {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateOrderShippingAddress {
  count: Int!
}

type AggregatePayment {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateProductVariant {
  count: Int!
}

type AggregateStores {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Cart {
  id: ID!
  products(where: CartItemWhereInput, orderBy: CartItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CartItem!]
  updatedAt: DateTime!
  customer: User!
}

type CartConnection {
  pageInfo: PageInfo!
  edges: [CartEdge]!
  aggregate: AggregateCart!
}

input CartCreateInput {
  products: CartItemCreateManyWithoutCartInput
  customer: UserCreateOneWithoutCartInput!
}

input CartCreateOneInput {
  create: CartCreateInput
  connect: CartWhereUniqueInput
}

input CartCreateOneWithoutCustomerInput {
  create: CartCreateWithoutCustomerInput
  connect: CartWhereUniqueInput
}

input CartCreateOneWithoutProductsInput {
  create: CartCreateWithoutProductsInput
  connect: CartWhereUniqueInput
}

input CartCreateWithoutCustomerInput {
  products: CartItemCreateManyWithoutCartInput
}

input CartCreateWithoutProductsInput {
  customer: UserCreateOneWithoutCartInput!
}

type CartEdge {
  node: Cart!
  cursor: String!
}

type CartItem {
  id: ID!
  cart: Cart!
  product: Product
  quantity: Int
  variants(where: ProductVariantWhereInput, orderBy: ProductVariantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductVariant!]
}

type CartItemConnection {
  pageInfo: PageInfo!
  edges: [CartItemEdge]!
  aggregate: AggregateCartItem!
}

input CartItemCreateInput {
  cart: CartCreateOneWithoutProductsInput!
  product: ProductCreateOneInput
  quantity: Int
  variants: ProductVariantCreateManyInput
}

input CartItemCreateManyWithoutCartInput {
  create: [CartItemCreateWithoutCartInput!]
  connect: [CartItemWhereUniqueInput!]
}

input CartItemCreateWithoutCartInput {
  product: ProductCreateOneInput
  quantity: Int
  variants: ProductVariantCreateManyInput
}

type CartItemEdge {
  node: CartItem!
  cursor: String!
}

enum CartItemOrderByInput {
  id_ASC
  id_DESC
  quantity_ASC
  quantity_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CartItemPreviousValues {
  id: ID!
  quantity: Int
}

input CartItemScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  AND: [CartItemScalarWhereInput!]
  OR: [CartItemScalarWhereInput!]
  NOT: [CartItemScalarWhereInput!]
}

type CartItemSubscriptionPayload {
  mutation: MutationType!
  node: CartItem
  updatedFields: [String!]
  previousValues: CartItemPreviousValues
}

input CartItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CartItemWhereInput
  AND: [CartItemSubscriptionWhereInput!]
  OR: [CartItemSubscriptionWhereInput!]
  NOT: [CartItemSubscriptionWhereInput!]
}

input CartItemUpdateInput {
  cart: CartUpdateOneRequiredWithoutProductsInput
  product: ProductUpdateOneInput
  quantity: Int
  variants: ProductVariantUpdateManyInput
}

input CartItemUpdateManyDataInput {
  quantity: Int
}

input CartItemUpdateManyMutationInput {
  quantity: Int
}

input CartItemUpdateManyWithoutCartInput {
  create: [CartItemCreateWithoutCartInput!]
  delete: [CartItemWhereUniqueInput!]
  connect: [CartItemWhereUniqueInput!]
  set: [CartItemWhereUniqueInput!]
  disconnect: [CartItemWhereUniqueInput!]
  update: [CartItemUpdateWithWhereUniqueWithoutCartInput!]
  upsert: [CartItemUpsertWithWhereUniqueWithoutCartInput!]
  deleteMany: [CartItemScalarWhereInput!]
  updateMany: [CartItemUpdateManyWithWhereNestedInput!]
}

input CartItemUpdateManyWithWhereNestedInput {
  where: CartItemScalarWhereInput!
  data: CartItemUpdateManyDataInput!
}

input CartItemUpdateWithoutCartDataInput {
  product: ProductUpdateOneInput
  quantity: Int
  variants: ProductVariantUpdateManyInput
}

input CartItemUpdateWithWhereUniqueWithoutCartInput {
  where: CartItemWhereUniqueInput!
  data: CartItemUpdateWithoutCartDataInput!
}

input CartItemUpsertWithWhereUniqueWithoutCartInput {
  where: CartItemWhereUniqueInput!
  update: CartItemUpdateWithoutCartDataInput!
  create: CartItemCreateWithoutCartInput!
}

input CartItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  cart: CartWhereInput
  product: ProductWhereInput
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  variants_every: ProductVariantWhereInput
  variants_some: ProductVariantWhereInput
  variants_none: ProductVariantWhereInput
  AND: [CartItemWhereInput!]
  OR: [CartItemWhereInput!]
  NOT: [CartItemWhereInput!]
}

input CartItemWhereUniqueInput {
  id: ID
}

enum CartOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CartPreviousValues {
  id: ID!
  updatedAt: DateTime!
}

type CartSubscriptionPayload {
  mutation: MutationType!
  node: Cart
  updatedFields: [String!]
  previousValues: CartPreviousValues
}

input CartSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CartWhereInput
  AND: [CartSubscriptionWhereInput!]
  OR: [CartSubscriptionWhereInput!]
  NOT: [CartSubscriptionWhereInput!]
}

input CartUpdateDataInput {
  products: CartItemUpdateManyWithoutCartInput
  customer: UserUpdateOneRequiredWithoutCartInput
}

input CartUpdateInput {
  products: CartItemUpdateManyWithoutCartInput
  customer: UserUpdateOneRequiredWithoutCartInput
}

input CartUpdateOneRequiredInput {
  create: CartCreateInput
  update: CartUpdateDataInput
  upsert: CartUpsertNestedInput
  connect: CartWhereUniqueInput
}

input CartUpdateOneRequiredWithoutCustomerInput {
  create: CartCreateWithoutCustomerInput
  update: CartUpdateWithoutCustomerDataInput
  upsert: CartUpsertWithoutCustomerInput
  connect: CartWhereUniqueInput
}

input CartUpdateOneRequiredWithoutProductsInput {
  create: CartCreateWithoutProductsInput
  update: CartUpdateWithoutProductsDataInput
  upsert: CartUpsertWithoutProductsInput
  connect: CartWhereUniqueInput
}

input CartUpdateWithoutCustomerDataInput {
  products: CartItemUpdateManyWithoutCartInput
}

input CartUpdateWithoutProductsDataInput {
  customer: UserUpdateOneRequiredWithoutCartInput
}

input CartUpsertNestedInput {
  update: CartUpdateDataInput!
  create: CartCreateInput!
}

input CartUpsertWithoutCustomerInput {
  update: CartUpdateWithoutCustomerDataInput!
  create: CartCreateWithoutCustomerInput!
}

input CartUpsertWithoutProductsInput {
  update: CartUpdateWithoutProductsDataInput!
  create: CartCreateWithoutProductsInput!
}

input CartWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  products_every: CartItemWhereInput
  products_some: CartItemWhereInput
  products_none: CartItemWhereInput
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  customer: UserWhereInput
  AND: [CartWhereInput!]
  OR: [CartWhereInput!]
  NOT: [CartWhereInput!]
}

input CartWhereUniqueInput {
  id: ID
}

type CreditCard {
  id: ID!
  cardNumber: String!
  holder: String!
  expirationDate: String!
  saveCard: Boolean
  brand: String!
}

type CreditCardConnection {
  pageInfo: PageInfo!
  edges: [CreditCardEdge]!
  aggregate: AggregateCreditCard!
}

input CreditCardCreateInput {
  cardNumber: String!
  holder: String!
  expirationDate: String!
  saveCard: Boolean
  brand: String!
}

input CreditCardCreateOneInput {
  create: CreditCardCreateInput
  connect: CreditCardWhereUniqueInput
}

type CreditCardEdge {
  node: CreditCard!
  cursor: String!
}

enum CreditCardOrderByInput {
  id_ASC
  id_DESC
  cardNumber_ASC
  cardNumber_DESC
  holder_ASC
  holder_DESC
  expirationDate_ASC
  expirationDate_DESC
  saveCard_ASC
  saveCard_DESC
  brand_ASC
  brand_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CreditCardPreviousValues {
  id: ID!
  cardNumber: String!
  holder: String!
  expirationDate: String!
  saveCard: Boolean
  brand: String!
}

type CreditCardSubscriptionPayload {
  mutation: MutationType!
  node: CreditCard
  updatedFields: [String!]
  previousValues: CreditCardPreviousValues
}

input CreditCardSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CreditCardWhereInput
  AND: [CreditCardSubscriptionWhereInput!]
  OR: [CreditCardSubscriptionWhereInput!]
  NOT: [CreditCardSubscriptionWhereInput!]
}

input CreditCardUpdateDataInput {
  cardNumber: String
  holder: String
  expirationDate: String
  saveCard: Boolean
  brand: String
}

input CreditCardUpdateInput {
  cardNumber: String
  holder: String
  expirationDate: String
  saveCard: Boolean
  brand: String
}

input CreditCardUpdateManyMutationInput {
  cardNumber: String
  holder: String
  expirationDate: String
  saveCard: Boolean
  brand: String
}

input CreditCardUpdateOneInput {
  create: CreditCardCreateInput
  update: CreditCardUpdateDataInput
  upsert: CreditCardUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: CreditCardWhereUniqueInput
}

input CreditCardUpsertNestedInput {
  update: CreditCardUpdateDataInput!
  create: CreditCardCreateInput!
}

input CreditCardWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  cardNumber: String
  cardNumber_not: String
  cardNumber_in: [String!]
  cardNumber_not_in: [String!]
  cardNumber_lt: String
  cardNumber_lte: String
  cardNumber_gt: String
  cardNumber_gte: String
  cardNumber_contains: String
  cardNumber_not_contains: String
  cardNumber_starts_with: String
  cardNumber_not_starts_with: String
  cardNumber_ends_with: String
  cardNumber_not_ends_with: String
  holder: String
  holder_not: String
  holder_in: [String!]
  holder_not_in: [String!]
  holder_lt: String
  holder_lte: String
  holder_gt: String
  holder_gte: String
  holder_contains: String
  holder_not_contains: String
  holder_starts_with: String
  holder_not_starts_with: String
  holder_ends_with: String
  holder_not_ends_with: String
  expirationDate: String
  expirationDate_not: String
  expirationDate_in: [String!]
  expirationDate_not_in: [String!]
  expirationDate_lt: String
  expirationDate_lte: String
  expirationDate_gt: String
  expirationDate_gte: String
  expirationDate_contains: String
  expirationDate_not_contains: String
  expirationDate_starts_with: String
  expirationDate_not_starts_with: String
  expirationDate_ends_with: String
  expirationDate_not_ends_with: String
  saveCard: Boolean
  saveCard_not: Boolean
  brand: String
  brand_not: String
  brand_in: [String!]
  brand_not_in: [String!]
  brand_lt: String
  brand_lte: String
  brand_gt: String
  brand_gte: String
  brand_contains: String
  brand_not_contains: String
  brand_starts_with: String
  brand_not_starts_with: String
  brand_ends_with: String
  brand_not_ends_with: String
  AND: [CreditCardWhereInput!]
  OR: [CreditCardWhereInput!]
  NOT: [CreditCardWhereInput!]
}

input CreditCardWhereUniqueInput {
  id: ID
}

type Cupom {
  id: ID!
  discount: Int!
  code: String!
  updatedAt: DateTime!
}

type CupomConnection {
  pageInfo: PageInfo!
  edges: [CupomEdge]!
  aggregate: AggregateCupom!
}

input CupomCreateInput {
  discount: Int!
  code: String!
}

input CupomCreateOneInput {
  create: CupomCreateInput
  connect: CupomWhereUniqueInput
}

type CupomEdge {
  node: Cupom!
  cursor: String!
}

enum CupomOrderByInput {
  id_ASC
  id_DESC
  discount_ASC
  discount_DESC
  code_ASC
  code_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CupomPreviousValues {
  id: ID!
  discount: Int!
  code: String!
  updatedAt: DateTime!
}

type CupomSubscriptionPayload {
  mutation: MutationType!
  node: Cupom
  updatedFields: [String!]
  previousValues: CupomPreviousValues
}

input CupomSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CupomWhereInput
  AND: [CupomSubscriptionWhereInput!]
  OR: [CupomSubscriptionWhereInput!]
  NOT: [CupomSubscriptionWhereInput!]
}

input CupomUpdateDataInput {
  discount: Int
  code: String
}

input CupomUpdateInput {
  discount: Int
  code: String
}

input CupomUpdateManyMutationInput {
  discount: Int
  code: String
}

input CupomUpdateOneInput {
  create: CupomCreateInput
  update: CupomUpdateDataInput
  upsert: CupomUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: CupomWhereUniqueInput
}

input CupomUpsertNestedInput {
  update: CupomUpdateDataInput!
  create: CupomCreateInput!
}

input CupomWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  discount: Int
  discount_not: Int
  discount_in: [Int!]
  discount_not_in: [Int!]
  discount_lt: Int
  discount_lte: Int
  discount_gt: Int
  discount_gte: Int
  code: String
  code_not: String
  code_in: [String!]
  code_not_in: [String!]
  code_lt: String
  code_lte: String
  code_gt: String
  code_gte: String
  code_contains: String
  code_not_contains: String
  code_starts_with: String
  code_not_starts_with: String
  code_ends_with: String
  code_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [CupomWhereInput!]
  OR: [CupomWhereInput!]
  NOT: [CupomWhereInput!]
}

input CupomWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createAddress(data: AddressCreateInput!): Address!
  updateAddress(data: AddressUpdateInput!, where: AddressWhereUniqueInput!): Address
  updateManyAddresses(data: AddressUpdateManyMutationInput!, where: AddressWhereInput): BatchPayload!
  upsertAddress(where: AddressWhereUniqueInput!, create: AddressCreateInput!, update: AddressUpdateInput!): Address!
  deleteAddress(where: AddressWhereUniqueInput!): Address
  deleteManyAddresses(where: AddressWhereInput): BatchPayload!
  createCart(data: CartCreateInput!): Cart!
  updateCart(data: CartUpdateInput!, where: CartWhereUniqueInput!): Cart
  upsertCart(where: CartWhereUniqueInput!, create: CartCreateInput!, update: CartUpdateInput!): Cart!
  deleteCart(where: CartWhereUniqueInput!): Cart
  deleteManyCarts(where: CartWhereInput): BatchPayload!
  createCartItem(data: CartItemCreateInput!): CartItem!
  updateCartItem(data: CartItemUpdateInput!, where: CartItemWhereUniqueInput!): CartItem
  updateManyCartItems(data: CartItemUpdateManyMutationInput!, where: CartItemWhereInput): BatchPayload!
  upsertCartItem(where: CartItemWhereUniqueInput!, create: CartItemCreateInput!, update: CartItemUpdateInput!): CartItem!
  deleteCartItem(where: CartItemWhereUniqueInput!): CartItem
  deleteManyCartItems(where: CartItemWhereInput): BatchPayload!
  createCreditCard(data: CreditCardCreateInput!): CreditCard!
  updateCreditCard(data: CreditCardUpdateInput!, where: CreditCardWhereUniqueInput!): CreditCard
  updateManyCreditCards(data: CreditCardUpdateManyMutationInput!, where: CreditCardWhereInput): BatchPayload!
  upsertCreditCard(where: CreditCardWhereUniqueInput!, create: CreditCardCreateInput!, update: CreditCardUpdateInput!): CreditCard!
  deleteCreditCard(where: CreditCardWhereUniqueInput!): CreditCard
  deleteManyCreditCards(where: CreditCardWhereInput): BatchPayload!
  createCupom(data: CupomCreateInput!): Cupom!
  updateCupom(data: CupomUpdateInput!, where: CupomWhereUniqueInput!): Cupom
  updateManyCupoms(data: CupomUpdateManyMutationInput!, where: CupomWhereInput): BatchPayload!
  upsertCupom(where: CupomWhereUniqueInput!, create: CupomCreateInput!, update: CupomUpdateInput!): Cupom!
  deleteCupom(where: CupomWhereUniqueInput!): Cupom
  deleteManyCupoms(where: CupomWhereInput): BatchPayload!
  createNewsletterSubscription(data: NewsletterSubscriptionCreateInput!): NewsletterSubscription!
  updateNewsletterSubscription(data: NewsletterSubscriptionUpdateInput!, where: NewsletterSubscriptionWhereUniqueInput!): NewsletterSubscription
  updateManyNewsletterSubscriptions(data: NewsletterSubscriptionUpdateManyMutationInput!, where: NewsletterSubscriptionWhereInput): BatchPayload!
  upsertNewsletterSubscription(where: NewsletterSubscriptionWhereUniqueInput!, create: NewsletterSubscriptionCreateInput!, update: NewsletterSubscriptionUpdateInput!): NewsletterSubscription!
  deleteNewsletterSubscription(where: NewsletterSubscriptionWhereUniqueInput!): NewsletterSubscription
  deleteManyNewsletterSubscriptions(where: NewsletterSubscriptionWhereInput): BatchPayload!
  createOrder(data: OrderCreateInput!): Order!
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updateManyOrders(data: OrderUpdateManyMutationInput!, where: OrderWhereInput): BatchPayload!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  createOrderShippingAddress(data: OrderShippingAddressCreateInput!): OrderShippingAddress!
  updateOrderShippingAddress(data: OrderShippingAddressUpdateInput!, where: OrderShippingAddressWhereUniqueInput!): OrderShippingAddress
  updateManyOrderShippingAddresses(data: OrderShippingAddressUpdateManyMutationInput!, where: OrderShippingAddressWhereInput): BatchPayload!
  upsertOrderShippingAddress(where: OrderShippingAddressWhereUniqueInput!, create: OrderShippingAddressCreateInput!, update: OrderShippingAddressUpdateInput!): OrderShippingAddress!
  deleteOrderShippingAddress(where: OrderShippingAddressWhereUniqueInput!): OrderShippingAddress
  deleteManyOrderShippingAddresses(where: OrderShippingAddressWhereInput): BatchPayload!
  createPayment(data: PaymentCreateInput!): Payment!
  updatePayment(data: PaymentUpdateInput!, where: PaymentWhereUniqueInput!): Payment
  updateManyPayments(data: PaymentUpdateManyMutationInput!, where: PaymentWhereInput): BatchPayload!
  upsertPayment(where: PaymentWhereUniqueInput!, create: PaymentCreateInput!, update: PaymentUpdateInput!): Payment!
  deletePayment(where: PaymentWhereUniqueInput!): Payment
  deleteManyPayments(where: PaymentWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createProduct(data: ProductCreateInput!): Product!
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  createProductVariant(data: ProductVariantCreateInput!): ProductVariant!
  updateProductVariant(data: ProductVariantUpdateInput!, where: ProductVariantWhereUniqueInput!): ProductVariant
  updateManyProductVariants(data: ProductVariantUpdateManyMutationInput!, where: ProductVariantWhereInput): BatchPayload!
  upsertProductVariant(where: ProductVariantWhereUniqueInput!, create: ProductVariantCreateInput!, update: ProductVariantUpdateInput!): ProductVariant!
  deleteProductVariant(where: ProductVariantWhereUniqueInput!): ProductVariant
  deleteManyProductVariants(where: ProductVariantWhereInput): BatchPayload!
  createStores(data: StoresCreateInput!): Stores!
  updateManyStoreses(data: StoresUpdateManyMutationInput!, where: StoresWhereInput): BatchPayload!
  deleteManyStoreses(where: StoresWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

type NewsletterSubscription {
  email: String!
}

type NewsletterSubscriptionConnection {
  pageInfo: PageInfo!
  edges: [NewsletterSubscriptionEdge]!
  aggregate: AggregateNewsletterSubscription!
}

input NewsletterSubscriptionCreateInput {
  email: String!
}

type NewsletterSubscriptionEdge {
  node: NewsletterSubscription!
  cursor: String!
}

enum NewsletterSubscriptionOrderByInput {
  email_ASC
  email_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type NewsletterSubscriptionPreviousValues {
  email: String!
}

type NewsletterSubscriptionSubscriptionPayload {
  mutation: MutationType!
  node: NewsletterSubscription
  updatedFields: [String!]
  previousValues: NewsletterSubscriptionPreviousValues
}

input NewsletterSubscriptionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: NewsletterSubscriptionWhereInput
  AND: [NewsletterSubscriptionSubscriptionWhereInput!]
  OR: [NewsletterSubscriptionSubscriptionWhereInput!]
  NOT: [NewsletterSubscriptionSubscriptionWhereInput!]
}

input NewsletterSubscriptionUpdateInput {
  email: String
}

input NewsletterSubscriptionUpdateManyMutationInput {
  email: String
}

input NewsletterSubscriptionWhereInput {
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  AND: [NewsletterSubscriptionWhereInput!]
  OR: [NewsletterSubscriptionWhereInput!]
  NOT: [NewsletterSubscriptionWhereInput!]
}

input NewsletterSubscriptionWhereUniqueInput {
  email: String
}

interface Node {
  id: ID!
}

type Order {
  id: ID!
  recurrying: Boolean!
  status: OrderStatus!
  cart: Cart!
  subTotalPrice: Int!
  totalShippingPrice: Int
  totalPrice: Int!
  customer: User!
  processedAt: DateTime
  updatedAt: DateTime!
  createdAt: DateTime!
  shippingAddress: OrderShippingAddress!
  payment: Payment
}

type OrderConnection {
  pageInfo: PageInfo!
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  recurrying: Boolean
  status: OrderStatus
  cart: CartCreateOneInput!
  subTotalPrice: Int!
  totalShippingPrice: Int
  totalPrice: Int!
  customer: UserCreateOneWithoutOrdersInput!
  processedAt: DateTime
  shippingAddress: OrderShippingAddressCreateOneWithoutOrderInput!
  payment: PaymentCreateOneWithoutOrderInput
}

input OrderCreateManyWithoutCustomerInput {
  create: [OrderCreateWithoutCustomerInput!]
  connect: [OrderWhereUniqueInput!]
}

input OrderCreateOneWithoutPaymentInput {
  create: OrderCreateWithoutPaymentInput
  connect: OrderWhereUniqueInput
}

input OrderCreateOneWithoutShippingAddressInput {
  create: OrderCreateWithoutShippingAddressInput
  connect: OrderWhereUniqueInput
}

input OrderCreateWithoutCustomerInput {
  recurrying: Boolean
  status: OrderStatus
  cart: CartCreateOneInput!
  subTotalPrice: Int!
  totalShippingPrice: Int
  totalPrice: Int!
  processedAt: DateTime
  shippingAddress: OrderShippingAddressCreateOneWithoutOrderInput!
  payment: PaymentCreateOneWithoutOrderInput
}

input OrderCreateWithoutPaymentInput {
  recurrying: Boolean
  status: OrderStatus
  cart: CartCreateOneInput!
  subTotalPrice: Int!
  totalShippingPrice: Int
  totalPrice: Int!
  customer: UserCreateOneWithoutOrdersInput!
  processedAt: DateTime
  shippingAddress: OrderShippingAddressCreateOneWithoutOrderInput!
}

input OrderCreateWithoutShippingAddressInput {
  recurrying: Boolean
  status: OrderStatus
  cart: CartCreateOneInput!
  subTotalPrice: Int!
  totalShippingPrice: Int
  totalPrice: Int!
  customer: UserCreateOneWithoutOrdersInput!
  processedAt: DateTime
  payment: PaymentCreateOneWithoutOrderInput
}

type OrderEdge {
  node: Order!
  cursor: String!
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
  recurrying_ASC
  recurrying_DESC
  status_ASC
  status_DESC
  subTotalPrice_ASC
  subTotalPrice_DESC
  totalShippingPrice_ASC
  totalShippingPrice_DESC
  totalPrice_ASC
  totalPrice_DESC
  processedAt_ASC
  processedAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type OrderPreviousValues {
  id: ID!
  recurrying: Boolean!
  status: OrderStatus!
  subTotalPrice: Int!
  totalShippingPrice: Int
  totalPrice: Int!
  processedAt: DateTime
  updatedAt: DateTime!
  createdAt: DateTime!
}

input OrderScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  recurrying: Boolean
  recurrying_not: Boolean
  status: OrderStatus
  status_not: OrderStatus
  status_in: [OrderStatus!]
  status_not_in: [OrderStatus!]
  subTotalPrice: Int
  subTotalPrice_not: Int
  subTotalPrice_in: [Int!]
  subTotalPrice_not_in: [Int!]
  subTotalPrice_lt: Int
  subTotalPrice_lte: Int
  subTotalPrice_gt: Int
  subTotalPrice_gte: Int
  totalShippingPrice: Int
  totalShippingPrice_not: Int
  totalShippingPrice_in: [Int!]
  totalShippingPrice_not_in: [Int!]
  totalShippingPrice_lt: Int
  totalShippingPrice_lte: Int
  totalShippingPrice_gt: Int
  totalShippingPrice_gte: Int
  totalPrice: Int
  totalPrice_not: Int
  totalPrice_in: [Int!]
  totalPrice_not_in: [Int!]
  totalPrice_lt: Int
  totalPrice_lte: Int
  totalPrice_gt: Int
  totalPrice_gte: Int
  processedAt: DateTime
  processedAt_not: DateTime
  processedAt_in: [DateTime!]
  processedAt_not_in: [DateTime!]
  processedAt_lt: DateTime
  processedAt_lte: DateTime
  processedAt_gt: DateTime
  processedAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [OrderScalarWhereInput!]
  OR: [OrderScalarWhereInput!]
  NOT: [OrderScalarWhereInput!]
}

type OrderShippingAddress {
  id: ID!
  street: String!
  number: String!
  complement: String
  zip: String!
  district: String
  city: String
  state: String
  country: String
  firstName: String!
  lastName: String!
  order: Order!
}

type OrderShippingAddressConnection {
  pageInfo: PageInfo!
  edges: [OrderShippingAddressEdge]!
  aggregate: AggregateOrderShippingAddress!
}

input OrderShippingAddressCreateInput {
  street: String!
  number: String!
  complement: String
  zip: String!
  district: String
  city: String
  state: String
  country: String
  firstName: String!
  lastName: String!
  order: OrderCreateOneWithoutShippingAddressInput!
}

input OrderShippingAddressCreateOneWithoutOrderInput {
  create: OrderShippingAddressCreateWithoutOrderInput
  connect: OrderShippingAddressWhereUniqueInput
}

input OrderShippingAddressCreateWithoutOrderInput {
  street: String!
  number: String!
  complement: String
  zip: String!
  district: String
  city: String
  state: String
  country: String
  firstName: String!
  lastName: String!
}

type OrderShippingAddressEdge {
  node: OrderShippingAddress!
  cursor: String!
}

enum OrderShippingAddressOrderByInput {
  id_ASC
  id_DESC
  street_ASC
  street_DESC
  number_ASC
  number_DESC
  complement_ASC
  complement_DESC
  zip_ASC
  zip_DESC
  district_ASC
  district_DESC
  city_ASC
  city_DESC
  state_ASC
  state_DESC
  country_ASC
  country_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OrderShippingAddressPreviousValues {
  id: ID!
  street: String!
  number: String!
  complement: String
  zip: String!
  district: String
  city: String
  state: String
  country: String
  firstName: String!
  lastName: String!
}

type OrderShippingAddressSubscriptionPayload {
  mutation: MutationType!
  node: OrderShippingAddress
  updatedFields: [String!]
  previousValues: OrderShippingAddressPreviousValues
}

input OrderShippingAddressSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderShippingAddressWhereInput
  AND: [OrderShippingAddressSubscriptionWhereInput!]
  OR: [OrderShippingAddressSubscriptionWhereInput!]
  NOT: [OrderShippingAddressSubscriptionWhereInput!]
}

input OrderShippingAddressUpdateInput {
  street: String
  number: String
  complement: String
  zip: String
  district: String
  city: String
  state: String
  country: String
  firstName: String
  lastName: String
  order: OrderUpdateOneRequiredWithoutShippingAddressInput
}

input OrderShippingAddressUpdateManyMutationInput {
  street: String
  number: String
  complement: String
  zip: String
  district: String
  city: String
  state: String
  country: String
  firstName: String
  lastName: String
}

input OrderShippingAddressUpdateOneRequiredWithoutOrderInput {
  create: OrderShippingAddressCreateWithoutOrderInput
  update: OrderShippingAddressUpdateWithoutOrderDataInput
  upsert: OrderShippingAddressUpsertWithoutOrderInput
  connect: OrderShippingAddressWhereUniqueInput
}

input OrderShippingAddressUpdateWithoutOrderDataInput {
  street: String
  number: String
  complement: String
  zip: String
  district: String
  city: String
  state: String
  country: String
  firstName: String
  lastName: String
}

input OrderShippingAddressUpsertWithoutOrderInput {
  update: OrderShippingAddressUpdateWithoutOrderDataInput!
  create: OrderShippingAddressCreateWithoutOrderInput!
}

input OrderShippingAddressWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  street: String
  street_not: String
  street_in: [String!]
  street_not_in: [String!]
  street_lt: String
  street_lte: String
  street_gt: String
  street_gte: String
  street_contains: String
  street_not_contains: String
  street_starts_with: String
  street_not_starts_with: String
  street_ends_with: String
  street_not_ends_with: String
  number: String
  number_not: String
  number_in: [String!]
  number_not_in: [String!]
  number_lt: String
  number_lte: String
  number_gt: String
  number_gte: String
  number_contains: String
  number_not_contains: String
  number_starts_with: String
  number_not_starts_with: String
  number_ends_with: String
  number_not_ends_with: String
  complement: String
  complement_not: String
  complement_in: [String!]
  complement_not_in: [String!]
  complement_lt: String
  complement_lte: String
  complement_gt: String
  complement_gte: String
  complement_contains: String
  complement_not_contains: String
  complement_starts_with: String
  complement_not_starts_with: String
  complement_ends_with: String
  complement_not_ends_with: String
  zip: String
  zip_not: String
  zip_in: [String!]
  zip_not_in: [String!]
  zip_lt: String
  zip_lte: String
  zip_gt: String
  zip_gte: String
  zip_contains: String
  zip_not_contains: String
  zip_starts_with: String
  zip_not_starts_with: String
  zip_ends_with: String
  zip_not_ends_with: String
  district: String
  district_not: String
  district_in: [String!]
  district_not_in: [String!]
  district_lt: String
  district_lte: String
  district_gt: String
  district_gte: String
  district_contains: String
  district_not_contains: String
  district_starts_with: String
  district_not_starts_with: String
  district_ends_with: String
  district_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  state: String
  state_not: String
  state_in: [String!]
  state_not_in: [String!]
  state_lt: String
  state_lte: String
  state_gt: String
  state_gte: String
  state_contains: String
  state_not_contains: String
  state_starts_with: String
  state_not_starts_with: String
  state_ends_with: String
  state_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  order: OrderWhereInput
  AND: [OrderShippingAddressWhereInput!]
  OR: [OrderShippingAddressWhereInput!]
  NOT: [OrderShippingAddressWhereInput!]
}

input OrderShippingAddressWhereUniqueInput {
  id: ID
}

enum OrderStatus {
  WAITING_PAYMENT
  CANCELED
  PACKAGING
  SHIPPED
  DELIVERED
}

type OrderSubscriptionPayload {
  mutation: MutationType!
  node: Order
  updatedFields: [String!]
  previousValues: OrderPreviousValues
}

input OrderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderWhereInput
  AND: [OrderSubscriptionWhereInput!]
  OR: [OrderSubscriptionWhereInput!]
  NOT: [OrderSubscriptionWhereInput!]
}

input OrderUpdateInput {
  recurrying: Boolean
  status: OrderStatus
  cart: CartUpdateOneRequiredInput
  subTotalPrice: Int
  totalShippingPrice: Int
  totalPrice: Int
  customer: UserUpdateOneRequiredWithoutOrdersInput
  processedAt: DateTime
  shippingAddress: OrderShippingAddressUpdateOneRequiredWithoutOrderInput
  payment: PaymentUpdateOneWithoutOrderInput
}

input OrderUpdateManyDataInput {
  recurrying: Boolean
  status: OrderStatus
  subTotalPrice: Int
  totalShippingPrice: Int
  totalPrice: Int
  processedAt: DateTime
}

input OrderUpdateManyMutationInput {
  recurrying: Boolean
  status: OrderStatus
  subTotalPrice: Int
  totalShippingPrice: Int
  totalPrice: Int
  processedAt: DateTime
}

input OrderUpdateManyWithoutCustomerInput {
  create: [OrderCreateWithoutCustomerInput!]
  delete: [OrderWhereUniqueInput!]
  connect: [OrderWhereUniqueInput!]
  set: [OrderWhereUniqueInput!]
  disconnect: [OrderWhereUniqueInput!]
  update: [OrderUpdateWithWhereUniqueWithoutCustomerInput!]
  upsert: [OrderUpsertWithWhereUniqueWithoutCustomerInput!]
  deleteMany: [OrderScalarWhereInput!]
  updateMany: [OrderUpdateManyWithWhereNestedInput!]
}

input OrderUpdateManyWithWhereNestedInput {
  where: OrderScalarWhereInput!
  data: OrderUpdateManyDataInput!
}

input OrderUpdateOneRequiredWithoutPaymentInput {
  create: OrderCreateWithoutPaymentInput
  update: OrderUpdateWithoutPaymentDataInput
  upsert: OrderUpsertWithoutPaymentInput
  connect: OrderWhereUniqueInput
}

input OrderUpdateOneRequiredWithoutShippingAddressInput {
  create: OrderCreateWithoutShippingAddressInput
  update: OrderUpdateWithoutShippingAddressDataInput
  upsert: OrderUpsertWithoutShippingAddressInput
  connect: OrderWhereUniqueInput
}

input OrderUpdateWithoutCustomerDataInput {
  recurrying: Boolean
  status: OrderStatus
  cart: CartUpdateOneRequiredInput
  subTotalPrice: Int
  totalShippingPrice: Int
  totalPrice: Int
  processedAt: DateTime
  shippingAddress: OrderShippingAddressUpdateOneRequiredWithoutOrderInput
  payment: PaymentUpdateOneWithoutOrderInput
}

input OrderUpdateWithoutPaymentDataInput {
  recurrying: Boolean
  status: OrderStatus
  cart: CartUpdateOneRequiredInput
  subTotalPrice: Int
  totalShippingPrice: Int
  totalPrice: Int
  customer: UserUpdateOneRequiredWithoutOrdersInput
  processedAt: DateTime
  shippingAddress: OrderShippingAddressUpdateOneRequiredWithoutOrderInput
}

input OrderUpdateWithoutShippingAddressDataInput {
  recurrying: Boolean
  status: OrderStatus
  cart: CartUpdateOneRequiredInput
  subTotalPrice: Int
  totalShippingPrice: Int
  totalPrice: Int
  customer: UserUpdateOneRequiredWithoutOrdersInput
  processedAt: DateTime
  payment: PaymentUpdateOneWithoutOrderInput
}

input OrderUpdateWithWhereUniqueWithoutCustomerInput {
  where: OrderWhereUniqueInput!
  data: OrderUpdateWithoutCustomerDataInput!
}

input OrderUpsertWithoutPaymentInput {
  update: OrderUpdateWithoutPaymentDataInput!
  create: OrderCreateWithoutPaymentInput!
}

input OrderUpsertWithoutShippingAddressInput {
  update: OrderUpdateWithoutShippingAddressDataInput!
  create: OrderCreateWithoutShippingAddressInput!
}

input OrderUpsertWithWhereUniqueWithoutCustomerInput {
  where: OrderWhereUniqueInput!
  update: OrderUpdateWithoutCustomerDataInput!
  create: OrderCreateWithoutCustomerInput!
}

input OrderWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  recurrying: Boolean
  recurrying_not: Boolean
  status: OrderStatus
  status_not: OrderStatus
  status_in: [OrderStatus!]
  status_not_in: [OrderStatus!]
  cart: CartWhereInput
  subTotalPrice: Int
  subTotalPrice_not: Int
  subTotalPrice_in: [Int!]
  subTotalPrice_not_in: [Int!]
  subTotalPrice_lt: Int
  subTotalPrice_lte: Int
  subTotalPrice_gt: Int
  subTotalPrice_gte: Int
  totalShippingPrice: Int
  totalShippingPrice_not: Int
  totalShippingPrice_in: [Int!]
  totalShippingPrice_not_in: [Int!]
  totalShippingPrice_lt: Int
  totalShippingPrice_lte: Int
  totalShippingPrice_gt: Int
  totalShippingPrice_gte: Int
  totalPrice: Int
  totalPrice_not: Int
  totalPrice_in: [Int!]
  totalPrice_not_in: [Int!]
  totalPrice_lt: Int
  totalPrice_lte: Int
  totalPrice_gt: Int
  totalPrice_gte: Int
  customer: UserWhereInput
  processedAt: DateTime
  processedAt_not: DateTime
  processedAt_in: [DateTime!]
  processedAt_not_in: [DateTime!]
  processedAt_lt: DateTime
  processedAt_lte: DateTime
  processedAt_gt: DateTime
  processedAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  shippingAddress: OrderShippingAddressWhereInput
  payment: PaymentWhereInput
  AND: [OrderWhereInput!]
  OR: [OrderWhereInput!]
  NOT: [OrderWhereInput!]
}

input OrderWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Payment {
  id: ID!
  paymentId: String
  type: String!
  currency: String
  creditCard: CreditCard
  customer: User!
  merchantOrderId: String!
  customerName: String
  order: Order!
  tid: String
  proofOfSale: String
  authorizationCode: String
  softDescriptor: String
  provider: String
  amount: Int
  serviceTaxAmount: Int
  installments: Int
  interest: Int
  capture: Boolean
  authenticate: Boolean
  recurrent: Boolean
  receivedDate: DateTime
  cupom: Cupom
  status: Int
  isSplitted: Boolean
  returnMessage: String
  returnCode: String
  updatedAt: DateTime!
  createdAt: DateTime!
}

type PaymentConnection {
  pageInfo: PageInfo!
  edges: [PaymentEdge]!
  aggregate: AggregatePayment!
}

input PaymentCreateInput {
  paymentId: String
  type: String!
  currency: String
  creditCard: CreditCardCreateOneInput
  customer: UserCreateOneWithoutPaymentsInput!
  merchantOrderId: String!
  customerName: String
  order: OrderCreateOneWithoutPaymentInput!
  tid: String
  proofOfSale: String
  authorizationCode: String
  softDescriptor: String
  provider: String
  amount: Int
  serviceTaxAmount: Int
  installments: Int
  interest: Int
  capture: Boolean
  authenticate: Boolean
  recurrent: Boolean
  receivedDate: DateTime
  cupom: CupomCreateOneInput
  status: Int
  isSplitted: Boolean
  returnMessage: String
  returnCode: String
}

input PaymentCreateManyWithoutCustomerInput {
  create: [PaymentCreateWithoutCustomerInput!]
  connect: [PaymentWhereUniqueInput!]
}

input PaymentCreateOneWithoutOrderInput {
  create: PaymentCreateWithoutOrderInput
  connect: PaymentWhereUniqueInput
}

input PaymentCreateWithoutCustomerInput {
  paymentId: String
  type: String!
  currency: String
  creditCard: CreditCardCreateOneInput
  merchantOrderId: String!
  customerName: String
  order: OrderCreateOneWithoutPaymentInput!
  tid: String
  proofOfSale: String
  authorizationCode: String
  softDescriptor: String
  provider: String
  amount: Int
  serviceTaxAmount: Int
  installments: Int
  interest: Int
  capture: Boolean
  authenticate: Boolean
  recurrent: Boolean
  receivedDate: DateTime
  cupom: CupomCreateOneInput
  status: Int
  isSplitted: Boolean
  returnMessage: String
  returnCode: String
}

input PaymentCreateWithoutOrderInput {
  paymentId: String
  type: String!
  currency: String
  creditCard: CreditCardCreateOneInput
  customer: UserCreateOneWithoutPaymentsInput!
  merchantOrderId: String!
  customerName: String
  tid: String
  proofOfSale: String
  authorizationCode: String
  softDescriptor: String
  provider: String
  amount: Int
  serviceTaxAmount: Int
  installments: Int
  interest: Int
  capture: Boolean
  authenticate: Boolean
  recurrent: Boolean
  receivedDate: DateTime
  cupom: CupomCreateOneInput
  status: Int
  isSplitted: Boolean
  returnMessage: String
  returnCode: String
}

type PaymentEdge {
  node: Payment!
  cursor: String!
}

enum PaymentOrderByInput {
  id_ASC
  id_DESC
  paymentId_ASC
  paymentId_DESC
  type_ASC
  type_DESC
  currency_ASC
  currency_DESC
  merchantOrderId_ASC
  merchantOrderId_DESC
  customerName_ASC
  customerName_DESC
  tid_ASC
  tid_DESC
  proofOfSale_ASC
  proofOfSale_DESC
  authorizationCode_ASC
  authorizationCode_DESC
  softDescriptor_ASC
  softDescriptor_DESC
  provider_ASC
  provider_DESC
  amount_ASC
  amount_DESC
  serviceTaxAmount_ASC
  serviceTaxAmount_DESC
  installments_ASC
  installments_DESC
  interest_ASC
  interest_DESC
  capture_ASC
  capture_DESC
  authenticate_ASC
  authenticate_DESC
  recurrent_ASC
  recurrent_DESC
  receivedDate_ASC
  receivedDate_DESC
  status_ASC
  status_DESC
  isSplitted_ASC
  isSplitted_DESC
  returnMessage_ASC
  returnMessage_DESC
  returnCode_ASC
  returnCode_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PaymentPreviousValues {
  id: ID!
  paymentId: String
  type: String!
  currency: String
  merchantOrderId: String!
  customerName: String
  tid: String
  proofOfSale: String
  authorizationCode: String
  softDescriptor: String
  provider: String
  amount: Int
  serviceTaxAmount: Int
  installments: Int
  interest: Int
  capture: Boolean
  authenticate: Boolean
  recurrent: Boolean
  receivedDate: DateTime
  status: Int
  isSplitted: Boolean
  returnMessage: String
  returnCode: String
  updatedAt: DateTime!
  createdAt: DateTime!
}

input PaymentScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  paymentId: String
  paymentId_not: String
  paymentId_in: [String!]
  paymentId_not_in: [String!]
  paymentId_lt: String
  paymentId_lte: String
  paymentId_gt: String
  paymentId_gte: String
  paymentId_contains: String
  paymentId_not_contains: String
  paymentId_starts_with: String
  paymentId_not_starts_with: String
  paymentId_ends_with: String
  paymentId_not_ends_with: String
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  currency: String
  currency_not: String
  currency_in: [String!]
  currency_not_in: [String!]
  currency_lt: String
  currency_lte: String
  currency_gt: String
  currency_gte: String
  currency_contains: String
  currency_not_contains: String
  currency_starts_with: String
  currency_not_starts_with: String
  currency_ends_with: String
  currency_not_ends_with: String
  merchantOrderId: String
  merchantOrderId_not: String
  merchantOrderId_in: [String!]
  merchantOrderId_not_in: [String!]
  merchantOrderId_lt: String
  merchantOrderId_lte: String
  merchantOrderId_gt: String
  merchantOrderId_gte: String
  merchantOrderId_contains: String
  merchantOrderId_not_contains: String
  merchantOrderId_starts_with: String
  merchantOrderId_not_starts_with: String
  merchantOrderId_ends_with: String
  merchantOrderId_not_ends_with: String
  customerName: String
  customerName_not: String
  customerName_in: [String!]
  customerName_not_in: [String!]
  customerName_lt: String
  customerName_lte: String
  customerName_gt: String
  customerName_gte: String
  customerName_contains: String
  customerName_not_contains: String
  customerName_starts_with: String
  customerName_not_starts_with: String
  customerName_ends_with: String
  customerName_not_ends_with: String
  tid: String
  tid_not: String
  tid_in: [String!]
  tid_not_in: [String!]
  tid_lt: String
  tid_lte: String
  tid_gt: String
  tid_gte: String
  tid_contains: String
  tid_not_contains: String
  tid_starts_with: String
  tid_not_starts_with: String
  tid_ends_with: String
  tid_not_ends_with: String
  proofOfSale: String
  proofOfSale_not: String
  proofOfSale_in: [String!]
  proofOfSale_not_in: [String!]
  proofOfSale_lt: String
  proofOfSale_lte: String
  proofOfSale_gt: String
  proofOfSale_gte: String
  proofOfSale_contains: String
  proofOfSale_not_contains: String
  proofOfSale_starts_with: String
  proofOfSale_not_starts_with: String
  proofOfSale_ends_with: String
  proofOfSale_not_ends_with: String
  authorizationCode: String
  authorizationCode_not: String
  authorizationCode_in: [String!]
  authorizationCode_not_in: [String!]
  authorizationCode_lt: String
  authorizationCode_lte: String
  authorizationCode_gt: String
  authorizationCode_gte: String
  authorizationCode_contains: String
  authorizationCode_not_contains: String
  authorizationCode_starts_with: String
  authorizationCode_not_starts_with: String
  authorizationCode_ends_with: String
  authorizationCode_not_ends_with: String
  softDescriptor: String
  softDescriptor_not: String
  softDescriptor_in: [String!]
  softDescriptor_not_in: [String!]
  softDescriptor_lt: String
  softDescriptor_lte: String
  softDescriptor_gt: String
  softDescriptor_gte: String
  softDescriptor_contains: String
  softDescriptor_not_contains: String
  softDescriptor_starts_with: String
  softDescriptor_not_starts_with: String
  softDescriptor_ends_with: String
  softDescriptor_not_ends_with: String
  provider: String
  provider_not: String
  provider_in: [String!]
  provider_not_in: [String!]
  provider_lt: String
  provider_lte: String
  provider_gt: String
  provider_gte: String
  provider_contains: String
  provider_not_contains: String
  provider_starts_with: String
  provider_not_starts_with: String
  provider_ends_with: String
  provider_not_ends_with: String
  amount: Int
  amount_not: Int
  amount_in: [Int!]
  amount_not_in: [Int!]
  amount_lt: Int
  amount_lte: Int
  amount_gt: Int
  amount_gte: Int
  serviceTaxAmount: Int
  serviceTaxAmount_not: Int
  serviceTaxAmount_in: [Int!]
  serviceTaxAmount_not_in: [Int!]
  serviceTaxAmount_lt: Int
  serviceTaxAmount_lte: Int
  serviceTaxAmount_gt: Int
  serviceTaxAmount_gte: Int
  installments: Int
  installments_not: Int
  installments_in: [Int!]
  installments_not_in: [Int!]
  installments_lt: Int
  installments_lte: Int
  installments_gt: Int
  installments_gte: Int
  interest: Int
  interest_not: Int
  interest_in: [Int!]
  interest_not_in: [Int!]
  interest_lt: Int
  interest_lte: Int
  interest_gt: Int
  interest_gte: Int
  capture: Boolean
  capture_not: Boolean
  authenticate: Boolean
  authenticate_not: Boolean
  recurrent: Boolean
  recurrent_not: Boolean
  receivedDate: DateTime
  receivedDate_not: DateTime
  receivedDate_in: [DateTime!]
  receivedDate_not_in: [DateTime!]
  receivedDate_lt: DateTime
  receivedDate_lte: DateTime
  receivedDate_gt: DateTime
  receivedDate_gte: DateTime
  status: Int
  status_not: Int
  status_in: [Int!]
  status_not_in: [Int!]
  status_lt: Int
  status_lte: Int
  status_gt: Int
  status_gte: Int
  isSplitted: Boolean
  isSplitted_not: Boolean
  returnMessage: String
  returnMessage_not: String
  returnMessage_in: [String!]
  returnMessage_not_in: [String!]
  returnMessage_lt: String
  returnMessage_lte: String
  returnMessage_gt: String
  returnMessage_gte: String
  returnMessage_contains: String
  returnMessage_not_contains: String
  returnMessage_starts_with: String
  returnMessage_not_starts_with: String
  returnMessage_ends_with: String
  returnMessage_not_ends_with: String
  returnCode: String
  returnCode_not: String
  returnCode_in: [String!]
  returnCode_not_in: [String!]
  returnCode_lt: String
  returnCode_lte: String
  returnCode_gt: String
  returnCode_gte: String
  returnCode_contains: String
  returnCode_not_contains: String
  returnCode_starts_with: String
  returnCode_not_starts_with: String
  returnCode_ends_with: String
  returnCode_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [PaymentScalarWhereInput!]
  OR: [PaymentScalarWhereInput!]
  NOT: [PaymentScalarWhereInput!]
}

type PaymentSubscriptionPayload {
  mutation: MutationType!
  node: Payment
  updatedFields: [String!]
  previousValues: PaymentPreviousValues
}

input PaymentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PaymentWhereInput
  AND: [PaymentSubscriptionWhereInput!]
  OR: [PaymentSubscriptionWhereInput!]
  NOT: [PaymentSubscriptionWhereInput!]
}

input PaymentUpdateInput {
  paymentId: String
  type: String
  currency: String
  creditCard: CreditCardUpdateOneInput
  customer: UserUpdateOneRequiredWithoutPaymentsInput
  merchantOrderId: String
  customerName: String
  order: OrderUpdateOneRequiredWithoutPaymentInput
  tid: String
  proofOfSale: String
  authorizationCode: String
  softDescriptor: String
  provider: String
  amount: Int
  serviceTaxAmount: Int
  installments: Int
  interest: Int
  capture: Boolean
  authenticate: Boolean
  recurrent: Boolean
  receivedDate: DateTime
  cupom: CupomUpdateOneInput
  status: Int
  isSplitted: Boolean
  returnMessage: String
  returnCode: String
}

input PaymentUpdateManyDataInput {
  paymentId: String
  type: String
  currency: String
  merchantOrderId: String
  customerName: String
  tid: String
  proofOfSale: String
  authorizationCode: String
  softDescriptor: String
  provider: String
  amount: Int
  serviceTaxAmount: Int
  installments: Int
  interest: Int
  capture: Boolean
  authenticate: Boolean
  recurrent: Boolean
  receivedDate: DateTime
  status: Int
  isSplitted: Boolean
  returnMessage: String
  returnCode: String
}

input PaymentUpdateManyMutationInput {
  paymentId: String
  type: String
  currency: String
  merchantOrderId: String
  customerName: String
  tid: String
  proofOfSale: String
  authorizationCode: String
  softDescriptor: String
  provider: String
  amount: Int
  serviceTaxAmount: Int
  installments: Int
  interest: Int
  capture: Boolean
  authenticate: Boolean
  recurrent: Boolean
  receivedDate: DateTime
  status: Int
  isSplitted: Boolean
  returnMessage: String
  returnCode: String
}

input PaymentUpdateManyWithoutCustomerInput {
  create: [PaymentCreateWithoutCustomerInput!]
  delete: [PaymentWhereUniqueInput!]
  connect: [PaymentWhereUniqueInput!]
  set: [PaymentWhereUniqueInput!]
  disconnect: [PaymentWhereUniqueInput!]
  update: [PaymentUpdateWithWhereUniqueWithoutCustomerInput!]
  upsert: [PaymentUpsertWithWhereUniqueWithoutCustomerInput!]
  deleteMany: [PaymentScalarWhereInput!]
  updateMany: [PaymentUpdateManyWithWhereNestedInput!]
}

input PaymentUpdateManyWithWhereNestedInput {
  where: PaymentScalarWhereInput!
  data: PaymentUpdateManyDataInput!
}

input PaymentUpdateOneWithoutOrderInput {
  create: PaymentCreateWithoutOrderInput
  update: PaymentUpdateWithoutOrderDataInput
  upsert: PaymentUpsertWithoutOrderInput
  delete: Boolean
  disconnect: Boolean
  connect: PaymentWhereUniqueInput
}

input PaymentUpdateWithoutCustomerDataInput {
  paymentId: String
  type: String
  currency: String
  creditCard: CreditCardUpdateOneInput
  merchantOrderId: String
  customerName: String
  order: OrderUpdateOneRequiredWithoutPaymentInput
  tid: String
  proofOfSale: String
  authorizationCode: String
  softDescriptor: String
  provider: String
  amount: Int
  serviceTaxAmount: Int
  installments: Int
  interest: Int
  capture: Boolean
  authenticate: Boolean
  recurrent: Boolean
  receivedDate: DateTime
  cupom: CupomUpdateOneInput
  status: Int
  isSplitted: Boolean
  returnMessage: String
  returnCode: String
}

input PaymentUpdateWithoutOrderDataInput {
  paymentId: String
  type: String
  currency: String
  creditCard: CreditCardUpdateOneInput
  customer: UserUpdateOneRequiredWithoutPaymentsInput
  merchantOrderId: String
  customerName: String
  tid: String
  proofOfSale: String
  authorizationCode: String
  softDescriptor: String
  provider: String
  amount: Int
  serviceTaxAmount: Int
  installments: Int
  interest: Int
  capture: Boolean
  authenticate: Boolean
  recurrent: Boolean
  receivedDate: DateTime
  cupom: CupomUpdateOneInput
  status: Int
  isSplitted: Boolean
  returnMessage: String
  returnCode: String
}

input PaymentUpdateWithWhereUniqueWithoutCustomerInput {
  where: PaymentWhereUniqueInput!
  data: PaymentUpdateWithoutCustomerDataInput!
}

input PaymentUpsertWithoutOrderInput {
  update: PaymentUpdateWithoutOrderDataInput!
  create: PaymentCreateWithoutOrderInput!
}

input PaymentUpsertWithWhereUniqueWithoutCustomerInput {
  where: PaymentWhereUniqueInput!
  update: PaymentUpdateWithoutCustomerDataInput!
  create: PaymentCreateWithoutCustomerInput!
}

input PaymentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  paymentId: String
  paymentId_not: String
  paymentId_in: [String!]
  paymentId_not_in: [String!]
  paymentId_lt: String
  paymentId_lte: String
  paymentId_gt: String
  paymentId_gte: String
  paymentId_contains: String
  paymentId_not_contains: String
  paymentId_starts_with: String
  paymentId_not_starts_with: String
  paymentId_ends_with: String
  paymentId_not_ends_with: String
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  currency: String
  currency_not: String
  currency_in: [String!]
  currency_not_in: [String!]
  currency_lt: String
  currency_lte: String
  currency_gt: String
  currency_gte: String
  currency_contains: String
  currency_not_contains: String
  currency_starts_with: String
  currency_not_starts_with: String
  currency_ends_with: String
  currency_not_ends_with: String
  creditCard: CreditCardWhereInput
  customer: UserWhereInput
  merchantOrderId: String
  merchantOrderId_not: String
  merchantOrderId_in: [String!]
  merchantOrderId_not_in: [String!]
  merchantOrderId_lt: String
  merchantOrderId_lte: String
  merchantOrderId_gt: String
  merchantOrderId_gte: String
  merchantOrderId_contains: String
  merchantOrderId_not_contains: String
  merchantOrderId_starts_with: String
  merchantOrderId_not_starts_with: String
  merchantOrderId_ends_with: String
  merchantOrderId_not_ends_with: String
  customerName: String
  customerName_not: String
  customerName_in: [String!]
  customerName_not_in: [String!]
  customerName_lt: String
  customerName_lte: String
  customerName_gt: String
  customerName_gte: String
  customerName_contains: String
  customerName_not_contains: String
  customerName_starts_with: String
  customerName_not_starts_with: String
  customerName_ends_with: String
  customerName_not_ends_with: String
  order: OrderWhereInput
  tid: String
  tid_not: String
  tid_in: [String!]
  tid_not_in: [String!]
  tid_lt: String
  tid_lte: String
  tid_gt: String
  tid_gte: String
  tid_contains: String
  tid_not_contains: String
  tid_starts_with: String
  tid_not_starts_with: String
  tid_ends_with: String
  tid_not_ends_with: String
  proofOfSale: String
  proofOfSale_not: String
  proofOfSale_in: [String!]
  proofOfSale_not_in: [String!]
  proofOfSale_lt: String
  proofOfSale_lte: String
  proofOfSale_gt: String
  proofOfSale_gte: String
  proofOfSale_contains: String
  proofOfSale_not_contains: String
  proofOfSale_starts_with: String
  proofOfSale_not_starts_with: String
  proofOfSale_ends_with: String
  proofOfSale_not_ends_with: String
  authorizationCode: String
  authorizationCode_not: String
  authorizationCode_in: [String!]
  authorizationCode_not_in: [String!]
  authorizationCode_lt: String
  authorizationCode_lte: String
  authorizationCode_gt: String
  authorizationCode_gte: String
  authorizationCode_contains: String
  authorizationCode_not_contains: String
  authorizationCode_starts_with: String
  authorizationCode_not_starts_with: String
  authorizationCode_ends_with: String
  authorizationCode_not_ends_with: String
  softDescriptor: String
  softDescriptor_not: String
  softDescriptor_in: [String!]
  softDescriptor_not_in: [String!]
  softDescriptor_lt: String
  softDescriptor_lte: String
  softDescriptor_gt: String
  softDescriptor_gte: String
  softDescriptor_contains: String
  softDescriptor_not_contains: String
  softDescriptor_starts_with: String
  softDescriptor_not_starts_with: String
  softDescriptor_ends_with: String
  softDescriptor_not_ends_with: String
  provider: String
  provider_not: String
  provider_in: [String!]
  provider_not_in: [String!]
  provider_lt: String
  provider_lte: String
  provider_gt: String
  provider_gte: String
  provider_contains: String
  provider_not_contains: String
  provider_starts_with: String
  provider_not_starts_with: String
  provider_ends_with: String
  provider_not_ends_with: String
  amount: Int
  amount_not: Int
  amount_in: [Int!]
  amount_not_in: [Int!]
  amount_lt: Int
  amount_lte: Int
  amount_gt: Int
  amount_gte: Int
  serviceTaxAmount: Int
  serviceTaxAmount_not: Int
  serviceTaxAmount_in: [Int!]
  serviceTaxAmount_not_in: [Int!]
  serviceTaxAmount_lt: Int
  serviceTaxAmount_lte: Int
  serviceTaxAmount_gt: Int
  serviceTaxAmount_gte: Int
  installments: Int
  installments_not: Int
  installments_in: [Int!]
  installments_not_in: [Int!]
  installments_lt: Int
  installments_lte: Int
  installments_gt: Int
  installments_gte: Int
  interest: Int
  interest_not: Int
  interest_in: [Int!]
  interest_not_in: [Int!]
  interest_lt: Int
  interest_lte: Int
  interest_gt: Int
  interest_gte: Int
  capture: Boolean
  capture_not: Boolean
  authenticate: Boolean
  authenticate_not: Boolean
  recurrent: Boolean
  recurrent_not: Boolean
  receivedDate: DateTime
  receivedDate_not: DateTime
  receivedDate_in: [DateTime!]
  receivedDate_not_in: [DateTime!]
  receivedDate_lt: DateTime
  receivedDate_lte: DateTime
  receivedDate_gt: DateTime
  receivedDate_gte: DateTime
  cupom: CupomWhereInput
  status: Int
  status_not: Int
  status_in: [Int!]
  status_not_in: [Int!]
  status_lt: Int
  status_lte: Int
  status_gt: Int
  status_gte: Int
  isSplitted: Boolean
  isSplitted_not: Boolean
  returnMessage: String
  returnMessage_not: String
  returnMessage_in: [String!]
  returnMessage_not_in: [String!]
  returnMessage_lt: String
  returnMessage_lte: String
  returnMessage_gt: String
  returnMessage_gte: String
  returnMessage_contains: String
  returnMessage_not_contains: String
  returnMessage_starts_with: String
  returnMessage_not_starts_with: String
  returnMessage_ends_with: String
  returnMessage_not_ends_with: String
  returnCode: String
  returnCode_not: String
  returnCode_in: [String!]
  returnCode_not_in: [String!]
  returnCode_lt: String
  returnCode_lte: String
  returnCode_gt: String
  returnCode_gte: String
  returnCode_contains: String
  returnCode_not_contains: String
  returnCode_starts_with: String
  returnCode_not_starts_with: String
  returnCode_ends_with: String
  returnCode_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [PaymentWhereInput!]
  OR: [PaymentWhereInput!]
  NOT: [PaymentWhereInput!]
}

input PaymentWhereUniqueInput {
  id: ID
}

type Post {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  body: String!
  author: User!
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  isPublished: Boolean
  title: String!
  body: String!
  author: UserCreateOneWithoutPostsInput!
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  isPublished: Boolean
  title: String!
  body: String!
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  isPublished_ASC
  isPublished_DESC
  title_ASC
  title_DESC
  body_ASC
  body_DESC
}

type PostPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  body: String!
}

input PostScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  isPublished: Boolean
  isPublished_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  body: String
  body_not: String
  body_in: [String!]
  body_not_in: [String!]
  body_lt: String
  body_lte: String
  body_gt: String
  body_gte: String
  body_contains: String
  body_not_contains: String
  body_starts_with: String
  body_not_starts_with: String
  body_ends_with: String
  body_not_ends_with: String
  AND: [PostScalarWhereInput!]
  OR: [PostScalarWhereInput!]
  NOT: [PostScalarWhereInput!]
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  isPublished: Boolean
  title: String
  body: String
  author: UserUpdateOneRequiredWithoutPostsInput
}

input PostUpdateManyDataInput {
  isPublished: Boolean
  title: String
  body: String
}

input PostUpdateManyMutationInput {
  isPublished: Boolean
  title: String
  body: String
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  set: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
}

input PostUpdateWithoutAuthorDataInput {
  isPublished: Boolean
  title: String
  body: String
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  isPublished: Boolean
  isPublished_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  body: String
  body_not: String
  body_in: [String!]
  body_not_in: [String!]
  body_lt: String
  body_lte: String
  body_gt: String
  body_gte: String
  body_contains: String
  body_not_contains: String
  body_starts_with: String
  body_not_starts_with: String
  body_ends_with: String
  body_not_ends_with: String
  author: UserWhereInput
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Product {
  id: ID!
  price: Int!
  name: String!
  stockQuantity: Int
  variants(where: ProductVariantWhereInput, orderBy: ProductVariantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductVariant!]
  description: String
  image: String
  updatedAt: DateTime!
}

type ProductConnection {
  pageInfo: PageInfo!
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  price: Int!
  name: String!
  stockQuantity: Int
  variants: ProductVariantCreateManyWithoutProductInput
  description: String
  image: String
}

input ProductCreateOneInput {
  create: ProductCreateInput
  connect: ProductWhereUniqueInput
}

input ProductCreateOneWithoutVariantsInput {
  create: ProductCreateWithoutVariantsInput
  connect: ProductWhereUniqueInput
}

input ProductCreateWithoutVariantsInput {
  price: Int!
  name: String!
  stockQuantity: Int
  description: String
  image: String
}

type ProductEdge {
  node: Product!
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  price_ASC
  price_DESC
  name_ASC
  name_DESC
  stockQuantity_ASC
  stockQuantity_DESC
  description_ASC
  description_DESC
  image_ASC
  image_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ProductPreviousValues {
  id: ID!
  price: Int!
  name: String!
  stockQuantity: Int
  description: String
  image: String
  updatedAt: DateTime!
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
  AND: [ProductSubscriptionWhereInput!]
  OR: [ProductSubscriptionWhereInput!]
  NOT: [ProductSubscriptionWhereInput!]
}

input ProductUpdateDataInput {
  price: Int
  name: String
  stockQuantity: Int
  variants: ProductVariantUpdateManyWithoutProductInput
  description: String
  image: String
}

input ProductUpdateInput {
  price: Int
  name: String
  stockQuantity: Int
  variants: ProductVariantUpdateManyWithoutProductInput
  description: String
  image: String
}

input ProductUpdateManyMutationInput {
  price: Int
  name: String
  stockQuantity: Int
  description: String
  image: String
}

input ProductUpdateOneInput {
  create: ProductCreateInput
  update: ProductUpdateDataInput
  upsert: ProductUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ProductWhereUniqueInput
}

input ProductUpdateOneRequiredWithoutVariantsInput {
  create: ProductCreateWithoutVariantsInput
  update: ProductUpdateWithoutVariantsDataInput
  upsert: ProductUpsertWithoutVariantsInput
  connect: ProductWhereUniqueInput
}

input ProductUpdateWithoutVariantsDataInput {
  price: Int
  name: String
  stockQuantity: Int
  description: String
  image: String
}

input ProductUpsertNestedInput {
  update: ProductUpdateDataInput!
  create: ProductCreateInput!
}

input ProductUpsertWithoutVariantsInput {
  update: ProductUpdateWithoutVariantsDataInput!
  create: ProductCreateWithoutVariantsInput!
}

type ProductVariant {
  id: ID!
  name: String!
  information: String
  image: String
  product: Product!
  updatedAt: DateTime!
  createdAt: DateTime!
}

type ProductVariantConnection {
  pageInfo: PageInfo!
  edges: [ProductVariantEdge]!
  aggregate: AggregateProductVariant!
}

input ProductVariantCreateInput {
  name: String!
  information: String
  image: String
  product: ProductCreateOneWithoutVariantsInput!
}

input ProductVariantCreateManyInput {
  create: [ProductVariantCreateInput!]
  connect: [ProductVariantWhereUniqueInput!]
}

input ProductVariantCreateManyWithoutProductInput {
  create: [ProductVariantCreateWithoutProductInput!]
  connect: [ProductVariantWhereUniqueInput!]
}

input ProductVariantCreateWithoutProductInput {
  name: String!
  information: String
  image: String
}

type ProductVariantEdge {
  node: ProductVariant!
  cursor: String!
}

enum ProductVariantOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  information_ASC
  information_DESC
  image_ASC
  image_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ProductVariantPreviousValues {
  id: ID!
  name: String!
  information: String
  image: String
  updatedAt: DateTime!
  createdAt: DateTime!
}

input ProductVariantScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  information: String
  information_not: String
  information_in: [String!]
  information_not_in: [String!]
  information_lt: String
  information_lte: String
  information_gt: String
  information_gte: String
  information_contains: String
  information_not_contains: String
  information_starts_with: String
  information_not_starts_with: String
  information_ends_with: String
  information_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [ProductVariantScalarWhereInput!]
  OR: [ProductVariantScalarWhereInput!]
  NOT: [ProductVariantScalarWhereInput!]
}

type ProductVariantSubscriptionPayload {
  mutation: MutationType!
  node: ProductVariant
  updatedFields: [String!]
  previousValues: ProductVariantPreviousValues
}

input ProductVariantSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductVariantWhereInput
  AND: [ProductVariantSubscriptionWhereInput!]
  OR: [ProductVariantSubscriptionWhereInput!]
  NOT: [ProductVariantSubscriptionWhereInput!]
}

input ProductVariantUpdateDataInput {
  name: String
  information: String
  image: String
  product: ProductUpdateOneRequiredWithoutVariantsInput
}

input ProductVariantUpdateInput {
  name: String
  information: String
  image: String
  product: ProductUpdateOneRequiredWithoutVariantsInput
}

input ProductVariantUpdateManyDataInput {
  name: String
  information: String
  image: String
}

input ProductVariantUpdateManyInput {
  create: [ProductVariantCreateInput!]
  update: [ProductVariantUpdateWithWhereUniqueNestedInput!]
  upsert: [ProductVariantUpsertWithWhereUniqueNestedInput!]
  delete: [ProductVariantWhereUniqueInput!]
  connect: [ProductVariantWhereUniqueInput!]
  set: [ProductVariantWhereUniqueInput!]
  disconnect: [ProductVariantWhereUniqueInput!]
  deleteMany: [ProductVariantScalarWhereInput!]
  updateMany: [ProductVariantUpdateManyWithWhereNestedInput!]
}

input ProductVariantUpdateManyMutationInput {
  name: String
  information: String
  image: String
}

input ProductVariantUpdateManyWithoutProductInput {
  create: [ProductVariantCreateWithoutProductInput!]
  delete: [ProductVariantWhereUniqueInput!]
  connect: [ProductVariantWhereUniqueInput!]
  set: [ProductVariantWhereUniqueInput!]
  disconnect: [ProductVariantWhereUniqueInput!]
  update: [ProductVariantUpdateWithWhereUniqueWithoutProductInput!]
  upsert: [ProductVariantUpsertWithWhereUniqueWithoutProductInput!]
  deleteMany: [ProductVariantScalarWhereInput!]
  updateMany: [ProductVariantUpdateManyWithWhereNestedInput!]
}

input ProductVariantUpdateManyWithWhereNestedInput {
  where: ProductVariantScalarWhereInput!
  data: ProductVariantUpdateManyDataInput!
}

input ProductVariantUpdateWithoutProductDataInput {
  name: String
  information: String
  image: String
}

input ProductVariantUpdateWithWhereUniqueNestedInput {
  where: ProductVariantWhereUniqueInput!
  data: ProductVariantUpdateDataInput!
}

input ProductVariantUpdateWithWhereUniqueWithoutProductInput {
  where: ProductVariantWhereUniqueInput!
  data: ProductVariantUpdateWithoutProductDataInput!
}

input ProductVariantUpsertWithWhereUniqueNestedInput {
  where: ProductVariantWhereUniqueInput!
  update: ProductVariantUpdateDataInput!
  create: ProductVariantCreateInput!
}

input ProductVariantUpsertWithWhereUniqueWithoutProductInput {
  where: ProductVariantWhereUniqueInput!
  update: ProductVariantUpdateWithoutProductDataInput!
  create: ProductVariantCreateWithoutProductInput!
}

input ProductVariantWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  information: String
  information_not: String
  information_in: [String!]
  information_not_in: [String!]
  information_lt: String
  information_lte: String
  information_gt: String
  information_gte: String
  information_contains: String
  information_not_contains: String
  information_starts_with: String
  information_not_starts_with: String
  information_ends_with: String
  information_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  product: ProductWhereInput
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [ProductVariantWhereInput!]
  OR: [ProductVariantWhereInput!]
  NOT: [ProductVariantWhereInput!]
}

input ProductVariantWhereUniqueInput {
  id: ID
  name: String
}

input ProductWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  stockQuantity: Int
  stockQuantity_not: Int
  stockQuantity_in: [Int!]
  stockQuantity_not_in: [Int!]
  stockQuantity_lt: Int
  stockQuantity_lte: Int
  stockQuantity_gt: Int
  stockQuantity_gte: Int
  variants_every: ProductVariantWhereInput
  variants_some: ProductVariantWhereInput
  variants_none: ProductVariantWhereInput
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ProductWhereInput!]
  OR: [ProductWhereInput!]
  NOT: [ProductWhereInput!]
}

input ProductWhereUniqueInput {
  id: ID
  name: String
}

type Query {
  address(where: AddressWhereUniqueInput!): Address
  addresses(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Address]!
  addressesConnection(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AddressConnection!
  cart(where: CartWhereUniqueInput!): Cart
  carts(where: CartWhereInput, orderBy: CartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cart]!
  cartsConnection(where: CartWhereInput, orderBy: CartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CartConnection!
  cartItem(where: CartItemWhereUniqueInput!): CartItem
  cartItems(where: CartItemWhereInput, orderBy: CartItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CartItem]!
  cartItemsConnection(where: CartItemWhereInput, orderBy: CartItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CartItemConnection!
  creditCard(where: CreditCardWhereUniqueInput!): CreditCard
  creditCards(where: CreditCardWhereInput, orderBy: CreditCardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CreditCard]!
  creditCardsConnection(where: CreditCardWhereInput, orderBy: CreditCardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CreditCardConnection!
  cupom(where: CupomWhereUniqueInput!): Cupom
  cupoms(where: CupomWhereInput, orderBy: CupomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cupom]!
  cupomsConnection(where: CupomWhereInput, orderBy: CupomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CupomConnection!
  newsletterSubscription(where: NewsletterSubscriptionWhereUniqueInput!): NewsletterSubscription
  newsletterSubscriptions(where: NewsletterSubscriptionWhereInput, orderBy: NewsletterSubscriptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [NewsletterSubscription]!
  newsletterSubscriptionsConnection(where: NewsletterSubscriptionWhereInput, orderBy: NewsletterSubscriptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NewsletterSubscriptionConnection!
  order(where: OrderWhereUniqueInput!): Order
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  orderShippingAddress(where: OrderShippingAddressWhereUniqueInput!): OrderShippingAddress
  orderShippingAddresses(where: OrderShippingAddressWhereInput, orderBy: OrderShippingAddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderShippingAddress]!
  orderShippingAddressesConnection(where: OrderShippingAddressWhereInput, orderBy: OrderShippingAddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderShippingAddressConnection!
  payment(where: PaymentWhereUniqueInput!): Payment
  payments(where: PaymentWhereInput, orderBy: PaymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Payment]!
  paymentsConnection(where: PaymentWhereInput, orderBy: PaymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PaymentConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  product(where: ProductWhereUniqueInput!): Product
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  productVariant(where: ProductVariantWhereUniqueInput!): ProductVariant
  productVariants(where: ProductVariantWhereInput, orderBy: ProductVariantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductVariant]!
  productVariantsConnection(where: ProductVariantWhereInput, orderBy: ProductVariantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductVariantConnection!
  storeses(where: StoresWhereInput, orderBy: StoresOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stores]!
  storesesConnection(where: StoresWhereInput, orderBy: StoresOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StoresConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

enum Role {
  ADMIN
  EDITOR
  CUSTOMER
  DELIVERY
}

type Stores {
  latitude: Float!
  longitude: Float!
  image: String
  name: String!
  description: String
  address: String
  city: String
  zip: String
  updatedAt: DateTime!
}

type StoresConnection {
  pageInfo: PageInfo!
  edges: [StoresEdge]!
  aggregate: AggregateStores!
}

input StoresCreateInput {
  latitude: Float!
  longitude: Float!
  image: String
  name: String!
  description: String
  address: String
  city: String
  zip: String
}

type StoresEdge {
  node: Stores!
  cursor: String!
}

enum StoresOrderByInput {
  latitude_ASC
  latitude_DESC
  longitude_ASC
  longitude_DESC
  image_ASC
  image_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  address_ASC
  address_DESC
  city_ASC
  city_DESC
  zip_ASC
  zip_DESC
  updatedAt_ASC
  updatedAt_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
}

type StoresPreviousValues {
  latitude: Float!
  longitude: Float!
  image: String
  name: String!
  description: String
  address: String
  city: String
  zip: String
  updatedAt: DateTime!
}

type StoresSubscriptionPayload {
  mutation: MutationType!
  node: Stores
  updatedFields: [String!]
  previousValues: StoresPreviousValues
}

input StoresSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StoresWhereInput
  AND: [StoresSubscriptionWhereInput!]
  OR: [StoresSubscriptionWhereInput!]
  NOT: [StoresSubscriptionWhereInput!]
}

input StoresUpdateManyMutationInput {
  latitude: Float
  longitude: Float
  image: String
  name: String
  description: String
  address: String
  city: String
  zip: String
}

input StoresWhereInput {
  latitude: Float
  latitude_not: Float
  latitude_in: [Float!]
  latitude_not_in: [Float!]
  latitude_lt: Float
  latitude_lte: Float
  latitude_gt: Float
  latitude_gte: Float
  longitude: Float
  longitude_not: Float
  longitude_in: [Float!]
  longitude_not_in: [Float!]
  longitude_lt: Float
  longitude_lte: Float
  longitude_gt: Float
  longitude_gte: Float
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  zip: String
  zip_not: String
  zip_in: [String!]
  zip_not_in: [String!]
  zip_lt: String
  zip_lte: String
  zip_gt: String
  zip_gte: String
  zip_contains: String
  zip_not_contains: String
  zip_starts_with: String
  zip_not_starts_with: String
  zip_ends_with: String
  zip_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [StoresWhereInput!]
  OR: [StoresWhereInput!]
  NOT: [StoresWhereInput!]
}

type Subscription {
  address(where: AddressSubscriptionWhereInput): AddressSubscriptionPayload
  cart(where: CartSubscriptionWhereInput): CartSubscriptionPayload
  cartItem(where: CartItemSubscriptionWhereInput): CartItemSubscriptionPayload
  creditCard(where: CreditCardSubscriptionWhereInput): CreditCardSubscriptionPayload
  cupom(where: CupomSubscriptionWhereInput): CupomSubscriptionPayload
  newsletterSubscription(where: NewsletterSubscriptionSubscriptionWhereInput): NewsletterSubscriptionSubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  orderShippingAddress(where: OrderShippingAddressSubscriptionWhereInput): OrderShippingAddressSubscriptionPayload
  payment(where: PaymentSubscriptionWhereInput): PaymentSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  productVariant(where: ProductVariantSubscriptionWhereInput): ProductVariantSubscriptionPayload
  stores(where: StoresSubscriptionWhereInput): StoresSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  firstName: String
  lastName: String
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  subscribed: Boolean
  role: Role!
  addresses(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Address!]
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order!]
  cart: Cart!
  payments(where: PaymentWhereInput, orderBy: PaymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Payment!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  firstName: String
  lastName: String
  posts: PostCreateManyWithoutAuthorInput
  subscribed: Boolean
  role: Role
  addresses: AddressCreateManyWithoutCustomerInput
  orders: OrderCreateManyWithoutCustomerInput
  cart: CartCreateOneWithoutCustomerInput!
  payments: PaymentCreateManyWithoutCustomerInput
}

input UserCreateOneWithoutAddressesInput {
  create: UserCreateWithoutAddressesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutCartInput {
  create: UserCreateWithoutCartInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOrdersInput {
  create: UserCreateWithoutOrdersInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPaymentsInput {
  create: UserCreateWithoutPaymentsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutAddressesInput {
  email: String!
  password: String!
  firstName: String
  lastName: String
  posts: PostCreateManyWithoutAuthorInput
  subscribed: Boolean
  role: Role
  orders: OrderCreateManyWithoutCustomerInput
  cart: CartCreateOneWithoutCustomerInput!
  payments: PaymentCreateManyWithoutCustomerInput
}

input UserCreateWithoutCartInput {
  email: String!
  password: String!
  firstName: String
  lastName: String
  posts: PostCreateManyWithoutAuthorInput
  subscribed: Boolean
  role: Role
  addresses: AddressCreateManyWithoutCustomerInput
  orders: OrderCreateManyWithoutCustomerInput
  payments: PaymentCreateManyWithoutCustomerInput
}

input UserCreateWithoutOrdersInput {
  email: String!
  password: String!
  firstName: String
  lastName: String
  posts: PostCreateManyWithoutAuthorInput
  subscribed: Boolean
  role: Role
  addresses: AddressCreateManyWithoutCustomerInput
  cart: CartCreateOneWithoutCustomerInput!
  payments: PaymentCreateManyWithoutCustomerInput
}

input UserCreateWithoutPaymentsInput {
  email: String!
  password: String!
  firstName: String
  lastName: String
  posts: PostCreateManyWithoutAuthorInput
  subscribed: Boolean
  role: Role
  addresses: AddressCreateManyWithoutCustomerInput
  orders: OrderCreateManyWithoutCustomerInput
  cart: CartCreateOneWithoutCustomerInput!
}

input UserCreateWithoutPostsInput {
  email: String!
  password: String!
  firstName: String
  lastName: String
  subscribed: Boolean
  role: Role
  addresses: AddressCreateManyWithoutCustomerInput
  orders: OrderCreateManyWithoutCustomerInput
  cart: CartCreateOneWithoutCustomerInput!
  payments: PaymentCreateManyWithoutCustomerInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  subscribed_ASC
  subscribed_DESC
  role_ASC
  role_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  firstName: String
  lastName: String
  subscribed: Boolean
  role: Role!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
  firstName: String
  lastName: String
  posts: PostUpdateManyWithoutAuthorInput
  subscribed: Boolean
  role: Role
  addresses: AddressUpdateManyWithoutCustomerInput
  orders: OrderUpdateManyWithoutCustomerInput
  cart: CartUpdateOneRequiredWithoutCustomerInput
  payments: PaymentUpdateManyWithoutCustomerInput
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  firstName: String
  lastName: String
  subscribed: Boolean
  role: Role
}

input UserUpdateOneRequiredWithoutAddressesInput {
  create: UserCreateWithoutAddressesInput
  update: UserUpdateWithoutAddressesDataInput
  upsert: UserUpsertWithoutAddressesInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutCartInput {
  create: UserCreateWithoutCartInput
  update: UserUpdateWithoutCartDataInput
  upsert: UserUpsertWithoutCartInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutOrdersInput {
  create: UserCreateWithoutOrdersInput
  update: UserUpdateWithoutOrdersDataInput
  upsert: UserUpsertWithoutOrdersInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutPaymentsInput {
  create: UserCreateWithoutPaymentsInput
  update: UserUpdateWithoutPaymentsDataInput
  upsert: UserUpsertWithoutPaymentsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutAddressesDataInput {
  email: String
  password: String
  firstName: String
  lastName: String
  posts: PostUpdateManyWithoutAuthorInput
  subscribed: Boolean
  role: Role
  orders: OrderUpdateManyWithoutCustomerInput
  cart: CartUpdateOneRequiredWithoutCustomerInput
  payments: PaymentUpdateManyWithoutCustomerInput
}

input UserUpdateWithoutCartDataInput {
  email: String
  password: String
  firstName: String
  lastName: String
  posts: PostUpdateManyWithoutAuthorInput
  subscribed: Boolean
  role: Role
  addresses: AddressUpdateManyWithoutCustomerInput
  orders: OrderUpdateManyWithoutCustomerInput
  payments: PaymentUpdateManyWithoutCustomerInput
}

input UserUpdateWithoutOrdersDataInput {
  email: String
  password: String
  firstName: String
  lastName: String
  posts: PostUpdateManyWithoutAuthorInput
  subscribed: Boolean
  role: Role
  addresses: AddressUpdateManyWithoutCustomerInput
  cart: CartUpdateOneRequiredWithoutCustomerInput
  payments: PaymentUpdateManyWithoutCustomerInput
}

input UserUpdateWithoutPaymentsDataInput {
  email: String
  password: String
  firstName: String
  lastName: String
  posts: PostUpdateManyWithoutAuthorInput
  subscribed: Boolean
  role: Role
  addresses: AddressUpdateManyWithoutCustomerInput
  orders: OrderUpdateManyWithoutCustomerInput
  cart: CartUpdateOneRequiredWithoutCustomerInput
}

input UserUpdateWithoutPostsDataInput {
  email: String
  password: String
  firstName: String
  lastName: String
  subscribed: Boolean
  role: Role
  addresses: AddressUpdateManyWithoutCustomerInput
  orders: OrderUpdateManyWithoutCustomerInput
  cart: CartUpdateOneRequiredWithoutCustomerInput
  payments: PaymentUpdateManyWithoutCustomerInput
}

input UserUpsertWithoutAddressesInput {
  update: UserUpdateWithoutAddressesDataInput!
  create: UserCreateWithoutAddressesInput!
}

input UserUpsertWithoutCartInput {
  update: UserUpdateWithoutCartDataInput!
  create: UserCreateWithoutCartInput!
}

input UserUpsertWithoutOrdersInput {
  update: UserUpdateWithoutOrdersDataInput!
  create: UserCreateWithoutOrdersInput!
}

input UserUpsertWithoutPaymentsInput {
  update: UserUpdateWithoutPaymentsDataInput!
  create: UserCreateWithoutPaymentsInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  subscribed: Boolean
  subscribed_not: Boolean
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  addresses_every: AddressWhereInput
  addresses_some: AddressWhereInput
  addresses_none: AddressWhereInput
  orders_every: OrderWhereInput
  orders_some: OrderWhereInput
  orders_none: OrderWhereInput
  cart: CartWhereInput
  payments_every: PaymentWhereInput
  payments_some: PaymentWhereInput
  payments_none: PaymentWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    