const express = require('express');
const colors = require('plugin-colors');
const messages = require('plugin-message');
const nodemailer = require('nodemailer');
const path = require('path');
const bodyParser = require('body-parser');
const passwordMainMail = process.argv[2];
const PDF = require('pdfkit');
const fs = require('fs');
const app = express();
const port = 3000;
var color = '';
var filename ='';
var buffers = [];

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'distributed.systemUPTC',
		pass: passwordMainMail
	}
});

app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));


app.get('/', (req, res) => {
  color = colors.randomColor();
	res.render('index', { color, filename });
});

app.post('/convert', (req, res) => {
	console.log('Título:\n' + req.body.title);
	console.log('Cuerpo: \n' + req.body.bodyText);
	filename = generatePDF(req.body);
	res.redirect('/');
});

app.post('/send_email', (req, res) => {
	let pdfData = Buffer.concat(buffers);
	sendMail(pdfData, req.body.email);
	filename = '';
	buffers =[];
	res.redirect('/');
});
app.get('/generate', (req, res) => {
	res.json(messages.randomMessage());
});

function sendMail(pdfData, destiny) {
	var mailOptions = {
		from: 'distributed.systemUPTC@gmail.com',
		to: destiny,
		subject: 'CORREO PRUEBA DESDE NODEJS - PDF',
		text: 'Email con tarjeta de felicitación',
		attachments: [
			{
				filename: 'file.pdf',
				content: pdfData
			}
		]
	};

	transporter.sendMail(mailOptions, function(err, info) {
		if (err) {
			console.log(err);
		} else {
			console.log('Email sended: ' + info.response);
		}
	});
}

function generatePDF(data) {
	var doc = new PDF();
	doc.on('data', buffers.push.bind(buffers));

	doc.pipe(fs.createWriteStream(__dirname +'/public/' + data.title +'.pdf'));
	doc.fillColor(color);
	doc.text(data.title, {
		align: 'center'
	});

	doc.text('\n\n\n');
	doc.text(data.bodyText, {
		align: 'justify'
	});

	doc.end();

	return data.title;
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));