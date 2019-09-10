#!/bin/sh

# Hostname
read -p "What is the project's hostname [encenar.tk]? " HOSTDOMAIN
HOSTDOMAIN=${HOSTDOMAIN:-encenar.tk}
echo "$HOSTDOMAIN"

read -p "What is the prisma end-point [https://floresta-prisma.${HOSTDOMAIN}]? " PRISMA_ENDPOINT
PRISMA_ENDPOINT=${PRISMA_ENDPOINT:-https://floresta-prisma.${HOSTDOMAIN}}
echo "$PRISMA_ENDPOINT"

read -p "What is the prisma secret [generate random]? " PRISMA_SECRET
PRISMA_SECRET=${PRISMA_SECRET:-$(date +%s|sha256sum|base64|head -c 32)}
echo "$PRISMA_SECRET"

read -p "What is the prisma management api secret [generate random]? " PRISMA_MANAGEMENT_API_SECRET
PRISMA_MANAGEMENT_API_SECRET=${PRISMA_MANAGEMENT_API_SECRET:-$(date +%s|sha256sum|base64|head -c 32)}
echo "$PRISMA_MANAGEMENT_API_SECRET"

read -p "What is the file space's enpoint [https://nyc3.digitaloceanspaces.com]? " S3_ENDPOINT
S3_ENDPOINT=${S3_ENDPOINT:-https://nyc3.digitaloceanspaces.com}
echo "$S3_ENDPOINT"

echo "\nWhat is the file spaces bucket name [florestaprotegida]?"
S3_BUCKET_NAME=${S3_BUCKET_NAME:-florestaprotegida}
echo "$S3_BUCKET_NAME"

echo "\nWhat is the file spaces bucket name for database backup [florestaprotegida-backup]?"
BACKUP_BUCKET_NAME=${BACKUP_BUCKET_NAME:-florestaprotegida-backup}
echo "$BACKUP_BUCKET_NAME"

echo "\nWhat is the file spaces id?"
read S3_AWS_ACCESS_KEY_ID
echo "$S3_AWS_ACCESS_KEY_ID"

echo "\nWhat is the file spaces secret?"
read S3_AWS_SECRET_ACCESS_KEY
echo "$S3_AWS_SECRET_ACCESS_KEY"


DATABASE_PASSWORD=$(date +%s|sha256sum|base64|head -c 32)
APP_SECRET=$(date +%s|sha256sum|base64|head -c 32)

sudo dokku plugin:install https://github.com/dokku/dokku-mysql.git
sudo dokku plugin:install https://github.com/dokku/dokku-letsencrypt.git

dokku apps:create floresta-prisma
dokku apps:create floresta-server
dokku apps:create floresta-admin
dokku apps:create florestaprotegida
dokku buildpacks:add floresta-server https://github.com/heroku/heroku-buildpack-nodejs.git
dokku buildpacks:add floresta-admin https://github.com/heroku/heroku-buildpack-nodejs.git
dokku buildpacks:add florestaprotegida https://github.com/heroku/heroku-buildpack-nodejs.git

dokku letsencrypt:cron-job --add
dokku config:set --no-restart --global DOKKU_LETSENCRYPT_EMAIL=terrakrya@protonmail.com

dokku mysql:create florestaprotegida-db -p $DATABASE_PASSWORD
dokku mysql:backup-auth florestaprotegida-db $S3_AWS_ACCESS_KEY_ID $S3_AWS_SECRET_ACCESS_KEY
dokku mysql:backup florestaprotegida-db $BACKUP_BUCKET_NAME [-u|--use-iam-optional]
dokku mysql:backup-schedule florestaprotegida-db "0 3 * * *" $BACKUP_BUCKET_NAME --use-iam

dokku mysql:link florestaprotegida-db floresta-prisma

dokku docker-options:add floresta-prisma build '--file prisma.dockerfile'
dokku docker-options:add floresta-prisma build '--file prisma.dockerfile --build-arg NODE_ENV=production PRODUCTION=true DB_HOST=dokku-mysql-florestaprotegida-db' \
  DATABASE_PASSWORD=${DATABASE_PASSWORD} \
  PRISMA_MANAGEMENT_API_SECRET=$PRISMA_MANAGEMENT_API_SECRET

dokku config:set floresta-prisma \
DOKKU_PROXY_PORT_MAP="http:80:4466 https:443:4466" \
NODE_ENV="production" \
PRODUCTION="true"

dokku config:set floresta-server \
DOKKU_PROXY_PORT_MAP="http:80:4000 https:443:4000" \
NODE_ENV="production" \
PRODUCTION="true" \
PRISMA_STAGE="production" \
PRISMA_ENDPOINT=$PRISMA_ENDPOINT \
PRISMA_SECRET=$PRISMA_SECRET \
APP_SECRET=$APP_SECRET \
S3_BUCKET_NAME=$S3_BUCKET_NAME \
S3_ENDPOINT="https://nyc3.digitaloceanspaces.com" \
S3_AWS_SECRET_ACCESS_KEY=$S3_AWS_SECRET_ACCESS_KEY \
S3_AWS_ACCESS_KEY_ID=$S3_AWS_ACCESS_KEY_ID


dokku config:set floresta-admin \
DOKKU_PROXY_PORT_MAP="http:80:3005 https:443:3005" \
NODE_ENV="production" \
PRODUCTION="true" \
API_HOST="https://floresta-server.${HOSTDOMAIN}"

dokku config:set florestaprotegida \
DOKKU_PROXY_PORT_MAP="http:80:3000 https:443:3000" \
NODE_ENV="production" \
PRODUCTION="true" \
API_HOST="https://floresta-server.${HOSTDOMAIN}"


echo "\n\nMysql password: ${DATABASE_PASSWORD}"
echo "\n\nPrisma secret: ${PRISMA_SECRET}"
echo "\n\nPrisma managment api secret: ${PRISMA_MANAGEMENT_API_SECRET}"
echo "\n\nApp secret: ${APP_SECRET}"
echo "\n\n\n\n Now add dokku as remote on your development machine:"
echo "\ngit remote add dokku dokku@${HOSTDOMAIN}:service\n\n\n"
echo "\nAnd run dokku letsencrypt for each service once deployed\n\n\n"
echo "Done!"
