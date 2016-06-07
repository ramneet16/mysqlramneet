{\rtf1\ansi\ansicpg1252\cocoartf1404\cocoasubrtf470
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 var mysql=require('mysql');\
var connection=mysql.createConnection(\
    \{\
    host:'localhost',\
    user:'dbuser',\
    password:'password'\
    \});\
    connection.connect();\
    connection.query('Select 1+1 as Solution',function(err,rows,fields)\
    \{\
        if(err)\
        \{\
            throw(err);\
        \
        \}\
        console.log('The solution is:',rows[0].solution);\
        \
    \});\
    connection.end();}