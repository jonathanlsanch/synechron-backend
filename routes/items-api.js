var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Item = require('../models/item-model');

/* GET Items listing. */
router.get('/items', (req, res, next) => {
  Item.find((err, itemsList) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(itemsList);
  });
});

/* CREATE a new Item. */
router.post('/items', (req, res, next) => {
    const theItem = new Item({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      rating: req.body.rating,
      seller: req.body.seller,
      warranty: req.body.warranty,
    });
  
    theItem.save((err) => {
      if (err) {
        res.json(err);
        return;
      }
  
      res.json({
        message: 'New Item created',
        id: theItem._id
      });
    });
});

/* GET a single Item. */
router.get('/items/:id', (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
    
    Item.findById(req.params.id, (err, theItem) => {
        if (err) {
          res.json(err);
          return;
        }
  
        res.json(theItem);
    });
});
  
/* EDIT an Item. */
  router.put('/items/:id', (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
  
    const updates = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        rating: req.body.rating,
        seller: req.body.seller,
        warranty: req.body.warranty
    };
    
    Item.findByIdAndUpdate(req.params.id, updates, (err) => {
      if (err) {
        res.json(err);
        return;
      }
  
      res.json({
        message: 'Item updated successfully'
      });
    });
})
  
/* DELETE an Item. */
router.delete('/items/:id', (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
    
    Item.remove({ _id: req.params.id }, (err) => {
      if (err) {
        res.json(err);
        return;
      }
  
      return res.json({
        message: 'Item has been removed!'
      });
    })
});
  
  
  

module.exports = router;