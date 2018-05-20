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

module.exports = router;