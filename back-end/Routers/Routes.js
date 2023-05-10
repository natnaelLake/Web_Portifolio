const express = require('express');

const router = express.Router();
const {addData,getData,updateData,deleteData} = require('../Controllers/PageControles')

router.get('/getData',getData);
router.post('/addData',addData);
router.patch('/updateData',updateData);
router.delete('/deleteData',deleteData);

module.exports = router;