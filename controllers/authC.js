const bcrypt = require("bcrypt");
const { User } = require("../models");

const authC = {
  registerUser: async (req, res) => {
    try {
      const { username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        username,
        password: hashedPassword,
      });

      req.session.user = newUser;
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      res.status(500).json({ error: "Registration failed" });
    }
  },

  loginUser: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username } });

      if (!user || !(await bcrypt.compare(password, user.password))) {
        res.status(401).json({ error: "Invalid credentials" });
      } else {
        req.session.user = user; // Store user in session
        res.status(200).json({ message: "Login successful" });
      }
    } catch (error) {
      res.status(500).json({ error: "Login failed" });
    }
  },

  logoutUser: (req, res) => {
    req.session.destroy(() => {
      res.status(200).json({ message: "Logout successful" });
    });
  },
};

module.exports = authC;
