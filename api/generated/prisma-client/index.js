"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Address",
    embedded: false
  },
  {
    name: "AddressType",
    embedded: false
  },
  {
    name: "Cart",
    embedded: false
  },
  {
    name: "CartItem",
    embedded: false
  },
  {
    name: "CreditCard",
    embedded: false
  },
  {
    name: "Cupom",
    embedded: false
  },
  {
    name: "NewsletterSubscription",
    embedded: false
  },
  {
    name: "Order",
    embedded: false
  },
  {
    name: "OrderShippingAddress",
    embedded: false
  },
  {
    name: "OrderStatus",
    embedded: false
  },
  {
    name: "Payment",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "Product",
    embedded: false
  },
  {
    name: "ProductVariant",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  },
  {
    name: "Stores",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `${process.env["PRISMA_ENDPOINT"]}`,
  secret: `${process.env["PRISMA_SECRET"]}`
});
exports.prisma = new exports.Prisma();
