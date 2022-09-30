const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const PostData = require("./models/model");
const multer= require("multer")
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const {validationResult } = require('express-validator');
mongoose.connect(
  "mongodb+srv://rvk_mongoDB:Rvk_mongoDB@cluster0.nylobhs.mongodb.net/instaclone?retryWrites=true&w=majority",
  //"mongodb://localhost:27017/instaclone",
  (err) => {
    if (err) console.log(err);
    else console.log("Database Connected");
  }
);

const app = express();
app.use("/Images",express.static("./Images"));
app.use(cors());
app.use(bodyparser.json());
app.use(express.json());

const Storage=multer.diskStorage({
	destination:"./Images",
	filename:(req,file,cb)=>{
			cb(null,file.originalname)
	}
})

const upload=multer({
	storage:Storage
})

app.get("/getPosts", async (req, res) => {
  try {
    const data = await PostData.find();
    res.status(200).json({
      status: "Sucess",
      data,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
});

app.post("/Post",upload.single('image'),  async (req, res) => {
  try {

    const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}
    const data = await PostData.create({
      author: req.body.author,
      location: req.body.location,
      description: req.body.description,
      likes: req.body.likes,
      image: req.file.filename,
    });
    console.log("data created in db");
    res.status(200).json({
      status: "Sucess",
      message: data,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
});

app.listen(PORT, () => {
  console.log("server is up and running");
});



// const fileUpload = require("express-fileupload");

// const PORT = 8080;
// const PORT = process.env.PORT || 8080;



  // "mongodb+srv://rvk_mongoDB:Rvk_mongoDB@cluster0.nylobhs.mongodb.net/instaclone?retryWrites=true&w=majority",
// "mongodb://localhost:27017/instaclone"

// app.use(fileUpload());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://instaclone-app-rvk.netlify.app");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });


    // console.log("reached Post api");
    // const file = req.files.image;
    // file.mv("./Images/" + file.name, (err) => {
    //   if (err) {
    //     res.send(JSON.stringify(err));
    //   } else {
    //     console.log("Image Uploaded Sucessfully");
    //   }
    // });
    // console.log("file moved to /Images folder in server");

    

// app.get("/Images/:name", async (req, res) => {
//   try {
//     console.log("reached /images/name api");
//     // Access-Control-Allow-Origin: "http://instaclone-app-rvk.netlify.app";
//     // Access-Control-Allow-Methods: GET, POST, PUT
//     // Access-Control-Allow-Headers: Content-Type
//     // res.setHeader("Access-Control-Allow-Origin", "*");
//     res.sendFile(__dirname + `/Images/${req.params.name}`);
//   } catch (err) {
//     res.status(500).json({
//       status: "Failed",
//       message: err.message,
//     });
//   }
// });

// app.get("*", (req, res) => {
//   console.log(req.body);
//   res.status(404).json({
//     status: "Failed",
//     message: "You requested nothing",
//   });
// });