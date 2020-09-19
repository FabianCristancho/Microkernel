const express = require('express');
const colors = require('Microkernel');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
     let chosenColor = colors.randomColor();
     res.render('index', {color: chosenColor});
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



