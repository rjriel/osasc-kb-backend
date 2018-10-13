const express= require('express')

const User = require('../models/user')

const router = express.Router()

router.get('/', function(req, res) {

    User.find().then(items => {
        // res.json(items) - returns all schema attributes 
        res.json(items.map(item => { return {id: item._id, username: item.username} }))
    })
})

router.post('/', function(req, res) {
    let user = new User({
        username: req.body.username
    })

    user.save().then(result => {
        res.status(201).json({ success: true })
    })
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

module.exports = router