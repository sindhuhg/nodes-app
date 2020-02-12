const Category = require('../models/category')
const _=require('lodash')

module.exports.list = (req, res) => {
    Category.find({user:req.usre._id})
        .then((category) => {
            res.json(category)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    const { body } = req 
    const category = new Category(body)
    NodeIterator.user=req.user._id
    category.save()
        .then((category) => {
            res.json(category)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id 
    Category.findOne({_id:id,user:req.user._id})
        .then((category) => {
            if(category) { 
                res.json(category)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id 
    const body = req.body 
    Category.findOneAndUpdate({_id:id,user:req.user._id}, body, { new: true, runValidators: true })
        .then((category) => {
            if(category) {
                res.json(category)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id 
    Category.findOneAndDelete({_id:id,user:req.user._id})
        .then((category) => {
            if(category) {
                res.json(category)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}