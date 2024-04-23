import { triggerAsyncId } from "async_hooks";
import User from "../models/user.model.js";
import { log } from "console";

export const store = async (req, res) =>{
    const {username, content} = req.body;

    try {
        const user = new User({ username, content})
        await user.save()
        const details = user._doc
        res.status(201).json({details})
    } catch (error) {
        console.log(error.message);
    }

}

export const getDetails = async (req, res) =>{
    const {userId} = req.body

    try {
        const details = await User.find({_id:userId})
        console.log(details);
        res.status(201).json({details})
    } catch (error) {
        console.log(error.message);
    }
}