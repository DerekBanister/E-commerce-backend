const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  //working
  try {
    const data = await Category.findAll({ include: Product });
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  //working
  try {
    const data = await Category.findByPk(req.params.id, { include: Product })
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  //working
  try {
    const newCat = await Category.create(req.body);
    return res.status(200).json(newCat)
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  //works
  try {
    await Category.update(req.body, { where: { id: req.params.id } })
    return res.status(200).send();
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  //works
  try {
    await Category.destroy({ where: { id: req.params.id } })
    return res.status(200).send();
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
