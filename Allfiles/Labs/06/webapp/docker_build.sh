#!/bin/bash

if [ $# -lt 1 ]
then 
    echo "you must pass your docker hub name for tagging"
    echo "example: $0 stv707"
    exit 22
fi


docker build . --rm -t ${1}/webapp:latest





