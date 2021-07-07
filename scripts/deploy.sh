#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# add CNAME file with custom domain name
echo 'www.oliverjosephhairdressing.co.uk' > CNAME

# copy index.html to catch 404s
cp index.html 404.html

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/ollyrowe/oliver-joseph.git master:gh-pages

cd -