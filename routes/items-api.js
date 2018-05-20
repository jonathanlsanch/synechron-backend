var express = require('express');
var router = express.Router();

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



module.exports = router;