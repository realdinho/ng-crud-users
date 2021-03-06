const express = require('express');
const path = require('path');
const cors = require('cors')

const app = express();

// proxies
app.use(cors());

// serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/ng-crud-users'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname+'/dist/ng-crud-users/index.html'));
});

// start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);