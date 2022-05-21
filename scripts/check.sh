#!/bin/bash

clear

NAME='func'

node ./scripts/clean.js

npx npe repository "https://github.com/vivianeflowt/$NAME"
npx npe homepage "https://github.com/vivianeflowt/$NAME"
npx npe bugs "https://github.com/vivianeflowt/$NAME/issues"

pnpm run typesync

pnpm run fix

pnpm run depcheck

pnpm run validate