const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const bs = require('body-parser');

const hbs = handlebars.create({
	extname: '.hbs',
	defaultLayout: 'app'
});

const bubbleRoute = require('./routes/bubble-route');

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

//method override
app.use(methodOverride('_method'));

//parse application/x-www-urlencoded
app.use(bs.urlencoded({ extended: false }));

// Mount bubble route
app.use('/', (req, res) => {
	res.render('index');
});

// app.get('/', (req, res) => {
// 	res.render('index');
// });

module.exports = app;