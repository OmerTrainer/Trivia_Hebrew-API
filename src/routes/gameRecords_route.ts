// import * as express from "express";
// import { Users } from "../entities/User.entity";
// const currentDate : Date = new Date();
// const router = express.Router();

// router.post('/api/create_client',async (req,res) => {

//     const first_name = 'ran';
//     const last_name = 'manz';
//     const trophies = 4;
//     const first_sign_in = currentDate;

  
//     const user = Users.create({
//         first_name: first_name,
//         last_name: last_name,
//         trophies:trophies,
//         first_sign_in:first_sign_in
//     })

//     await user.save();
//     return res.json(user);
// })

// export {router as createUserRouter};