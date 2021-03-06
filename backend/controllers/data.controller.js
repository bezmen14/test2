const Data = require('../db/models/data.model');

const getAllData = async (req, res) => {
  try {
    const allData = await Data.find();
    return res.json(allData);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const createLine = async (req, res) => {
  try {
    const {
      title, content,
    } = req.body;
    if (title && content) {
      const newLine = await Data.create({
        title, content,
      });
      return res.status(201).json(newLine);
    }
    return res.sendStatus(406);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const editLine = async (req, res) => {
  try {
    const { id, inputOneValue, inputTwoValue } = req.body;
    const updatedLine = await Data.findByIdAndUpdate(
      id,
      { title: inputOneValue, content: inputTwoValue },
      { new: true }
    )
    return res.json(updatedLine).status(200);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const deleteLine = async (req, res) => {
  try {
    const { id } = req.body;
    if (id) {
      const currentLine = await Data.findById(id);
      if (currentLine) {
        currentLine.delete();
        return res.sendStatus(200);
      }
    }
    return res.sendStatus(418);
  } catch (error) {
    return res.sendStatus(500);
  }
};

module.exports = {
  getAllData,
  createLine,
  editLine,
  deleteLine,
};
