'use strict';

const fs = require('fs');
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    // 200 status code means OK
    res.status().send(200);
})

var http = require('http');

// Create a server object
http.createServer(function(req, res) {

    // http header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    var url = req.url;

    if (url === '/database.json') {
        console.log("reading again");
        const jsonData = require('./database.json');
        console.log(jsonData);
        res.write(' data loaded');
        res.end();

    } else if (url === '/train') {
        console.log("Train management ");
        res.write('Train management');
        res.end();
    
    }
    else if (url === '/website') {
        console.log("welcome to our website");
        res.write(' Welcome to our website');
        res.end();
    } 
    else {
      //  res.writeHead(200);
        res.write('Server loaded.');
        res.end();

    }
}).listen(3000, function() {

    // The server object listens on port 3000
    console.log("server start at port 8081");
});

/*
let rawdata = fs.readFileSync('database.json');
let mechanic = JSON.parse(rawdata);
console.log(mechanic); 
*/
//
let managers = {"data":[
    {"ID":1, "Name":"suresh", "Age":"28", "Station": "Chennai", "Phone": 9234776512, "Salary": 18000},
    {"ID":2, "Name":"ramesh", "Age":"37",  "Station": "Bengaluru", "Phone": 9877530087, "Salary": 8000},
    {"ID":3, "Name":"dinesh", "Age":"31", "Station": "Mumbai", "Phone": 9722465589, "Salary": 15000},
    {"ID":4, "Name":"yogesh", "Age":"38",  "Station": "Kolkata", "Phone": 9145667822, "Salary": 2000},
    {"ID":5, "Name":"nithya", "Age":"26",  "Station": "Delhi", "Phone": 9066775422, "Salary": 7500},
    {"ID":6, "Name":"Shivani", "Age":"48",  "Station": "Manglore", "Phone": 9122345555, "Salary": 9000},
    {"ID":7, "Name":"nithish", "Age":"45",  "Station": "Nagpur", "Phone": 9847334322, "Salary": 8700}  
]}

let data = JSON.stringify(managers);

fs.writeFile('./database.json', data, (err) => {
    console.log('WRITTING...');
    if (err) throw err;
    console.log('Data written to file');
});



fs.readFile('./database.json', (err, data) => {
    console.log('READING...');
    if (err) throw err;
    let man = JSON.parse(data);
    console.log(man);

});