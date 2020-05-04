const express = require("express");
const router = express.Router();
const controller = require("../api/controllers/users");

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.put("/:id", controller.updateById);
router.delete("/:id", controller.deleteById);

module.exports = router;
