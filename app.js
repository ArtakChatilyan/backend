const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const errorMiddleware=require('./middlewares/error-middleware');

const dataAccess = require("./database");

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

const subCategoryRouter = require("./routes/subcategories.router");

app.use("/categories", express.static("categories"));
app.use("/api/v1/subcategories", subCategoryRouter);

app.use(errorMiddleware);

app.get('/', (req, res) => {
  res.send('server working');
});

const start = () => {
  try {
    app.listen(8080, () => {
      console.log("Server is running on port 8080");
    });
  } catch (error) {
    console.log(error);
  }
};

start();