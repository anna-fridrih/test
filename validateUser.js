
const { updateBalanceSchema } = require('../Validators/userValidator');

const validateUpdateBalance = (req, res, next) => {
  const { error } = updateBalanceSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports = { validateUpdateBalance };