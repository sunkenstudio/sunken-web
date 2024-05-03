#!/bin/bash
docker system prune -a -f --volumes
cd sunken-web
git pull
docker-compose down && docker-compose pull && docker-compose up -d