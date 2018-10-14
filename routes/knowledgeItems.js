const express= require('express')
const KnowledgeItem = require('../models/knowledgeItem')
const router = express.Router()

const authUtil = require("../auth/authUtil")

router.get('/', function(req, res) {
    if (authUtil.isAdmin(req, res)) {
        KnowledgeItem.find().then(items => {
            res.json(items.map(item => { return { id: item._id, title: item.title, shortDesc: item.shortDesc, approved: item.approved } }))
        })
    } else {
         KnowledgeItem.find({approved: true}).then(items => {
            res.json(items.map(item => { return { id: item._id, title: item.title, shortDesc: item.shortDesc, approved: item.approved } }))
        })
    }
})

router.post('/', authUtil.isAuthenticated, function(req, res) {
    let knowledgeItem = new KnowledgeItem(req.body)

    if (!authUtil.isAdmin(req, res)) {
        knowledgeItem.approved=false
    }

    knowledgeItem.save().then(result => {
        res.status(201).json({ success: true })
    })
})

router.get('/:id', function(req, res) {
    KnowledgeItem.findOne({_id: req.params.id}).then(result => {
        res.json(result)
    })
})

router.put('/:id', authUtil.isAuthenticated, function(req, res){
    if (req.body.user != req.user || (req.body.approved == "true" && !authUtil.isAdmin(req, res))) {
        res.status(401).json({message: "not authorized to approve"})
        return
    }
	KnowledgeItem.findOneAndUpdate({_id: req.params.id}, req.body).then(result => {
    	res.status(200).json({ success: true })
    })
})

router.delete('/:id', authUtil.isAdmin, function(req, res){
    if  (req.body.user != req.user){
        res.status(401).json({message: "not authorized to approve"})
    }else{
    	KnowledgeItem.findOneAndDelete({_id: req.params.id}).then(result => {
        	res.status(202).json({ success: true })
        })
    }
})

module.exports = router
