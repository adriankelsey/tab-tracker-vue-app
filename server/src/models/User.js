module.exports = (sequelzize, DataTypes) =>
  sequelzize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
  });
