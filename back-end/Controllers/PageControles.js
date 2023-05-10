const mongoose = require("mongoose");
const User = require("../Models/Store");

const addData = async (req, res) => {
  const file = req.file.image;
  if (!file) {
    return res.status(400).json("Insert Image File.");
  }
  try {
    const user = await User.create({
      image: file,
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