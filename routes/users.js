const express= require('express')
const User = require('../models/user')
const router = express.Router()
const bcrypt = require('bcrypt')

router.get('/', function(req, res) {

    User.find().then(items => {
        // res.json(items) - returns all schema attributes 
        res.json(items.map(item => { return {id: item._id, username: item.username} }))
    })
})

router.post('/', function(req, res) {
    let user = new User({
        username: req.body.username,
        organization: req.body.organization,
        name: req.body.name,
        role: req.body.role
    })

    bcrypt.hash(req.body.password, 5, function( err, bcryptedPassword) {
        user.password = bcryptedPassword
        user.save().then(result => {
            res.status(201).json({ success: true })
        })
     });
})

router.get('/:id', function(req, res) {
    User.findOne({_id: req.params.id}).then(results => {
        res.json(results)
    })
})

router.put('/:id', function(req, res){
    User.findOneAndUpdate({_id: req.params.id}, req.body).then(result => {
        res.status(200).json({ success: true })
    })
})

router.delete('/:id', function(req, res){
	User.findOneAndDelete({_id: req.params.id}).then(result => {
    	res.status(202).json({ success: true })
    })
})

module.exports = router