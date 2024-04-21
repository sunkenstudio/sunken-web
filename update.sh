#!/bin/bash
cd sunken-web
git pull
docker-compose pull && docker-compose up -d 