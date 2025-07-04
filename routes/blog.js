const { Router } = require("express");
const router = Router();
const multer = require("multer");
const path = require("path");

const Blog = require("../model/blog");
const Comment = require("../model/comment");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve("./public/upload/"));
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}+${file.originalname}`;

    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

router.get("/add-new", (req, res) => {
  return res.render("AddBlog", {
    user: req.user,
  });
});

router.get("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate("createdBy");
  const comments = await Comment.find({ blogId: blog._id }).populate(
    "createdBy"
  );

  return res.render("blogs", {
    user: req.user,
    blog,
    comments,
  });
});

router.post("/comment/:blogId", async (req, res) => {
  await Comment.create({
    content: req.body.content,
    blogId: req.params.blogId,
    createdBy: req.user._id,
  });
  return res.redirect(`/blog/${req.params.blogId}`);
});

router.post("/", upload.single("coverImage"), async (req, res) => {
  const { title, body } = req.body;
  const blog = await Blog.create({
    body,
    title,
    createdBy: req.user._id,
    coverImageUrl: `/upload/${req.file.filename}`,
  });
  return res.redirect(`/blog/${blog._id}`);
});

router.post("/delete/:id", async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

module.exports = router;
