#!/bin/bash

# Đặt user-agent của bạn
USER_AGENT="Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1"

while true
do
  curl "$USER_AGENT" https://ndng.net/vi/blogs 
  sleep 0.1
done
