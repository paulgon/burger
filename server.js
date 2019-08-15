const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');

const app = express();
app.use(express.static(__dirname + '/public'));

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(methodOverride('method'));
app.engine(
    'handlebars',
    exphbs({
        defaultLayout: 'main'
    })
);
app.set('view engine', 'handlebars');

const routes = require('./controllers/routes.js');
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT);