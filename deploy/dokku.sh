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
dokku config:set floresta-prisma-server DATABASE_URL=mysql.$HOSTDOMAIN DATABASE_PASSWORD=$PASSWORD
dokku docker-options:add floresta-prisma-server build '--file prisma.dockerfile'

echo "\n\n\n\nMysql password: ${PASSWORD}"
echo "\n\n\n\n Now add dokku as remote on your development machine:"
echo "\ngit remote add dokku dokku@$HOSTDOMAIN:service\n\n\n\n\n\n\n\n\n"
echo "Done!"
# git remote add dokku dokku@encenar.tk:floresta-server
# git remote add dokku dokku@encenar.tk:floresta-prisma-server