const router = require("express").Router();
const userControllers = require("../controllers/userControllers");

router.post("/", userControllers.createUser);

// get route

router.get("/",userControllers.getallUsers);

// Get User by id

router.get("/:id",userControllers.getById);

// Update User

router.put("/:id",userControllers.updateUser);

/// Delete a Resource

router.delete("/:id",userControllers.deleteUser);


module.exports = router