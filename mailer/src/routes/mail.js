const express = require('express');
const router = express.Router();

const {MailService} = require("../services/mailer");

router.use((req, res, next)=> {
    next();
});

router.post('/', async (req, res) => {
    const email = req.body.email;
    const message = req.body.message;
    console.log(email)

    const response = await MailService.sendEmail(email, message);

    res.status(200);
    res.json(response);
});

router.get('/', async (req, res) => {
    const email = req.body.email;
    const response = await MailService.getEmailInfo(email);
    
    res.status(200);
    res.json(response);
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const email = req.body.email;
    const data = {id, email};

    const response = await MailService.updateEmail(data);

    res.status(200);
    res.json(response);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const response = await MailService.deleteEmail(id);

    res.status(200);
    res.json(response);
});

module.exports = router;
