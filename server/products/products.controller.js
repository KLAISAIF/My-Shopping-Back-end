const {
  getProductByIdCategoryService,
  getAllProductService,
} = require("./products.service");

const addUserController = async (req, res) => {
  try {
    const {
      userName,
      password,
      email,
      firstName,
      lastName,
      age
    } = req.body;
    const result = await addUserService({
      userName,
      password,
      email,
      firstName,
      lastName,
      age
    });
    if (result === null) {
      res.status(200).json({ message: "No user were inserted.", ok: false });
    } else {
      res
        .status(200)
        .json({ message: "user inserted successfully.", ok: true });
    }
  } catch (error) {
    return res.json({ error: error?.message ? error.message : error });
  }
};
const deleteUserByIdController = async (req, res) => {
  try {
    const { id } = req.query;
    const deleteResult = await deleteUserByIdService(id);
    if (!deleteResult) {
      res.status(200).json({ message: "User not found.", ok: false });
    } else {
      res.status(200).json({ message: "User deleted successfully.", ok: true });
    }
  } catch (error) {
    res.status(500).json({ error: error?.message ? error.message : error });
  }
};

const updateUserController = async (req, res) => {
  try {
    const { id } = req.query;
    const { fieldsToUpdate } = req.body;
    const result = await updateUserService(id, fieldsToUpdate);
    if (!result) {
      res.status(200).json({ message: "No user were updated.", ok: false });
    } else {
      res.status(200).json({ message: "user updated successfully.", ok: true });
    }
  } catch (error) {
    return res.json({ error: error?.message ? error.message : error });
  }
};
const getProductByIdCategoryController = async (req, res) => {
  try {
    const { id } = req.query;
    const data = await  getProductByIdCategoryService(id);
    if (data === null) {
      res.status(200).json({ message: "Product not found.", ok: false });
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(500).json({ error: error?.message ? error.message : error });
  }
};

const getAllProductController = async (req, res) => {
  try {
    const response = await getAllProductService();
    if (!response) {
      res.status(200).json({ message: "not Products were found.", ok: false });
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ error: error?.message ? error.message : error });
  }
};

module.exports = {
  getProductByIdCategoryController,
  getAllProductController
};
