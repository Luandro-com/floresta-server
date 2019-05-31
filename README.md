<h1 align="center"><strong>Floresta Protegida GraphQL Server</strong></h1>

<br />

![](https://imgur.com/lIi4YrZ.png)



## Requirements

Make sure you have [Docker](https://docs.docker.com/install/), [docker-compose](https://docs.docker.com/compose/install/), and [prisma](https://www.prisma.io/docs/prisma-cli-and-configuration/using-the-prisma-cli-alx4/) installed.

Simply run `npm i` and `docker-compose up -d` to start the Prisma and GraphQL Yoga servers, and the Postgres database. Change `example.env` to `.env` and add your own variables.

To generate the Prisma databse run `prisma deploy`. You can also use `prisma seed` to seed it.

Run `npm start` to start the server.

The main point-of-entry is the Yoga GraphQL server which will be running on `http://localhost:4000`.

The Prisma server is also exposed on `http://localhost:4466`