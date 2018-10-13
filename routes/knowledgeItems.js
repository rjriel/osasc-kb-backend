const express= require('express')

const KnowledgeItem = require('../models/knowledgeItem')

const router = express.Router()

router.get('/', function(req, res) {

    KnowledgeItem.find().then(items => {
        res.json(items.map(item => { item._id, item.title, item.shortDesc }))
    })
})

router.post('/', function(req, res) {
    let knowledgeItem = new KnowledgeItem({
        title: req.body.title
    })

    knowledgeItem.save().then(result => {
        res.status(201).json({ success: true })
    })
})

router.get('/:id', function(req, res) {
    KnowledgeItem.find({_id: req.params.id}).then(results => {
        res.json(results)
    })
})

module.exports = router