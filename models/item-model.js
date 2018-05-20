'use strict';

const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({  
  name: {
    type: String,
    required: [true, 'The item name is required']
  },
  description: {
    type: String,
    required: [true, 'The item description is required']
  },
  price: {
    type: String,
    required: [true, 'The item price is required']
  },
  rating: {
    type: String,
    required: [true, 'The item rating is required']
  },
  seller: {
    type: String,
    required: [true, 'The item seller is required']
  },
  warranty: {
    type: String,
    required: [true, 'The item warranty is required']
  },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;