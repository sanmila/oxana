#!/bin/bash
cp /tmp/preview-oxana.sanjay.ru /etc/nginx/sites-available/preview-oxana.sanjay.ru
ln -sf /etc/nginx/sites-available/preview-oxana.sanjay.ru /etc/nginx/sites-enabled/preview-oxana.sanjay.ru
nginx -t && systemctl reload nginx
echo "DONE" > /tmp/nginx-setup-result.txt
