ls /etc/nginx/sites-available/ > /tmp/out.txt; grep -rh "root " /etc/nginx/sites-available/ >> /tmp/out.txt 2>/dev/null; ls /var/www/ >> /tmp/out.txt
