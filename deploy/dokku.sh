#!/bin/sh
echo "What is the hostname?\n"
read HOSTDOMAIN
# echo "\n What is the prisma end-point?\n"
# read PRISMA_ENDPOINT
# echo "\n What is the prisma secret?\n"
# read PRISMA_SECRET
PASSWORD=$(date +%s|sha256sum|base64|head -c 32)
PRISMA_SECRET=$(date +%s|sha256sum|base64|head -c 32)
PRISMA_MANAGEMENT_API_SECRET=$(date +%s|sha256sum|base64|head -c 32)
APP_SECRET=$(date +%s|sha256sum|base64|head -c 32)
dokku apps:create floresta-prisma-server
dokku apps:create floresta-server
dokku apps:create floresta-admin
dokku apps:create floresta-web
sudo dokku plugin:install https://github.com/dokku/dokku-mysql.git
dokku mysql:create florestaprotegida
dokku mysql:link florestaprotegida floresta-prisma-server
dokku config:set floresta-prisma-server \
DATABASE_URL=mysql.$HOSTDOMAIN
DATABASE_PASSWORD=$PASSWORD \
NODE_ENV="production" \
PRODUCTION="true" \
PRISMA_STAGE="production" \
PRISMA_ENDPOINT="https://us1.prisma.sh/luandro-93a3b2/florestaprotegida/dev" \
PRISMA_SECRET=$PRISMA_SECRET \
PRISMA_MANAGEMENT_API_SECRET=$PRISMA_MANAGEMENT_API_SECRET \
APP_SECRET=$APP_SECRET \
S3_BUCKET_NAME="florestaprotegida" \
# S3_AWS_SECRET_ACCESS_KEY="wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY" \
# S3_AWS_ACCESS_KEY_ID="AKIAIOSFODNN7EXAMPLE" \
S3_ENDPOINT="https://terrakryadev.nyc3.digitaloceanspaces.com"
dokku docker-options:add floresta-prisma-server build '--file prisma.dockerfile'

echo "\n\nMysql password: ${PASSWORD}"
echo "\n\n\Prisma secret: ${PRISMA_SECRET}"
echo "\n\n\Prisma managment api secret: ${PRISMA_MANAGEMENT_API_SECRET}"
echo "\n\n\App secret: ${APP_SECRET}"

echo "\n\n\n\n Now add dokku as remote on your development machine:"
echo "\ngit remote add dokku dokku@$HOSTDOMAIN:service\n\n\n\n\n\n\n\n\n"
echo "Done!"
# git remote add dokku dokku@encenar.tk:floresta-server
# git remote add dokku dokku@encenar.tk:floresta-prisma-server