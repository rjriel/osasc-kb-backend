const express= require('express')

const KnowledgeItem = require('../models/knowledgeItem')

const router = express.Router()

router.get('/', function(req, res) {
    KnowledgeItem.find().then(items => {
        res.json(items.map(item => { return { id: item._id, title: item.title, shortDesc: item.shortDesc } }))
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
    KnowledgeItem.findOne({_id: req.params.id}).then(results => {
        res.json(results)
    })
})

router.put('/:id', function(req, res){
	KnowledgeItem.findOneAndUpdate({_id: req.params.id}, req.body).then(result => {
    	res.status(200).json({ success: true })
    })
})

router.delete('/:id', function(req, res){
	KnowledgeItem.findOneAndDelete({_id: req.params.id}).then(result => {
    	res.status(202).json({ success: true })
    })
})

module.exports = router