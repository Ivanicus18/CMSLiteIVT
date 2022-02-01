const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'MousetraP=26',
        database: 'company'
    },
    console.log('Connected to the election database.')
);