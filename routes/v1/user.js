const Router = require('express');
const router = new Router();
const userController = require('../../controller/User');
const authController = require('../../controller/Auth');
const positionController = require('../../controller/Position');
const verifyToken = require('../../middleware/checkToken');
const uploadFile = require('../../middleware/imageProccesor')
const multer = require("multer")
const sharp = require("sharp");
const {resizeImage} = require("../../middleware/imageProccesor");
sharp.cache(false);
const upload = multer({
    storage: uploadFile.storage,
    limits: uploadFile.limits,
    fileFilter: uploadFile.fileFilter,
})
router.post('/v1/user', verifyToken, upload.single('image'), resizeImage, userController.createUser)
router.get('/v1/user/:id', userController.getUser);
router.get('/v1/users/', userController.getUsers);
router.get('/v1/positions/', positionController.getUserPositions);
router.get('/v1/token/', authController.getToken);


module.exports = router;