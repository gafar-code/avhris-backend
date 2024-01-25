const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanyRelationsSchema = new Schema(
  {
    companies: [
      {
        type: Schema.Types.ObjectId,
        ref: "Company", // Reference the Company model if you have one
      },
    ],
  },
  { collection: "company_relations" }
);

module.exports = mongoose.model("CompanyRelations", CompanyRelationsSchema);
