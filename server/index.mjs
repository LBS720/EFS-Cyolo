import express from "express";
import router from "./routes/routes.mjs";
import cors from "cors";

const app = express();

const PORT = 5006;

app.use("/", router);

app.use(cors());


app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
