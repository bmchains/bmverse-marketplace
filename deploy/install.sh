#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/opt/apps/bmverse-marketplace"

echo "==> Updating packages..."
apt-get update -y

echo "==> Installing base deps..."
apt-get install -y curl ca-certificates gnupg nginx ufw

echo "==> Installing Node.js 20 LTS..."
if ! command -v node >/dev/null 2>&1 || ! node -v | grep -qE '^v20\.'; then
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y nodejs
fi

echo "==> Installing PM2..."
npm install -g pm2

echo "==> Verifying app directory..."
if [ ! -d "$APP_DIR" ]; then
  echo "ERROR: App directory not found: $APP_DIR"
  exit 1
fi

cd "$APP_DIR"

echo "==> Installing app dependencies..."
npm install

echo "==> Building Next.js app..."
npm run build

echo "==> Starting app with PM2..."
pm2 start deploy/ecosystem.config.cjs
pm2 save

echo "==> Enabling PM2 on boot..."
pm2 startup systemd -u root --hp /root || true

echo "==> Enabling Nginx..."
systemctl enable nginx
systemctl restart nginx

echo "==> Firewall (UFW) baseline..."
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable

echo "==> Done. Next: configure domain + SSL with deploy/ssl.sh"
