const mongoose = require('mongoose');

// const opts = { toJSON: {virtuals: true}};

const OperationsSchema = new mongoose.Schema({
  description:{
    type: String,
    required: true,
  },
  amount:{
    type: Number,
    required: true,
  },
  date:{
    type: Date,
    required: true,
  },
  type:{
    type: String,
    required: true, 
  }
});

const OperationsModel = mongoose.model("operations", OperationsSchema);
module.exports = OperationsModel;



