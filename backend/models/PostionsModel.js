const {model} =require("mongoose");

const {positionsSchema} =require("../schemas/PositionsSchema");

const PostionsModel=new model("position",positionsSchema);

module.exports={PostionsModel};