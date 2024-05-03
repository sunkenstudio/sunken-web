#!/bin/bash
cd sunken-web
git pull
docker-compose down && docker-compose pull && docker-compose up -d