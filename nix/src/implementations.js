const Purchase = require('./models/Purchase');

module.exports = {
  async purchase({ request }, callback) {
    try {
      const { title, value, userId } = request.purchase;

      const purchase = await Purchase.create({ title, value, userId });

      callback(null, { purchase });
    } catch (error) {
      callback(error);
    }
  },
  async getPurchaseById({ request }, callback) {
    try {
      const { id } = request;

      const purchase = await Purchase.findById(id);

      callback(null, { purchase });
    } catch (error) {
      callback(error);
    }
  },
  async listPurchase({ request }, callback) {
    try {
      const { userId } = request;

      const purchases = await Purchase.find({ userId });

      callback(null, { purchases });
    } catch (error) {
      callback(error);
    }
  },
};
