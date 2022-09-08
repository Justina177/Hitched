import User from '../../model/User.js';
import bcrypt from 'bcrypt'

const regUser = async (req, res) => {
    let { username, email, password } = req.body;
    try {
        let { username, email, password }= req.body;

    if(!username || !email || !password) {
        return res.json({
            success: false,
            message: "All fields are required!!!",
            data: null
        });
    }
     let userExists = await User.findOne({
         $or: [{username: username},{email: email}]
     });
      if (userExists) return res.status(400).json({
          success: false,
          message: 'User already exists',
          data: null,
      })

      const hashedpassword = await bcrypt.hashSync(password, 12);
    //   console.log(hashePassword)
    let newUser = new User({
        usernmae: username,
        email: email,
        password: hashedpassword
    });
    
     await newUser.save();
     return res.status(201).json({
         success: true,
         message: "User created successfully!",
         data: newUser
     });

    }catch(err){
        console.log(err)
    }
    
}

export default regUser;