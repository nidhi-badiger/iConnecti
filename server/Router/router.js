const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
require('../DB/conn');
const User = require('../DB/schema');
const College = require('../DB/collegeSchema');

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
            const {companyspocemail , password , confirmPassword , companyname ,companyspocname , companyspocphone} = req.body;
            console.log(password)
            if( !password || !confirmPassword || !companyname || !companyspocemail || !companyspocname || !companyspocphone || confirmPassword != password){
              return res.status(422).json({error : "Please Fill the fields"});
             }
            const userExist = await User.findOne({companyspocemail : companyspocemail});
            
            if(userExist){
                return res.status(422).json({error : "User already Exists"});
            }
            else{
              const user = new User({companyspocemail , password , confirmPassword , companyname ,companyspocname , companyspocphone});
             
              await user.save();
              console.log(password);
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
    const {companyspocemail , password} = req.body;
    console.log(password);
    console.log(companyspocemail);
  
 if(!companyspocemail || !password){
  return res.status(422).json({error : "Please Fill the fields"});
 }
    const userExist = await User.findOne({companyspocemail : companyspocemail});
     
     if(!userExist){
      return res.status(422).json({message : "Invalid Credentials"});
    }else{
      const isMatch = await bcrypt.compare(password , userExist.password);
      if(isMatch){
        return res.status(201).json({message : "User signed in"});
        }else{
        return  res.status(422).json({message : "Invalid Credentials"});
        }
     
     }
  }catch(err){
     console.log(err);
  }
});

router.get('/allUsers' , async (req , res)=>{
try {
  const allUsers = await User.find({});
  res.json(allUsers);

} catch (error) {
 console.log(error); 
}
});

router.post('/deleteUser', async (req , res)=>{
  const {uid} = req.body;
  try {
    await User.deleteOne({_id : uid} );
     res.status(200).json({message: 'deleted'});
  } catch (error) {
    console.log(error);
  }
});

router.post('/collegesignup' , async (req ,res )=>{
 
  try{
    const {username , password , confirmPassword , collegename,collegeaddress,collegespocname ,collegespocemail , collegespocphone,collegeregid,degreeoffered} = req.body;
    console.log(password)
    if(!username || !password || !confirmPassword || !collegename || !collegeaddress ||!collegespocemail || !collegespocname || !collegespocphone|| !collegeregid|| !degreeoffered || confirmPassword != password){
      return res.status(422).json({error : "Please Fill the fields"});
     }
    const userExists = await College.findOne({username : username});
    
    if(userExists){
        return res.status(422).json({error : "User already Exists"});
    }
    else{
      const user = new College({username , password , confirmPassword , collegename,collegeaddress,collegespocname ,collegespocemail , collegespocphone,collegeregid,degreeoffered});
     
      await user.save();
      console.log(password);
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
  );
  router.get('/allColleges' , async (req , res)=>{
    try {
      const allUsers = await College.find({});
      res.json(allUsers);
    
    } catch (error) {
     console.log(error); 
    }
    });

    router.post('/deleteCollege', async (req , res)=>{
      const {uid} = req.body;
      try {
        await College.deleteOne({_id : uid} );
         res.status(200).json({message: 'deleted'});
      } catch (error) {
        console.log(error);
      }
    });

module.exports = router;