const jwt = require('jsonwebtoken');
import { Request, Response, NextFunction } from "express";
const User = require('../models/user.model');

const auth = async (req:Request, res:Response, next:NextFunction) => {
    try{
        const token = req.cookies?.authToken;
        if(!token){
            return res.status(401).json({message: 'No token, authorization denied'});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.user.id);
        if(!req.user){
            return res.status(401).json({message: 'Invalid token, authorization denied'});
        }
        next();
    }catch(err){
        console.error('Error in auth middleware:', err);
        return res.status(401).json({message:'Token is not valid'});
    }

}
module.exports = auth;