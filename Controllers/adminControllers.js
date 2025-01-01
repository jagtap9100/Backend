const adminlogin = (req, res) => {
  // Code to validate admin credentials and grant access to admin routes
  res.json({ message: "Admin login successful!" });
};

module.exports = { adminlogin };
