const knex = require("../config/connection");
const axios = require("axios");

exports.getUser = async (req, res) => {
  try {
    let users = await knex.select("*").from("member");
    return res.status(200).json({ status: "true", users });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.axiosUser = async (req, res) => {
  try {
    let result = await axios.get("http://localhost:5000/user");
    if (result.data.length === 0) {
      return res.json({ message: "users not found" });
    }
    res.status(200).json({ result: result.data });
  } catch (error) {
    res.status(500).json(error);
  }
};
