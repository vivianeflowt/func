#!/bin/bash

clear


npm remove -g --force pixy
npm list -g --depth 0 | grep 'pixy' 
sleep 2

npm link

npm install -g . --force
npm list -g --depth 0 | grep 'pixy' 
sleep 2


