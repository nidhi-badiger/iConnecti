const express = require('express');
const router = express.Router();

require('../DB/conn');
const User = require('../DB/schema');

router.get('/' , (req ,res)=>{
    res.send("Hello router");
})

//using promises
// router.post('/register' , (req ,res )=>{

//     const {username , password , confirmPassword , companyname ,companyspocname ,companyspocemail , companyspocphone} = req.body;
//            console.log(confirmPassword);
//            console.log(companyspocphone);
    
//            User.findOne({companyspocemail : companyspocemail})
//            .then((userExist) =>{
//             if(userExist){
//                 return res.status(422).json({error : "Email already Exists"});
//             }
//            const user = new User({username , password , confirmPassword , companyname ,companyspocname ,companyspocemail , companyspocphone});

//            user.save()
//            .then(()=>{
//             res.status(201).json({message : "user registered successfully"});
//            }).catch((err)=>{
//             res.status(500).json({error : "Failed to register"})
//            })
//            }).catch(err => {console.log(err);});
//     //  console.log(req.body);
    
// });
router.post('/signup' , async (req ,res )=>{

    
    
          
 
          try{
            const {username , password , confirmPassword , companyname ,companyspocname ,companyspocemail , companyspocphone} = req.body;
            console.log(password)
            if(!username || !password || !confirmPassword || !companyname || !companyspocemail || !companyspocname || !companyspocphone || confirmPassword != password){
              return res.status(422).json({error : "Please Fill the fields"});
             }
            const userExist = await User.findOne({username : username});
            console.log(userExist);
            if(userExist){
                return res.status(422).json({error : "User already Exists"});
            }
            else{
              const user = new User({username , password , confirmPassword , companyname ,companyspocname ,companyspocemail , companyspocphone});
             
              await user.save();
              res.status(201).json({message : "user registered successfully"});

            }
           
            // if(userRegister){
            //     res.status(201).json({message : "user registered successfully"});
            // }else{
            //     res.status(500).json({error : "Failed to register"});
            // }
          }catch (err){
            console.log(err);}
          }

    //        .then((userExist) =>{
    //         if(userExist){
    //             return res.status(422).json({error : "Email already Exists"});
    //         }
    //        const user = new User({username , password , confirmPassword , companyname ,companyspocname ,companyspocemail , companyspocphone});

    //        user.save()
    //        .then(()=>{
    //         res.status(201).json({message : "user registered successfully"});
    //        }).catch((err)=>{
    //         res.status(500).json({error : "Failed to register"})
    //        })
    //        }).catch(err => {console.log(err);});
    // console.log(req.body);
    
);

router.post('/signin' , async (req ,res) =>{
  
  try{
    const {username , password} = req.body;
    console.log(password);
  
 if(!username || !password){
  return res.status(422).json({error : "Please Fill the fields"});
 }
    const userExist = await User.findOne({username : username});
     
     if(!userExist){
      return res.status(422).json({message : "Invalid Credentials"});
    }else{
      if(password === userExist.password){
        return res.status(201).json({message : "User signed in"});
        }else{
        return  res.status(422).json({message : "Invalid Credentials"});
        }
     
     }
  }catch(err){
     console.log(err);
  }
});

module.exports = router;