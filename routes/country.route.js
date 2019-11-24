const router = require('express').Router();
let Country = require('../model/country.model');

router.route('/').get((req, res) => {
  Country.find()
    .then(countries => res.json(countries))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const countryname = req.body.countryname;
  const countrycode = req.body.countrycode;
  const description = req.body.description;
  const date = Date.parse(req.body.date);

  const newCountry = new Country({
    countryname,
    countrycode,
    description,
    date,
  });

  newCountry.save()
  .then(() => res.json('Card Created'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Country.findById(req.params.id)
    .then(country => res.json(country))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Country.findByIdAndDelete(req.params.id)
    .then(() => res.json('Card deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Country.findById(req.params.id)
    .then(country => {
      country.countryname = req.body.countryname;
      country.countrycode = req.body.countrycode;
      country.description = req.body.description;
      country.date = Date.parse(req.body.date);
      country.save()
        .then(() => res.json('Card updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;