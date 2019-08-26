<h1 align="center"><strong>Floresta Protegida GraphQL Server</strong></h1>

<br />

![](https://imgur.com/lIi4YrZ.png)



## Requirements

Make sure you have [Docker](https://docs.docker.com/install/), [docker-compose](https://docs.docker.com/compose/install/), and [prisma](https://www.prisma.io/docs/prisma-cli-and-configuration/using-the-prisma-cli-alx4/) installed.

## Developing

Simply run `npm i` and `docker-compose up -d` to start the Prisma and GraphQL Yoga servers, and the Postgres database. Change `example.env` to `.env` and add your own variables.

To generate the Prisma databse run `prisma deploy`. You can also use `prisma seed` to seed it.

Run `npm start` to start the server.

The main point-of-entry is the Yoga GraphQL server which will be running on `http://localhost:4000`.

The Prisma server is also exposed on `http://localhost:4466`

## Deploy

### Dokku

Easiest way to deploy is using [Dokku](https://github.com/dokku/dokku). Run `deploy/dokku.sh` on the server or simply `curl -o- -L https://tinyurl.com/y5pyuy43 | sh`

### Docker

To install create a folder for the project on your server and run `curl -o- -L http://tiny.cc/6r837y | bash` inside it. Edit `mv .env.example .env` with your variables.

If you don't have [spaces](https://www.digitalocean.com/docs/spaces/) or [s3](https://aws.amazon.com/s3/) you can run a self hosted [minio](https://min.io/) server like this:
```
docker run -d --restart unless-stopped --name minio \
  -e VIRTUAL_HOST=s3.luandro.com \
  -e VIRTUAL_PORT=9000 \
  -e LETSENCRYPT_HOST=s3.luandro.com \
  -e LETSENCRYPT_EMAIL=luandro@gmail.com \
  -e "MINIO_ACCESS_KEY=AKIAIOSFODNN7EXAMPLE" \
  -e "MINIO_SECRET_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY" \
  -v /mnt/data:/mnt/volume_nyc3_01/docker_volumes/minio-data \
  -v /mnt/config:/root/.minio \
  minio/minio server /mnt/volume_nyc3_01/docker_volumes/minio-data
```

Use those credentials for the `S3_AWS` variables.

To run this API and the admin run the `docker-compose` file inside the `deploy` folder. To run the server only, first build it with `docker build -t floresta-server .` then run it:
```
docker run -d \
  --network=nginx-proxy \
  -e VIRTUAL_HOST=florestaprotegida-api.luandro.com \
  -e VIRTUAL_PORT=4000 \
  -e LETSENCRYPT_HOST=florestaprotegida-api.luandro.com \
  -e LETSENCRYPT_EMAIL=luandro@gmail.com \
  floresta-server
```