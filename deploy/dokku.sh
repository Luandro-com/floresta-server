#!/bin/sh
echo "What is the hostname?\n"
read HOSTDOMAIN
PASSWORD=$(date +%s|sha256sum|base64|head -c 32)
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
PRISMA_SECRET="mysecret123" \
PRISMA_MANAGEMENT_API_SECRET='mysupersecret123' \
APP_SECRET="jwtsecret123" \
S3_BUCKET_NAME="florestaprotegida" \
S3_AWS_SECRET_ACCESS_KEY="wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY" \
S3_AWS_ACCESS_KEY_ID="AKIAIOSFODNN7EXAMPLE" \
S3_ENDPOINT="http://165.227.110.74:9000/"
dokku docker-options:add floresta-prisma-server build '--file prisma.dockerfile'

echo "\n\n\n\nMysql password: ${PASSWORD}"
echo "\n\n\n\n Now add dokku as remote on your development machine:"
echo "\ngit remote add dokku dokku@$HOSTDOMAIN:service\n\n\n\n\n\n\n\n\n"
echo "Done!"
# git remote add dokku dokku@encenar.tk:floresta-server
# git remote add dokku dokku@encenar.tk:floresta-prisma-server