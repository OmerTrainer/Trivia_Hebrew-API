import * as express from "express";
import { User } from "../entities/User";

const router = express.Router();

router.post('/api/create_client',async (req,res) => {

    // const first_name = req.params.firstname;
    // const last_name = req.params.lastname;
    // const trophies = req.params.trophies;
    // const first_sign_in = req.params.first_sign_in;

  
    // const user = User.create({
    //     first_name: first_name,
    //     last_name: last_name,
    //     trophies,
    //     first_sign_in
    // })

    // await user.save();
    // return res.json(user);
})

export {router as createUserRouter};