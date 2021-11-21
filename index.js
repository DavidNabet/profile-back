require("dotenv").config();
import express from "express";
import { graphqlHTTP } from "express-graphql";
import mongoose from "mongoose";
import schema from "./graphql/schema";
import cors from "cors";

// mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_LOCAL_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Profile API v1" });
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.all("*", (req, res) => {
  res.status(404).json({ message: "Cette route n'existe pas !" });
});

app.listen(process.env.PORT || 4300, () => {
  console.log(`Server is listening on PORT ${process.env.PORT}`);
});
