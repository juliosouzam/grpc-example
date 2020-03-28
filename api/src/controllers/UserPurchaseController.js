const NixService = require('../services/nix');

class UserPurchaseController {
  async index(req, res) {
    const { userId } = req;

    const response = await new Promise((resolve, reject) => {
      NixService.listPurchase({ userId }, (err, res) => {
        if (err) {
          return reject(err);
        }

        return resolve(res);
      });
    });

    return res.json(response);
  }
}

module.exports = new UserPurchaseController();
