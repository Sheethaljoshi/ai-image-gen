import cors from "cors";
import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

//default stuff
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

//this is the error handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
      success: false,
      status,
      message,
    });
  });

  //the default get
  app.get("/", async (req, res) => {
    res.status(200).json({
      message: "Hello Sheethal!",
    });
  });

  //function to start server
  const startServer = async () => {
    try {
      app.listen(8080, () => console.log("Server started on port 8080"));
    } catch (error) {
      console.log(error);
    }
  };

  startServer();