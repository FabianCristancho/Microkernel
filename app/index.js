const express = require('express');
const colors = require('Microkernel');
const path = require('path');
const bodyParser = require('body-parser');
const PDF = require('pdfkit');
const fs = require('fs');
const app = express();
const port = 3000;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
     let chosenColor = colors.randomColor();
     res.render('index', {color: chosenColor});
});

app.post('/convert', (req, res) => {
     console.log("Título:\n" +req.body.title);
     console.log("Cuerpo: \n" +req.body.bodyText);
     generatePDF(req.body.title, req.body.bodyText);
     res.redirect('/');
});

function generatePDF(title, bodyText){
     var doc = new PDF();
doc.pipe(fs.createWriteStream(__dirname +'report_text.pdf'));
          doc.text(title, {
               align: 'center'
          });
          doc.text('\n\n\n');
          doc.text(bodyText, {
               align: 'justify'
          })
     doc.end();
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



