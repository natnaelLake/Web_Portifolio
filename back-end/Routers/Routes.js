const express = require('express');

const router = express.Router();
const {addData,getData,updateData,deleteData} = require('../Controllers/PageControles')
const {upload} = require('../Middleware/MulterMiddleware')
router.get('/getData',getData);
router.post('/addData',upload.single('image'),addData);
router.patch('/updateData/:id',updateData);
router.delete('/deleteData/:id',deleteData);

module.exports = router;