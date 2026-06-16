#!/usr/bin/env bash
#
# One-command deploy for prasaai.co.za
# -----------------------------------------------------------------------------
# Builds the Astro site locally and uploads dist/ to the Nginx web root on the
# DigitalOcean droplet over SSH (using the key already on your machine).
#
# Usage:
#   npm run deploy
#
# Override the target without editing this file:
#   DEPLOY_HOST=user@1.2.3.4 DEPLOY_PATH=/var/www/prasaai npm run deploy
#
# Requirements: bash, ssh, tar, curl (all come with Git for Windows / macOS / Linux),
# and an SSH key that is authorised on the droplet.
# -----------------------------------------------------------------------------
set -euo pipefail

# 159.223.229.37 is the prasaai.co.za A-record. Change "root" if your droplet
# uses a different SSH user.
DEPLOY_HOST="${DEPLOY_HOST:-root@159.223.229.37}"
DEPLOY_PATH="${DEPLOY_PATH:-/var/www/prasaai}"

echo "▶ Building site…"
npm run build

echo "▶ Uploading dist/ → ${DEPLOY_HOST}:${DEPLOY_PATH}"
# Stream the contents of dist/ through tar-over-ssh: reliable, no rsync needed,
# overwrites changed files in place. (Old hashed _astro/*.css files left behind
# by previous builds are harmless; clear them occasionally if you like.)
tar -C dist -czf - . \
  | ssh -o StrictHostKeyChecking=accept-new "$DEPLOY_HOST" \
        "set -e; mkdir -p '$DEPLOY_PATH'; tar -C '$DEPLOY_PATH' -xzf -"

echo "▶ Verifying live pages…"
home=$(curl -s -o /dev/null -w '%{http_code}' https://prasaai.co.za/         || echo "000")
dash=$(curl -s -o /dev/null -w '%{http_code}' https://prasaai.co.za/dashboard || echo "000")
adv=$( curl -s -o /dev/null -w '%{http_code}' https://prasaai.co.za/advertise || echo "000")
echo "   /            → $home"
echo "   /dashboard   → $dash"
echo "   /advertise   → $adv"

echo "✅ Deployed. Live at https://prasaai.co.za"
