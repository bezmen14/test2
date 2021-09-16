const express = require('express');
const {
  getAllData,
  createLine,
  editLine,
  deleteLine,
} = require('../controllers/data.controller');

const router = express.Router();

router.route('/')
  .get(getAllData)
  .post(createLine);

router.route('/:id')
  .delete(deleteLine)
  .put(editLine)

const dataRouterApi = router;

module.exports = dataRouterApi;
