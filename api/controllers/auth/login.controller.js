import jwt from 'jsonwebtoken';
import User from '../../model/User.js'
import bcrypt from  'bcrypt'
import dotenv from 'dotenv';

dotenv.config()

const loginUser = async (req, res) => {
    try {
        let { input, password } =req.body;

        if ( !input || !password )
        return res.status(400).json({
            success: false,
            message: "All fields are required",
            data: null,
        });

        let userExists = await User.findOne({
            $or: [{ username: input }, { email: input }],
        });

         if (!userExists)
          return res.status(404).json({
          success: false,
          message: 'Invalid login credentials',
          data: null,
      });


      let token = jwt.sign({user: userExists}, process.env.JWT_SECRET, {expiresIn: "365d"});

      return res.status(200).json({
        success: true,
        token: token,
        message: "Login Successful",
        data: userExists
      });
      
    }catch(err){
        console.log(err);
    }

}

export default loginUser;