#!/bin/bash
gatsby clean
rm -rf /public
yarn build

aws s3 sync ./public s3://www.tedsczelecki.com/ \
  --delete \
  --metadata-directive REPLACE \
  --cache-control max-age=604800,public \
  --acl public-read

aws cloudfront create-invalidation --distribution-id=E3STOEHQLAOTZ0 --paths /

# Set metadata on the files in the bucket
#aws s3 cp s3://dev.gridgang.io/ \
#  s3://$bucket/ \
#  --metadata-directive REPLACE \
#  --recursive \
#  --cache-control max-age=31536000,public \
#  --acl public-read
