const express = require('express');
const router = express.Router();
const controller = require('../api/controllers/members');

router.get('/', controller.getAll);
router.post('/', controller.create);
router.get('/:id', controller.getById);
router.put('/:id', controller.updateById);
router.delete('/:id', controller.deleteById);

module.exports = router;