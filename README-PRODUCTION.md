# BMverse Marketplace — Production Deploy

## Prereqs
- DNS A record: YOUR_DOMAIN.com -> your server IP
- Project located at: /opt/apps/bmverse-marketplace

## 1) Configure Nginx domain
Edit:
deploy/nginx.conf

Replace:
- YOUR_DOMAIN.com

Install config:
sudo cp deploy/nginx.conf /etc/nginx/sites-available/bmverse-marketplace
sudo ln -sf /etc/nginx/sites-available/bmverse-marketplace /etc/nginx/sites-enabled/bmverse-marketplace

Disable default site (recommended):
sudo rm -f /etc/nginx/sites-enabled/default

Test + reload:
sudo nginx -t
sudo systemctl reload nginx

## 2) Install & build & start (PM2)
sudo bash deploy/install.sh

## 3) SSL
Edit:
deploy/ssl.sh

Replace:
- DOMAIN
- EMAIL

Run:
sudo bash deploy/ssl.sh

## Useful commands
PM2:
pm2 status
pm2 logs bmverse-marketplace --lines 200
pm2 restart bmverse-marketplace
pm2 stop bmverse-marketplace

Nginx:
sudo nginx -t
sudo systemctl reload nginx
sudo tail -n 200 /var/log/nginx/error.log

App health:
curl -I http://127.0.0.1:3000
