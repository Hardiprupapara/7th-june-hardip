const multer = require('multer');
const path = require('path'); // Import the 'path' module

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("file:", file)
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        console.log("file:", file)
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const fileTypes = /jpeg|jpg|png|gif|svg/;

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype);

        if (extname && mimetype) {
            cb(null, true);
        } else {
            cb(new Error('Only images of type jpeg, jpg, png, gif, and svg are allowed.'));
        }
    }
});


module.exports = { upload };