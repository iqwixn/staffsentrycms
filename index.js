const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'qweasdzxc',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);
