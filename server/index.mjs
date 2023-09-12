import express from "express";
import router from "./routes/routes.mjs";

const app = express();

app.use("/", router);

const PORT = 5006;

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
