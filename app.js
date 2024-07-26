var util = require('util');
var url = require('url');
var http = require('http');

var express = require('express');
const { createServer } = require('http');
var nmDvEngine = 'sqlite3';

var notesdb = require('./notesdb-' + nmDvEngine);

var app = express();

var server = http.createServer(app);

app.use(express.logger());
app.use(express.bodyParser());
