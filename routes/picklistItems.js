const express= require('express')
const router = express.Router()

const PickListType = require('../models/pickListType')
const PickListItem = require('../models/pickListItem')


router.delete('/:id', function(req, res) {
	
	PickListItem.findOneAndDelete({_id: req.params.id}).then(result =>{
		res.status(202).json({success: true})
	})
})

module.exports = router
