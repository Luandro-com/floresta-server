<h1 align="center"><strong>Floresta Protegida GraphQL Server</strong></h1>

<br />

![](https://imgur.com/lIi4YrZ.png)

## Requirements

Make sure you have [Docker](https://docs.docker.com/install/), [docker-compose](https://docs.docker.com/compose/install/), and [prisma](https://www.prisma.io/docs/prisma-cli-and-configuration/using-the-prisma-cli-alx4/) installed.

## Developing

Simply run `npm i` and `docker-compose up -d` to start the Prisma and GraphQL Yoga servers, and the Postgres database. Change `example.env` to `.env` and add your own variables.

To generate the Prisma databse run `prisma deploy`. You can also use `prisma seed` to seed it.

Run `npm dev` to start the server with live-reloading and development environments.

The main point-of-entry is the Yoga GraphQL server which will be running on `http://localhost:4000`.

The Prisma server is also exposed on `http://localhost:4466`

## Seeding

```
npm i -g prisma
```

The seed script is broken. In order to seed it from the production server you need the production keys on a file `.env.production` for example. Then using the prisma tool run:

`prisma export -e .env.production`

A file named somthing like `export-2020-02-17T17:59:53.436Z.zip` will be created, it contains all the remote data from the production server.

Now the `import` command to import the database to your development prisma server:
```
prisma import -d export-2020-02-17T17:59:53.436Z.zip
```

## Deploy

### Dokku

Easiest way to deploy is using [Dokku](https://github.com/dokku/dokku). In a machine with Dokku installed execute the `deploy/dokku.sh` script or simply:
```
bash <(curl -s https://raw.githubusercontent.com/Luandro-com/floresta-server/master/deploy/dokku.sh)
```

Add the remotes to each repo:

```
git remote add prisma dokku@encenar.tk:floresta-prisma
git remote add dokku dokku@encenar.tk:floresta-server
git remote add dokku dokku@encenar.tk:florestaprotegida
git remote add dokku dokku@encenar.tk:floresta-admin
```

Run `git push prisma master` to deploy the Prisma server. Once deployed `ssh` into the server and run the bellow commands to fix https:

```
dokku proxy:ports-add floresta-prisma http:80:4466
dokku letsencrypt floresta-prisma
dokku proxy:ports-add floresta-prisma https:443:4466
dokku proxy:ports-remove floresta-prisma http:4000:4000
```

After deploying each of the other services `ssh` into the server and add https through Lets Encrypt:
```
dokku letsencrypt floresta-server
dokku letsencrypt floresta-admin
dokku letsencrypt florestaprotegida
```

### Docker

To install create a folder for the project on your server and run `curl -o- -L http://tiny.cc/6r837y | bash` inside it. Edit `mv example.env .env` with your variables.

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
