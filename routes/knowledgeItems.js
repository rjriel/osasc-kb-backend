const express= require('express')

const KnowledgeItem = require('../models/knowledgeItem')

const router = express.Router()

router.get('/', function(req, res) {

    KnowledgeItem.find().then(items => {
        res.json(items)
    })
})

module.exports = router