#!/bin/sh
echo "Updating ADMIN"
cd admin
git pull origin master
cd ..
echo "Updating API"
cd api
git pull origin master
cd ..
# echo "Updating APP"
# cd app
# git pull origin master
# cd ..