const multer = require("multer");
const upload = multer({ dest: "./public/images" }).single("file");

const createProduct = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).send({ message: "Error occurred while uploading the file", error: true });
    }

    if (req.file) {
      res.send({ message: "File uploaded successfully", filename: req.file.filename });
    } else {
      res.status(400).send({ message: "No file uploaded", error: true });
    }
  });
};

module.exports = {
  createProduct,
};
