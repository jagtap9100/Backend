const adminlogin = (req, res) => {
  res.json({ message: "Admin login successful!" });
  res.json({ message: "Changes to be committed:" });
  res.json({
    message:
      "Code to validate admin credentials and grant access to admin routes!",
  });
};

module.exports = { adminlogin };
