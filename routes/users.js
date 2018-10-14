const express= require('express')
const User = require('../models/user')
const router = express.Router()

const authUtil = require("../auth/authUtil")

router.get('/', authUtil.isAuthenticated, authUtil.isAdmin, function(req, res) {

    User.find().then(items => {
        res.json(items.map(item => { return {id: item._id, username: item.username} }))
    })
})

router.post('/', authUtil.isAuthenticated, authUtil.isAdmin, function(req, res) {
    let user = new User(req.body)

    user.save().then(result => {
        res.status(201).json({ success: true })
    })
})

router.get('/:id', authUtil.isAuthenticated, authUtil.isAdmin, function(req, res) {
    User.findOne({_id: req.params.id}).then(results => {
        res.json(results)
    })
})

router.put('/:id', authUtil.isAuthenticated, authUtil.isAdmin, function(req, res){
    User.findOneAndUpdate({_id: req.params.id}, req.body).then(result => {
        res.status(200).json({ success: true })
    })
})

router.delete('/:id', authUtil.isAuthenticated, authUtil.isAdmin, function(req, res){
	User.findOneAndDelete({_id: req.params.id}).then(result => {
    	res.status(202).json({ success: true })
    })
})

module.exports = router
