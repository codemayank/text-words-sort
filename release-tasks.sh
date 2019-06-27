#!/bin/sh

cd client && yarn install && yarn build &&
cd ../server && yarn install
