//! get all data from body
const { username, email, password } = req.body;

//! confirm all data exists
if (!(username && email && password)) {
  return res.status(400).send("Please Fill all Fields");
}
//! check user already exists
const existingUser = User.findOne({ email });
if (existingUser) {
  return res.status(401).send("A user with this Email already exists");
}

//! encrypt password
const encryPass = bcrypt.hashSync(password, salt);

//! Save user to Database
const userDoc = await User.create({
  username: username,
  email: email,
  password: encryPass,
});

//! genarate a token for user and send it
const token = jwt.sign(
  {
    id: userDoc._id,
    email,
  },
  process.env.JWT_SECRET,
  { expiresIn: "2h" }
);

//adding token to userDoc obj
userDoc.token = token;

//to avoid sending password to client
userDoc.password = undefined;
