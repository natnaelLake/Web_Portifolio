const mongoose = require("mongoose");
const Profile = require("../Models/Store");
const User = require('../Models/User')
const handleErrors = (err) => {
  const errors = {
    image: "",
    description: "",
    title: "",
    link: "",
    usedTech: "",
    email:'',
    password:'',
  };
  if (err.message === "Email Is Not Found.") {
    errors.email = "Email Is Not Found.";
  }
  if (err.message === "Enter Email") {
    errors.email = "Email Is Required";
  }
  if (err.message === "Enter Password") {
    errors.password = "Password Is Required";
  }
  if (err.message === "Incorrect Password") {
    errors.password = "Incorrect Password";
  }
  if (err.code === 11000) {
    errors.error = "File Is Already Exists";
    return errors;
  }
  if (err.message.includes("Profile validation failed")) {
    Object.values(err.errors).forEach(({ porperties }) => {
      errors[porperties.path] = porperties.message;
    });
  }
  return errors;
};
const Login = async (req,res)=>{
  const {email,password} = req.body
  console.log(req.body)
  try {
    const userData = await User.login(email,password)
    console.log('userData',userData)
    res.status(200).send(userData)
  } catch (error) {
    const errors = handleErrors(error);
    console.log(errors)
    res.status(400).send(errors);
  }
}
const SignUp = async (req,res)=>{
  console.log('body is',req.body)
  const {
    email,
    password,
  } = req.body;
 
  try {
    const user = await User.create({
      email,
      password,
    });
    console.log(user)
    res.status(200).send(user);
  } catch (error) {
    console.log(error)
    const errors = handleErrors(error);
    res.status(400).send(errors);
  }
}
const addData = async (req, res) => {
  // const image = req.file.filename;
  // console.log(image);
  // console.log({...req.body})
  // if (!image) {
  //   return res.status(400).json("Insert Image File.");
  // }
  console.log(req.body)
  try {
    const Profile = await Profile.create({
      // image,
      ...req.body,
    });
    res.status(200).send(Profile);
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).send(errors);
  }
};
const getData = async (req, res) => {
  try {
    const Profile = await Profile.find({});
    res.status(200).send(Profile);
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).send(errors);
  }
};
const updateData = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedData = await Profile.findByIdAndUpdate(
      { _id: id },
      {
        ...req.body,
      },
      { new: true }
    );
    res.status(200).send(updatedData);
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).send(errors);
  }
};
const deleteData = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedData = await Profile.findByIdAndUpdate(
      { _id: id },
      {
        ...req.body,
      },
      { new: true }
    );
    res.status(200).send(deletedData);
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).send(errors);
  }
};

module.exports = { addData, getData, updateData, deleteData,Login,SignUp };
