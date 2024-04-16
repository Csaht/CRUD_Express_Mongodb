//https://www.youtube.com/watch?v=1LGOeclylcY&list=PLolI8AY2AS9ZXyuY2WQrpKCSPQbHmj2vq&index=5

import express, { Request, Response } from "express";
import { connections } from "../../src/configs/dbConnection";
import UserModel from "../models/userModel";
import {
  createUser,
  findUser,
  findUpdate,
  findDelete,
} from "../services/user.service";

//Create User
const createUserDetail = async (req: any, resp: any) => {
  //create User
  const mydata = await createUser({
    name: "Mohd Ahtesham",
    dept: "Software Development",
  });
  resp.json({
    userMessage: "Hi I Am First Tsak  From Controllers",
    data: "data",
    myData: mydata,
  });
};

// Get Users
const getUsers = async (req: any, resp: any) => {
  //Read Data From the Collection
  let mydata = await UserModel.find();
  resp.json({
    userMessage: "Hi I Am First Tsak  From Controllers",
    data: "data",
    myData: mydata,
  });
};

//Delete User By Name
const deleteUser = async (req: any, resp: any) => {
  //Delete User
  const mydata = await findDelete({ name: "Mohd Ahtesham" });
  resp.json({
    userMessage: "Hi I Am First Tsak  From Controllers",
    data: "data",
    myData: mydata,
  });
};

const updateUser = async (req: any, resp: any) => {
  const mydata = await findUpdate(
    { name: "Mohd Ahtesham" },
    { dept: "BE Development" },
    { new: true }
  );
  resp.json({
    userMessage: "Hi I Am First Tsak  From Controllers",
    data: "data",
    myData: mydata,
  });
};


module.exports = {
  createUserDetail,
  getUsers,
  deleteUser,
  updateUser,

   //getUserById,
  // updateUserById,
  // deletUserById,
};
