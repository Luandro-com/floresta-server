#!/bin/sh

# Hostname
read -p "What is the project's hostname? default encenar.tk\n " HOSTDOMAIN
HOSTDOMAIN=${HOSTDOMAIN:-encenar.tk}
echo "$HOSTDOMAIN\n"

echo "\nWhat is the file spaces id?\n"
read S3_AWS_ACCESS_KEY_ID

echo "\nWhat is the file spaces secret?\n"
read S3_AWS_SECRET_ACCESS_KEY

# echo "\n What is the prisma end-point?\n"
# read PRISMA_ENDPOINT
# echo "\n What is the prisma secret?\n"
# read PRISMA_SECRET
PASSWORD=$(date +%s|sha256sum|base64|head -c 32)
PRISMA_SECRET=$(date +%s|sha256sum|base64|head -c 32)
PRISMA_MANAGEMENT_API_SECRET=$(date +%s|sha256sum|base64|head -c 32)
APP_SECRET=$(date +%s|sha256sum|base64|head -c 32)

sudo dokku plugin:install https://github.com/dokku/dokku-mysql.git
sudo dokku plugin:install https://github.com/dokku/dokku-letsencrypt.git

dokku apps:create floresta-prisma-server
dokku apps:create floresta-server
dokku apps:create floresta-admin
dokku apps:create floresta-web
dokku buildpacks:add floresta-server https://github.com/heroku/heroku-buildpack-nodejs.git
dokku buildpacks:add floresta-admin https://github.com/heroku/heroku-buildpack-nodejs.git
dokku buildpacks:add floresta-web https://github.com/heroku/heroku-buildpack-nodejs.git

dokku letsencrypt:cron-job --add
dokku config:set --global DOKKU_LETSENCRYPT_EMAIL=terrakrya@protonmail.com
# dokku config:set --no-restart floresta-prisma-server DOKKU_LETSENCRYPT_EMAIL=terrakrya@protonmail.com
# dokku config:set --no-restart floresta-server DOKKU_LETSENCRYPT_EMAIL=terrakrya@protonmail.com
# dokku config:set --no-restart floresta-admin DOKKU_LETSENCRYPT_EMAIL=terrakrya@protonmail.com
# dokku config:set --no-restart floresta-web DOKKU_LETSENCRYPT_EMAIL=terrakrya@protonmail.com

dokku mysql:create florestaprotegida
dokku mysql:link florestaprotegida floresta-prisma-server
dokku docker-options:add floresta-prisma-server build '--file prisma.dockerfile'

DATABASE_URL=mysql.$HOSTDOMAIN \
DATABASE_PASSWORD=$PASSWORD \

dokku config:set floresta-prisma-server \
NODE_ENV="production" \
PRODUCTION="true" \
DATABASE_URL=$DATABASE_URL \
DATABASE_PASSWORD=$DATABASE_PASSWORD \
PRISMA_MANAGEMENT_API_SECRET=$PRISMA_MANAGEMENT_API_SECRET \
APP_SECRET=$APP_SECRET

dokku config:set floresta-server \
NODE_ENV="production" \
PRODUCTION="true" \
PRISMA_STAGE="production" \
PRISMA_ENDPOINT="https://us1.prisma.sh/luandro-93a3b2/florestaprotegida/dev" \
PRISMA_SECRET="mysecret123" \
PRISMA_MANAGEMENT_API_SECRET='mysupersecret123' \
APP_SECRET=$APP_SECRET \
S3_BUCKET_NAME="terrakryadev" \
S3_ENDPOINT="https://nyc3.digitaloceanspaces.com" \
S3_AWS_SECRET_ACCESS_KEY="xWPVlapFHNRSNanAMYK11uNM7XrIfDH8FxafHP9YeW4" \
S3_AWS_ACCESS_KEY_ID="BAIBUMIBET5EYUTJ4JKH"

# PRISMA_ENDPOINT="https://floresta-prisma-server.${HOSTDOMAIN}" \


dokku config:set floresta-web \
NODE_ENV="production" \
PRODUCTION="true" \
API_HOST="https://floresta-server.${HOSTDOMAIN}"


echo "\n\nMysql password: ${PASSWORD}"
echo "\n\nPrisma secret: ${PRISMA_SECRET}"
echo "\n\nPrisma managment api secret: ${PRISMA_MANAGEMENT_API_SECRET}"
echo "\n\nApp secret: ${APP_SECRET}"

echo "\n\n\n\n Now add dokku as remote on your development machine:"
echo "\ngit remote add dokku dokku@${HOSTDOMAIN}:service\n\n\n"
echo "Done!"

# Add remotes to each projecet
# git remote add prisma dokku@encenar.tk:floresta-prisma-server
# git remote add dokku dokku@encenar.tk:floresta-server
# git remote add dokku dokku@encenar.tk:floresta-admin
# git remote add dokku dokku@encenar.tk:floresta-web

# Run for eaech app after they have been deployed.
# https://github.com/dokku/dokku-letsencrypt#dockerfile-deploys
# dokku proxy:ports-add floresta-prisma-server http:80:4000
# dokku letsencrypt floresta-prisma-server
# dokku proxy:ports-add floresta-prisma-server https:443:4000
# dokku letsencrypt floresta-server
# dokku letsencrypt floresta-admin
# dokku letsencrypt floresta-web
