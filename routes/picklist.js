const express= require('express')
const router = express.Router()

const PickListType = require('../models/pickListType')
const PickListItem = require('../models/pickListItem')


// GET - /picklist/:id

// POST - /picklist/:id

// DELETE - /picklistitem/:id

router.get('/', function(req, res) {

    PickListItem.find().then(items => {
        res.json(items.map(item =>  {name: item.name, username: item.username} ))
    })
})