#!/bin/bash

API_KEY="videolify_default_secret"
# VIDEOLIFY_URL="http://localhost:3000/api/v1/meeting"
# VIDEOLIFY_URL=https://videolify.herokuapp.com/api/v1/meeting
VIDEOLIFY_URL=https://videolify.up.railway.app/api/v1/meeting

curl $VIDEOLIFY_URL \
    --header "authorization: $API_KEY" \
    --header "Content-Type: application/json" \
    --request POST