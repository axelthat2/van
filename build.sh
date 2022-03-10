#!/bin/bash

yarn global add @sentry/cli

yarn build

release="--auth-token ${SENTRY_AUTH_TOKEN} releases --org cashforcarsio --project javascript"

sentry-cli $release files vance-dance delete --all

sentry-cli $release files vance-dance upload-sourcemaps ./dist/assets

sentry-cli $release finalize vance-dance

for path in ./dist/assets/*.js; do
  sed -i '$ d' "$path"
done
