const HidraService = require('../services/hidra');

class LoginController {
  async store(req, res) {
    const { email, password } = req.body;

    const response = await new Promise((resolve, reject) => {
      HidraService.loginUser(
        {
          user: {
            email,
            password,
          },
        },
        (err, res) => {
          if (err) {
            return reject(err);
          }

          return resolve(res);
        }
      );
    });

    return res.json(response);
  }
}

module.exports = new LoginController();
