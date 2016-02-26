var express = require('express'),
    app = express(),
    exphbs  = require('express-handlebars');

// Tell the app that the templating engine is handlebars
app.engine('handlebars',
    // Passes default configuration to express-handlebars module
    exphbs({defaultLayout: 'main'}));

// Tell the app the the view engine property is also handlebars
app.set('view engine', 'handlebars');


// Tell Express on which port to listen
var port = Number(process.env.PORT || 3000)
app.listen(port, function() {
    console.log('listening on ' + port);
});

// Serve static files
app.use('/public', express.static('public'));

// Render the index.hanldebars page using the given data
// and serve it on route '/'
app.get('/', function(req, res) {
    res.render('index', {
        framework: 'Express',
        templating: "Handlebars"
    });
});
