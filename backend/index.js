require("dotenv").config(); //process gets added

console.log("=== ENVIRONMENT CHECK ===");
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("Is production?", process.env.NODE_ENV === "production");
console.log("MONGO_URL exists:", !!process.env.MONGO_URL);
console.log("TOKEN_KEY exists:", !!process.env.TOKEN_KEY);
console.log("========================");

const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { requireAuth } = require("./middlewares/AuthMiddleware");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;
const isProd = process.env.NODE_ENV === "production";

const app = express();

//connect to mongoDb
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDb is connected successfully"))
  .catch((err) => console.error(err));

//CORS configuration
app.use(
  cors({
    origin: [
      "http://localhost:5174",
      "http://localhost:5173",
      "https://kiteved.onrender.com",
      "https://kiteved-dashboard.onrender.com",
    ], // frontend app and dashboard app
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

//Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(bodyParser.json());

// Routes
app.use("/", authRoute);



const cookieOptions = {
  httpOnly: true,
  secure: isProd, //  true only on https production
  sameSite: isProd ? "none" : "lax", // cross-site cookies need None
  path : "/",
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

app.get("/allHoldings", async (req, res) => {
  // end points for holdings
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  // end points for all positions
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", requireAuth, async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      userId: req.user.id,
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrder.save();
    res.send("order saved");
  } catch (err) {
    res.status(500).json({ success: false, message: "Order failed" });
  }
});

app.get("/allOrders", requireAuth, async (req, res) => {
  try {
    let allOrders = await OrdersModel.find({
      userId: req.user.id, // ✅ only this user's orders
    });
    res.json(allOrders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

app.get("/clear", (req, res) => {
  res.clearCookie("token", cookieOptions);
  res.json({ message: "cookie cleared" });
});

app.get("/check", (req, res) => {
  console.log("Cookies received:", req.cookies);
  res.json({ received: req.cookies });
});

app.post("/logout", (req, res) => {
 res.clearCookie("token", cookieOptions);
  res.json({ success: true, message: "Logged out successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
 
});
