const userModel = require("../models/users.model");
const { success, failed } = require("../helpers/response");

const controller = {};
controller.getAll = async (req, res) => {
  try {
    const result = await userModel.all();
    return success(res, 200, result);
  } catch (error) {
    return failed(res, 500, error);
  }
};

controller.store = async (req, res) => {
  try {
    const { body } = req;
    const result = await userModel.store(body);
    return success(res, 200, result);
  } catch (error) {
    return failed(res, 500, error);
  }
};

controller.detail = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userModel.detail(id);
    return success(res, 200, result);
  } catch (error) {
    return res.json(error);
  }
};

controller.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userModel.delete(id);
    return res.json(result);
  } catch (error) {
    return res.json(error);
  }
};

module.exports = controller;
