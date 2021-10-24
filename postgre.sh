#! /bin/bash

docker run --rm --name pgdocker -e POSTGRES_PASSWORD=123 -e POSTGRES_USER=tasks -e POSTGRES_DB=tasks -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres;
