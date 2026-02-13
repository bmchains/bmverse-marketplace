#!/usr/bin/env bash
set -euo pipefail

DOMAIN="bmverse.us" 
EMAIL="sam@bmverse.us" 

echo "==> Installing certbot..."
apt-get update -y
apt-get install -y certbot python3-certbot-nginx

echo "==> Requesting SSL for $DOMAIN ..."
certbot --nginx -d "$DOMAIN" --non-interactive --agree-tos -m "$EMAIL" --redirect

echo "==> Testing renewal..."
certbot renew --dry-run

echo "==> SSL configured."
