const express= require('express')

const KnowledgeItem = require('../models/knowledgeItem')

const router = express.Router()

router.get('/', function(req, res) {
    KnowledgeItem.find().then(items => {
        res.json(items.map(item => { return { id: item._id, title: item.title, shortDesc: item.shortDesc } }))
    })
})

router.post('/', function(req, res) {
	console.log('in root post')
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