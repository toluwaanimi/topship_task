#!/bin/bash

echo "RUN MIGRATION IF EXISTS ======================================="

if [ $? != 0 ];
then
    set -e
    echo "ERROR MIGRATING ==========================================="
else
    echo "START APPLICATION ========================================="
    exec npm run start
    echo "APPLICATION STARTED WITH NEW RELEASE SUCCESSFULLY ============="
fi