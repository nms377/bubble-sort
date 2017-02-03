const server = require('../server');
const express = require('express');
// const bubbleDB = require('./db/bubble-db');
const bubbleSort = require('../bubble-sort');

const app = express();
const router = express.Router();

// router.get('/new', (req, res) => {
// 	res.render('bubble/new');
// });

// router.route('/')
// 	.get((req, res) => {
// 		res.render('/index');
// 		// bubbleDB.getArray(req, res);
// 	});

