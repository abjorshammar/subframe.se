#!/bin/bash

# Deploy to s3 bucket
aws configure set preview.cloudfront true
aws s3 sync build/ s3://$AWS_BUCKET --delete
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_ID --paths '/*'
