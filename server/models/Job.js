import mongoose from "mongoose";
const jobSchema = new mongoose.Schema({
    title : {type: String, required: true},
    company : {type: String, required: true},
    location : {type: String,},
    jobType : {type: String},
    minSalary : {type: Integer},
    maxSalary : {type: Integer},
    deadline : {type: date},
    description : {type: String},

},{timestamps: true})

const jobs = mongoose.model('Jobs', jobSchema);

export default jobs;