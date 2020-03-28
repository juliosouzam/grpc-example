const HidraService = require('../services/hidra');

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Sem permissões' });
  }

  const [, token] = authorization.split(' ');

  try {
    const response = await new Promise((resolve, reject) => {
      HidraService.authenticate({ token }, (err, resp) => {
        if (err) {
          return reject(err);
        }

        return resolve(resp);
      });
    });

    req.userId = response.id;

    return next();
  } catch (error) {
    return res.status(401).json(error.message);
  }
};
