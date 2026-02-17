import { verify } from "jsonwebtoken";

interface JwtPayload{
    id: number;
}

export const authenticate = (req, res, next) => {   

    try{    
        //first of all make sure the user has provided the authentication token
        //const token= req.headers.token;
        // Get the authorization header value
        const authHeader = req.headers['authorization'];
        // Extract the token part (the second element after splitting by space)
        const token = authHeader && authHeader.split(' ')[1];
        //if there is no token send the authentication error
        if(!token){
            return res.status(401).json({message: 'Unauthorized2'});
        }
        //now we will verify the token
        const result=verify(token, process.env.WEB_TOKEN_SECRET) as JwtPayload;

        req.user=result.id;































































        next();
    }
    catch(err){
        return next(new Error('Unauthorized'));
    }
}