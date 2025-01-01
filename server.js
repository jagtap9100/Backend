const express = require("express");
const dotenv = require("dotenv").config();
const adminRoutes = require("./Routes/adminRoutes");
const app = express();
const PORT = process.env.PORT || 3008;
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});
app.use("/admin", adminRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
