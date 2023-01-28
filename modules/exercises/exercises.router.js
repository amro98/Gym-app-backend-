const router = require('express').Router();
const controller = require('./controller/exercises')


router.post("/addexercises",controller.addExercise)
router.get("/allexercises",controller.allExercises)
router.get("/:bodypart",controller.bodyPartsExercises)



module.exports = router

