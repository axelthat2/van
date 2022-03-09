#!/bin/bash

yarn build

release="--auth-token ${SENTRY_AUTH_TOKEN} releases --org cashforcarsio --project javascript"

sentry-cli $release files vance-dance delete --all

sentry-cli $release files vance-dance upload-sourcemaps ./dist/assets

sentry-cli $release finalize vance-dance

find ./dist -type f -name "*.js.map" -delete


