#!/bin/bash
echo "=== NGINX SITES-AVAILABLE ==="
ls /etc/nginx/sites-available/
echo ""
echo "=== GREP FOR OXANA ==="
grep -r "oxana" /etc/nginx/sites-available/ -l 2>/dev/null
grep -r "oxana" /etc/nginx/conf.d/ -l 2>/dev/null
echo ""
echo "=== ROOT DIR IN OXANA CONFIGS ==="
grep -r "root " /etc/nginx/sites-available/ 2>/dev/null | grep -i oxana
echo ""
echo "=== /var/www/ ==="
ls /var/www/
