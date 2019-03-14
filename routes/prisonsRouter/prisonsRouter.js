const express = require('express');
const router = express.Router();
const db = require('./prisonsHelper.js');

// ----- Routes -----
router.get('/api/prisons', (req, res) => {
    db.getPrisons()
    .then(prisons => {
        res.status(200).json(prisons);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

router.post('/api/prisons', (req, res) => {
    const prisonInfo = req.body;

    db.insert(prisonInfo)
        .then(newPrison => {
            res.status(201).json(newPrison)
        })
});