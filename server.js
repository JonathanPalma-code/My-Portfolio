const {createServer} = require('http');
const path = require('path');
const compression = require('compression');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const sendGrid = require('@sendgrid/mail');

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 8080)

const app = express();

const dev = app.get('env') !== 'production'

if(!dev) {
  app.disable('x-powered-by')
  app.use(compression())
  app.use(morgan('common'))

  app.use(express.static(path.resolve(__dirname, 'build')));

  app.use(bodyParser.json());

  app.use(cors());

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
  app.get('/api', (req, res, next) => {
    res.send('API Status: Running...')
  });

  app.post('/api/email', (req, res, next) => {

    console.log(req.body);

    sendGrid.setApiKey(process.env.API_KEY);

    const msg = {
      to: 'jonathanpalma89@gmail.com',
      from: req.body.email,
      subject: 'Website Contact',
      text: req.body.message
    };

    sendGrid.send(msg)

      .then(result => {
        res.status(200).json({
          success: true
        });
      })
      .catch(err => {
        console.log("Error: ", err);
        res.status(401).json({
          success: false
        });
      });
  });
}

if(dev) {
  app.use(morgan('dev'));
}

const server = createServer(app);

server.listen(PORT, err => {
  if(err) throw err

  console.log("Server started!")
})
