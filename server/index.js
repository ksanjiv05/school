const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const jiraAccess = require('./push_with_jira');
const jiraAccessByuser = require('./pus_data_custom_user');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});
app.get('/api/refreshAlgolia', (req, res) => {
    jiraAccess.start();
    //console.log('i am calling');
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ greeting: `Hii Your Algolia Index is Updated from Jira ` }));
  });
app.post('/api/refreshAlgolia', (req, res) => {
    jiraAccessByuser.start(req.body.url,req.body.username,req.body.password);
    console.log(req.body);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ greeting: `Hii Your Jira Project Data added to the Algolia ` }));
  });

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);