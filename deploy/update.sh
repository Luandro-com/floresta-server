#!/bin/sh
echo "Updating ADMIN"
cd admin
git pull origin master
# docker build --no-cache -t floresta-admin . 
cd ..
echo "Updating API"
cd api
git pull origin master
# docker build --no-cache -t floresta-server . 
cd ..
# echo "Updating APP"
# cd app
# git pull origin master
# cd ..