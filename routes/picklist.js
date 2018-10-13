const express= require('express')
const router = express.Router()

const PickListType = require('../models/pickListType')
const PickListItem = require('../models/pickListItem')

router.get('/:id', function(req, res) {
	PickListItem.find({pickListTypeId: req.params.id}).then(result => {
		res.json(result)
	})
})

router.post('/:id', function(req, res) {

	req.body.pickListTypeId = req.params.id
	let pickListItem = new PickListItem(req.body)
	pickListItem.save().then(result => {
		res.status(201).json({success: true })
	})

})



module.exports = router
