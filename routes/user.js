const { Router } = require("express");
const router = Router();
const User = require("../model/user");
const Blog = require("../model/blog"); // Add this at the top if not already

router.get("/signin", (req, res) => {
  return res.render("signin");
});
router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.post("/signup", async (req, res) => {
  const { Fullname, Email, Password } = req.body; //these field will come from the body of the request

  await User.create({
    Fullname,
    Email,
    Password,
  });
  return res.redirect("/");
});

router.post("/signin", async (req, res) => {
  const { Email, Password } = req.body;
  try {
    const token = await User.matchPasswordAndGenerateToken(Email, Password);
    console.log("Token", token);
    return res.cookie("Token", token).redirect("/");
  } catch (error) {
    return res.render("signin", {
      error: "Incorrect Email or Passoword",
    });
  }
});

router.get("/", async (req, res) => {
  const allBlogs = await Blog.find({}).sort("createdAt");
  res.render("homepage", {
    blogs: allBlogs,
  });
}); //used again for home button

router.get("/logout", (req, res) => {
  res.clearCookie("Token").redirect("/");
});

module.exports = router;
