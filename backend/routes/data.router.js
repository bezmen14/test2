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
  .post(createLine)
  .put(editLine)
  .delete(deleteLine);

const dataRouterApi = router;

module.exports = dataRouterApi;
