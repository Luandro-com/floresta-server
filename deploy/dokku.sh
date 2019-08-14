dokku apps:create floresta-prisma-server
dokku apps:create floresta-server
dokku apps:create floresta-admin
dokku apps:create floresta-web
sudo dokku plugin:install https://github.com/dokku/dokku-mysql.git
dokku mysql:create florestaprotegida
dokku mysql:link florestaprotegida floresta-prisma-server
dokku docker-options:add floresta-prisma-server build '--file prisma.dockerfile'
# git remote add dokku dokku@ensenar.tk:floresta-server
# git remote add dokku dokku@ensenar.tk:floresta-prisma-server