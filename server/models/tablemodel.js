const mongoose =  require("mongoose");

const tableSchema = mongoose.Schema(
  {
    id: String,
    username: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
  { timestamp: true }
);

const Table = mongoose.model("TableSchema", tableSchema);
module.exports = { Table };
