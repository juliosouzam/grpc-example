const User = require('./models/User');

module.exports = {
  async getUserById(call, callback) {
    try {
      const { id } = call.request;

      const user = await User.findById(id);

      callback(null, { user });
    } catch (error) {
      callback(error);
    }
  },

  async registerUser(call, callback) {
    try {
      const { email, username, password } = call.request.user;

      const user = await User.create({ email, username, password });

      callback(null, { user });
    } catch (error) {
      callback(error);
    }
  },

  async loginUser(call, callback) {
    const { email, password } = call.request.user;

    const user = await User.findOne({ email });

    if (!user) {
      return callback({ error: 'User not found' });
    }

    if (!(await user.compareHash(password))) {
      return callback({ error: 'Invalid password' });
    }

    return callback(null, {
      token: User.generateToken(user),
    });
  },

  async authenticate({ request }, callback) {
    const { token } = request;

    try {
      const { _id: id } = await User.authenticate(token);

      callback(null, { id });
    } catch (error) {
      callback(error);
    }
  },
};
