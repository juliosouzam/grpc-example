const NixService = require('../services/nix');

class PurchaseController {
  async store(req, res) {
    const { title, value } = req.body;
    const { userId } = req;

    const response = await new Promise((resolve, reject) => {
      NixService.purchase(
        { purchase: { title, value, userId } },
        (err, resp) => {
          if (err) {
            return reject(err);
          }

          return resolve(resp);
        }
      );
    });

    return res.json(response);
  }
  async show(req, res) {
    const { id } = req.params;

    const response = await new Promise((resolve, reject) => {
      NixService.getPurchaseById({ id }, (err, res) => {
        if (err) {
          return reject(err);
        }

        return resolve(res);
      });
    });

    return res.json(response);
  }
}

module.exports = new PurchaseController();
