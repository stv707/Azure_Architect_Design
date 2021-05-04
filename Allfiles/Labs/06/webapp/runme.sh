#!/bin/bash
# Setup dbconfig.json based on env or fall back to default
# Function Set

function setallvar {

if [ ! -z ${DBPASS} ] ; then echo "we got DBPASS" ; else export DBPASS=Pa55w0rd2019 ; fi

if [ ! -z ${DBUSER} ]  ; then echo "we got DBUSER" ; else export DBUSER=sa ; fi

if [ ! -z ${DBSVR} ]  ; then echo "we got DBSVR"  ; else export DBSVR=mssql ; fi

if [ ! -z ${DB} ]  ; then echo "we got DB"  ; else export DB=WideWorldImporters ; fi

if [ ! -z ${DBPORT} ]  ; then echo "we got DBPORT"  ; else export DBPORT=1433 ; fi

if [ ! -z ${DBOPT} ]  ; then echo "we got DBOPT"  ; else export DBOPT=false ; fi

}

function gendbconf {
cat <<EOF
{
    "user": "${DBUSER}",
    "password": "${DBPASS}",
    "server": "${DBSVR}",
    "database": "${DB}",
    "port": "${DBPORT}",
    "options": {
        "encrypt": ${DBOPT}
    }
}
EOF
}
#Main Body
cp ./src/config/dbconfig.json ./src/config/dbconfig.bak

setallvar

gendbconf > ./src/config/dbconfig.json