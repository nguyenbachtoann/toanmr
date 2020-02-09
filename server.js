const express = require("express");
const mongoose = require("mongoose");
const todosRoute = require("./routes/todos");
const prioritiesRoute = require("./routes/priorities");
const tagsRoute = require("./routes/tags");
const cors = require("cors");
require("dotenv/config");

// midleware routes - import routes
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;
// route config
app.use("/api/todos", todosRoute);
app.use("/api/priorities", prioritiesRoute );
app.use("/api/tags", tagsRoute );


// connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("connected to mongo");
});

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
