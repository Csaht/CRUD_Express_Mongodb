
import express,{Request,Response} from 'express'
const router = express.Router();
const userInfo = require( '../controllers/user.controllers')


// //Create Student Records
 router.post("/students/createUser",userInfo.createUserDetail);

// //Get All Records Record
router.get("/students/getAllUsers",userInfo.getUsers);

// //Get Student By Id
// router.get("/students/getUserById/:userId", getStudents.getUserById);

// //Update the User By Id
 router.put("/students/updateUserById", userInfo.updateUser);


 //Delete User  By  Name
 router.delete("/students/deletUserById", userInfo.deleteUser);



export {
    router 
}
