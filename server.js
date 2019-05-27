const app = require("express")();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;

// routes
const posts = require(`./routes/api/posts`);
const profile = require(`./routes/api/profile`);
const users = require(`./routes/api/users`);

//database
const db = require(`./config/keys`).mongoURI;

//connect to mongodb
mongoose
  .connect(db)
  .then(() => console.log(`MongoDb connected!`))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("HI, I am Agnibha!");
});

//using routes
app.use("/api/posts", posts);
app.use("/api/profile", profile);
app.use("/api/users", users);

app.listen(port, () => {
  console.log(`server has started ${port} `);
});
