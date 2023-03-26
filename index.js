import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());

app.use("/api", routes);

app.use("/", (req, res) => {
  return res.json("Welcome to Go Foods Server!!");
});

app.listen(PORT, async () => {
  console.log(`Server is listening on port ${PORT}`);
});
