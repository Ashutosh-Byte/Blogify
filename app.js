require("dotenv").config();

const path = require("path");
const express = require("express");
const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");
const Blog = require("./model/blog");
const User = require("./model/user");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { checkForAuthenticationCookie } = require("./Middleware/authentication");
const app = express();
const PORT = process.env.PORT || 8000;
mongoose.connect(process.env.MONGO_URL).then((e) => {
  console.log("MongoDb connected");
});
console.log(process.env.MONGO_URL);
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false, limit: "10mb" }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("Token"));
app.use(express.static(path.resolve("./public")));

app.use(async (req, res, next) => {
  if (req.user && req.user._id) {
    res.locals.user = await User.findById(req.user._id);
  } else {
    res.locals.user = null;
  }
  next();
}); //middleware for using user object in nav ejs file to fetch cureent signed in user name

app.get("/", async (req, res) => {
  const allBlogs = await Blog.find({}).sort("createdAt");
  res.render("homepage", {
    // user: req.user,
    blogs: allBlogs,
  });
});
app.use("/user", userRoute);
app.use("/blog", blogRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
