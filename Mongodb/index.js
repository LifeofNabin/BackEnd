const mongoose=require("mongoose")
mongoose.connect(
  "mongodb+srv://NABINDHAMALA:j6F6qFYqqJ3cyNyd@cluster0.0z2j0.mongodb.net/"
);
const User = mongoose.model("users", {
  name: "string",
  email: "string",
  password: "string",
});
const user = new User({
  name: "nabin",
  email: "nabindhamala@yahoo.com",
  password: "12345",
});
user.save();
