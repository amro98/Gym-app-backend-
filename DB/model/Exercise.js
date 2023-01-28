const mongoose = require('mongoose');
const exerciseSchema = new mongoose.Schema({

    bodyPart: { type: String, required: true },
    equipment: { type: String, required: true },
    gifUrl: { type: String, required: true },
    id: { type: String, required: true },
    name:{ type: String, required: true },
    target:{ type: String, required: true },
    

}, {
    timestamps: true
})

exerciseSchema.pre("findOneAndUpdate", async function () {
    console.log(this.model);
    console.log(this.getQuery());
    const hookData = await this.model.findOne(this.getQuery()).select("__v");
    console.log(hookData);
    this.set({ __v: hookData.__v + 1 })
})


const exerciseModel  = mongoose.model("Exercise" , exerciseSchema);
module.exports = exerciseModel