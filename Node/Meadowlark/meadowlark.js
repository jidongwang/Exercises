// JavaScript source code

// This is trying to import a node module. It will look for a 'express'
// folder under default module folder 'node_modules'
var express = require('express');

// importing a self-defined module. Note, it has to start with './', otherwise
// Node will look for it inside the default folder 'node_modules' which will fail.
var fortune = require('./lib/fortune.js');

var app = express();

// set up handlebars view engine
// specified the default layout 'main' -- 'main.handlebars'
var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// define 
var fortunes = ["Conquer your fears or they will conquer you.",
                "Rivers need springs.",
                "Do not fear what you don't know.",
                "Whenever possible, keep it simple.",
];

app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function (req, res) {
    res.render('about', { fortune: fortune.getFortune() });    // about.handlebars
});

// custom 404 page
app.use(function (req, res) {
    res.status(404);        
    res.render('404');      // 404.handlebars
});

// custom 500 page
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.use(express.static(__dirname, + '/public'));

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctrl=C to terminate' );
});