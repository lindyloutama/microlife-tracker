const express = require('express');
const createActivity = require('./controllers/createActivity');

const app = express();

app.listen(3000, () => console.log('Example app listening on port 3000!'));
app.post('/profile/activities', createActivity);
