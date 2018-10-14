const express= require('express')
const router = express.Router()

const PicklistItem = require('../models/picklistItem')

router.delete('/:id', function(req, res) {
	
	PicklistItem.findOneAndDelete({_id: req.params.id}).then(result =>{
		res.status(202).json({success: true})
	})
})

module.exports = router
