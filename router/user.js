const express = require('express');
const router = express.Router();
const path = require('path');
//====================================

const userPages = {
    home: path.join(__dirname, '..', 'views', 'index.html'),
    about: path.join(__dirname, '..', 'views', 'about.html'),
    contact: path.join(__dirname, '..', 'views', 'contact.html'),
};

router.get('/', (req, res) => {
    res.sendFile(userPages.home);
});

router.get('/about', (req, res) => {
    res.sendFile(userPages.about);
});

router.get('/contact', (req, res) => {
    res.sendFile(userPages.contact);
});

module.exports = router;