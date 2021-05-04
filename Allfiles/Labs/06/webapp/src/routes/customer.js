// ------------------------------------------------------------------------//
// Description: Demo application source code
// Repository: https://github.com/erickangMSFT
// Author: Eric Kang
// License: MIT
// ------------------------------------------------------------------------//

'use strict';

const express = require('express');
const router = express.Router();
const mssql = require('mssql');
// const fs = require('fs');

const sqldevops = require('../modules/sqldevops.js');

// const sqlFile = './src/sql/sales.sql';
const dbconfig = require('../config/dbconfig.json');
const nav = require('../config/navconfig.json');

const viewName = 'customer';
const title = 'Customer (Edit)';
const description = 'Perform EDIT on Sales.Customer table.';

const pool = mssql.globalConnectionPool;

const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');


/* GET top 7 Sales.Customer Table and render directory page. */
router.get('/', (req, res, next) => {    
     const request = new mssql.Request(pool);
        request.query("SELECT top (7) customerid, customername, phonenumber FROM sales.customers", (err, results) => {
            if (err) {
                const sqlerror = sqldevops.getSqlError(err);
                res.render('error', {
                    message: sqlerror.message,
                    error: sqlerror
                });
            }
            else {
                console.log(results.recordset);
                res.render(viewName,{
                    results: results,
                    title: title,
                    description: description,
                    server: dbconfig.server,
                    database: dbconfig.database,
                    user: dbconfig.user,
                    nav: nav,
                    recordset: results.recordset
                });
            }
        });
    });

    /* POST RECORD EDIT to Sales.Customer Table. */
    router.post('/', (req, res, next) => {    
    const request = new mssql.Request(pool);
    request.query( "UPDATE sales.customers SET customername = ('" + req.body.customername +"') , phonenumber = ('" + req.body.phonenumber +"') WHERE customerid = ('" + req.body.customerid +"')" , (err, results) => { 
        console.log(results);
        if(err) throw err;        
        res.redirect('/customer');
      }); 
        
    });

module.exports = router; 