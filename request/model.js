const mongoose = require("mongoose");

const requestSchema = mongoose.Schema({
  company_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
  request_data_id: {
    type: String,
  },
  request_type: {
    type: String,
    required: true,
  },
  request_datetime: {
    type: String,
  },
});

module.exports = mongoose.model("request", requestSchema);
