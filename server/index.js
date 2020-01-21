const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//Initialize app
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/users", require("./routes/api/users"));

const uri = require("./config/keys").MONGO_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("Connection is okay."))
  .catch(err => console.log(err));

const port = require("./config/keys").PORT;

app.listen(port, () => console.log(`Server started on port ${port}`));
