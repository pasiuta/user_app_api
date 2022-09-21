const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },

    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname
        req.filename = name;
        cb(null, name);

        return storage
    },

});
const fileFilter = function (req, file, cb) {
    if (file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {

        cb(null, true);
    } else {
        cb(null, false);
        return cb(new Error('Only .jpg and .jpeg format allowed!'));
    }
}
const resizeImage = async (req, res, next) => {
    if(!req.file){
        return res.status(400).json({
            error: 'you can`t create user without photo',
        });
    }
    const {filename: image} = req.file;
    await sharp(req.file.path)
        .resize(70, 70)
        .jpeg({quality: 90})
        .toFile(
            path.resolve(req.file.destination, 'resized', image)
        )
    fs.unlinkSync(req.file.path)

    next()

}
const limits = {fileSize: 5 * 1024 * 1024}

module.exports = {storage, fileFilter, resizeImage, limits}