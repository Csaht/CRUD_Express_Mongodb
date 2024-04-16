//https://www.youtube.com/watch?v=1LGOeclylcY&list=PLolI8AY2AS9ZXyuY2WQrpKCSPQbHmj2vq&index=5 
import { FilterQuery, UpdateQuery, QueryOptions } from "mongoose";
//import { DocumentDefinitation } from "mongoose"
import User, { UserDocument } from "../models/userModel";


//Create The UIser
export const createUser = (input:any) => {
    // (input:DocumentDefinitation<UserDocument>)
  return User.create(input);
};

//Find The User
export const findUser = (
  query: FilterQuery<UserDocument>,
  options: QueryOptions = { lean: true }
) => {
  return User.find(query, {}, options);
};

//Find And Update The User
export const findUpdate = (
  query: FilterQuery<UserDocument>,
  update: UpdateQuery<UserDocument>,
  options: QueryOptions
) => {
  return User.findOneAndUpdate(query, update, options);
};


//Find And Delete The user

export const findDelete = (query: FilterQuery<UserDocument>) => {
  return User.deleteOne(query);
};

