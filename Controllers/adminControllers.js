const adminlogin = (req, res) => {
  // Code to validate admin credentials and grant access to admin routes
  res.json({ message: "Admin login successful!" });
  res.json({
    message:
      "Code to validate admin credentials and grant access to admin routes!",
  });
};

module.exports = { adminlogin };
