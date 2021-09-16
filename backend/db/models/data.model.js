const { model, Schema } = require("mongoose");

const dataSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    min: 5,
  },
  content: {
    type: String,
    required: true,
    min: 5,
  },
});

const DataModel = model('Data', dataSchema);

module.exports = DataModel;
