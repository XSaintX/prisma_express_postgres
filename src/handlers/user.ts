import { validationResult } from "express-validator";
import prisma from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
        //return res.json({body: req.body});
        //encrypt the user password

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const user = await prisma.user.create({
            data:{
                email: req.body.email,
                password: hash
            }
        });

        res.status(201).json({message: 'Successfull'});
};

export const login = async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        //find the user on the based on email
        const user = await prisma.user.findUnique({
            where:{
                email: req.body.email
            }
        });
        //if there is no user then send the error with 401 status code
        if(!user){
            return res.status(401).json({message: 'You have no authorization'});
        }

        //if there is a user then compare the pass
        const matched = bcrypt.compareSync(req.body.password, user.password);

        //if pass matched then
        if(matched){
            //create the JSON Web token
            const token = jwt.sign({id: user.id}
                , process.env.WEB_TOKEN_SECRET, {expiresIn: '2d'}
            );
            //send token back to the client
            return res.status(200).json({token});
            //return res.send('pass matched');
        }
        return res.status(401).json({message: 'Unath'});
};

/**
 * Only auth users can see this route or access this route
 */
export const privateRoute = async(req, res) => {
    //private route implementation
    return res.json({message: 'You can read this only if you are logged'});
}