
var express = require('express');
var router = express.Router();
const Controller  = require ("../controller/usercontroller")

router.post('/',Controller.create)
router.get('/',Controller.list)
router.put("/:id",Controller.edit)
router.delete("/:id",Controller.delete)

module.exports =router