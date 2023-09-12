import express from "express";
import router from "./routes/routes.mjs";
import cors from "cors";

const app = express();

app.use("/", router);

app.use(cors());

const PORT = 5006;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
