const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/mail');
const cors = require('cors');

const app = express();
mongoose.connect('mongodb://root:example@mongo:27017/');

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use(express.json());

const port = process.env.PORT || 4000;

app.use('/', router);

app.listen(port, () => {console.log('Started!')});