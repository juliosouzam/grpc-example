const HidraService = require('../services/hidra');

class UserController {
  async store(req, res) {
    const { email, username, password } = req.body;

    const { user } = await new Promise((resolve, reject) => {
      HidraService.registerUser(
        { user: { email, username, password } },
        (err, res) => {
          if (err) {
            return reject(err);
          }

          return resolve(res);
        }
      );
    });

    return res.json(user);
  }

  async show(req, res) {
    const { id } = req.params;

    const { user } = await new Promise((resolve, reject) => {
      HidraService.getUserById({ id }, (err, res) => {
        if (err) {
          return reject(err);
        }

        return resolve(res);
      });
    });

    return res.json(user);
  }
}

module.exports = new UserController();
