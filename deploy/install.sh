#!/bin/sh
echo "Cloning ADMIN"
git clone https://github.com/luandro-com/floresta-admin.git admin
echo "Cloning API"
git clone https://github.com/luandro-com/floresta-server.git api
# echo "Cloning APP"
# git clone https://github.com/luandro-com/floresta-app.git app
echo "Creating INTERNAL network"
docker network create internal
