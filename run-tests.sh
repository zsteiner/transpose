#!/bin/bash
export PORT=3002
export PLAYWRIGHT_BASE_URL=http://localhost:3002
npx playwright test 2>&1
