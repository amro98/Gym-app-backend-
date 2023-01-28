const exerciseModel = require("../../../DB/model/Exercise")

const addExercise = async (req,res) => {
    try {
        const {bodyPart,equipment,gifUrl,id,name,target} = req.body
        const newExercise = new exerciseModel({bodyPart,equipment,gifUrl,id,name,target});
        const savedExercise = await newExercise.save();
        res.status(200).json({message:"Done",savedExercise});
    } catch (error) {
        res.json({ message: "catch error" , error})
    }
}

const allExercises = async (req,res) => {
    try {
        const exercises = await exerciseModel.find({})
        res.status(200).json({message:"Done",exercises});

    } catch (error) {
        res.json({ message: "catch error" , error})
    }
}

const bodyPartsExercises = async (req,res) => {
    try {
        const {bodypart} = req.params;
        const exercises = await exerciseModel.find({bodyPart:bodypart})
        if (!exercises) {
        res.json({ message: "invalide body part"})     
        } else {
        res.status(200).json({message:"Done",exercises});
        }
    } catch (error) {
        res.json({ message: "catch error" , error})
    }
}


module.exports = {
    addExercise,
    allExercises,
    bodyPartsExercises
}