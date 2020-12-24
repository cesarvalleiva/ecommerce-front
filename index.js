const express = require('express');
const app = express();
const path = require('path');
const handlebars  = require('express-handlebars');
const port = 3000;

app.set('view engine', 'hbs');

app.engine('hbs', handlebars({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: `${__dirname}/views/partials`
}));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('main');
});

app.listen(port, () => {
    console.log(`Servidor escuchando puerto ${port}`);
})
