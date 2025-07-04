const { Schema, model } = require("mongoose");
const { createHmac, randomBytes } = require("crypto");
const { createTokenForUser } = require("../service/authenticaton");

const userSchema = new Schema(
  {
    Fullname: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    salt: {
      type: String,
      // Assuming salt is used for password hashing
    },
    Password: {
      type: String,
      required: true,
    },
    profileImageUrl: {
      type: String,
      default: "/image/default.png", // Default profile image
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user", // Default role is user
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const user = this;
  // 'this' refers to the user document (an instance of the model)

  // Ensure the password is hashed only when it is modified or new
  if (!this.isModified("Password")) return next();

  const salt = randomBytes(16).toString("hex"); // Generate a new salt

  const hashedPassword = createHmac("sha256", salt)
    .update(user.Password)
    .digest("hex");

  this.salt = salt; // Store the salt
  this.Password = hashedPassword; // Store the hashed password
  next();
});

userSchema.static(
  "matchPasswordAndGenerateToken",
  async function (Email, Password) {
    const user = await this.findOne({ Email });
    if (!user) throw new Error("User not Found!");

    const salt = user.salt;
    const hashedPassword = user.Password;

    const userProvideHash = createHmac("sha256", salt)
      .update(Password)
      .digest("hex");

    if (hashedPassword !== userProvideHash) {
      throw new Error("Incorrect Password");
    }
    //   return hashedPassword === userProvideHash;
    //   return user;
    const token = createTokenForUser(user);
    return token;
  }
);

const User = model("user", userSchema);
module.exports = User;
