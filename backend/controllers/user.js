var User = require("../models/user");
var bcrypt = require("bcrypt");

module.exports = {
  async userRegister(req, res) {
    try {
      if (req.body.password.length < 5) {
        return res
          .status(400)
          .send({ message: "password should be more then five" });
      }
      req.body.password = await bcrypt.hash(req.body.password, 10);
      await User.create({ ...req.body });
      return res.json({ success: true, message: "user register successfully" });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  async userLogin(req, res) {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "User does not exists" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(404).json({ error: "invaild password" });
      }
      return res.json(user);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
};
