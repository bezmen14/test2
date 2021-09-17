const { model, Schema } = require("mongoose");

const dataSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const DataModel = model('Data', dataSchema);

module.exports = DataModel;
