const mongoose = require("mongoose");
const User = require("../Models/Store");

const handleErrors = (err) => {
  const errors = {
    image: "",
    description: "",
    title: "",
    link: "",
    usedTech: "",
  };
  if (err.code === 11000) {
    errors.error = "File Is Already Exists";
    return errors;
  }
  if (err.message.includes("Profile validation failed")) {
    Object.values(err.errors).forEach(({ porperties }) => {
      errors[porperties.path] = porperties.message;
    });
  }
};
const addData = async (req, res) => {
  // const image = req.file.filename;
  // console.log(image);
  // console.log({...req.body})
  // if (!image) {
  //   return res.status(400).json("Insert Image File.");
  // }
  console.log(req.body)
  try {
    const user = await User.create({
      // image,
      ...req.body,
    });
    res.status(200).send(user);
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).send(errors);
  }
};
const getData = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).send(user);
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).send(errors);
  }
};
const updateData = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedData = await User.findByIdAndUpdate(
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
    const deletedData = await User.findByIdAndUpdate(
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

module.exports = { addData, getData, updateData, deleteData };
