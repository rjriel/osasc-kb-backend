const express= require('express')
const router = express.Router()

const PicklistItem = require('../models/picklistItem')

router.get('/:id', function(req, res) {
	PicklistItem.find({picklistId: req.params.id}).then(result => {
		res.json(result)
	})
})

router.post('/:id', function(req, res) {

	req.body.picklistId = req.params.id
	let picklistItem = new PicklistItem(req.body)
	picklistItem.save().then(result => {
		res.status(201).json({success: true })
	})

})

module.exports = router
