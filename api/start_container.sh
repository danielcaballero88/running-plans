#!/usr/bin/env bash

docker build -t running_plans_api:temp .
docker run -p 8000:8000 -t running_plans_api:temp
