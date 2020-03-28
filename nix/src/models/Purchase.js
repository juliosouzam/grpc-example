const { Schema, model } = require('mongoose');

const PurchaseSchema = new Schema(
  {
    userId: String,
    title: String,
    value: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = model('Purchase', PurchaseSchema);
