import jobs from "../models/Job";

export const registerJob = async (req, res) => {
    try{
        const {title, company, location} = req.body;
        if(!name || !company || !location){
            return res.json({success: false, message: "Invalid entries"})
        }

        

    } catch(error){

    }
}