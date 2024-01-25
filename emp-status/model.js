const mongoose = require("mongoose");

const EmpStatusSchema = mongoose.Schema({
  company_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
  empstatus_name: {
    type: String,
    required: true,
  },
  empstatus_color: {
    type: String,
    required: true,
  },
  empstatus_desc: {
    type: String,
  },
});

module.exports = mongoose.model("emp-status", EmpStatusSchema);
