#!/bin/bash

# Deploy to s3 bucket
aws configure set preview.cloudfront true
aws s3 sync build/ s3://$AWS_BUCKET --delete
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_ID --paths '/*'

# Send notification to discord
curl -X POST --data '{ "embeds": [{"title": "www.subframe.se", "url": "https://www.subframe.se", "description": "Deployed new version from master"}] }' -H "Content-Type: application/json"  https://discordapp.com/api/webhooks/269423502384300032/_wL-oyo13tArlvksuh3DTom02AQdJX8soFaHUqcATg0VoYA86twiXom-tKuLZ91HnKNH
