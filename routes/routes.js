const express = require('express');
const router = express.Router();
const {putFile} = require('../controllers/files');
const multer = require('multer');
const upload = multer({storage: multer.memoryStorage()});

router.route('/fileanalyse').post(upload.single('upfile'), putFile);

module.exports = router;