const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  //work
  try {
    const tags = await Tag.findAll({ include: Product })
    return res.status(200).json(tags);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  // working
  try {
    const tag = await Tag.findByPk(req.params.id, { include: Product })
    return res.status(200).json(tag)
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  // working
  try {
    const newTag = await Tag.create(req.body);
    return res.status(200).json(newTag);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  // working
  try {
    await Tag.update(req.body, { where: { id: req.params.id } })
    return res.status(200).send()
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  // working
  try {
    await Tag.destroy({ where: { id: req.params.id } })
    return res.status(200).send();
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
