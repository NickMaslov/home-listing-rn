const express = require('express');
const { body, validationResult } = require('express-validator');

const House = require('../models/House');

const router = express.Router();

router.post('/', [body('title').isLength({ min: 3, max: 50 })], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const house = new House({
    title: req.body.title,
    address: req.body.address,
    homeType: req.body.homeType,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
    yearBuilt: req.body.yearBuilt,
  });

  house
    .save()
    .then((result) => {
      res.send({
        message: 'House data created successfully',
        data: result,
      });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
