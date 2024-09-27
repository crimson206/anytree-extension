#!/bin/bash

yarn ts-node scripts/copyExtra.ts
cd dist
yarn publish
cd ..