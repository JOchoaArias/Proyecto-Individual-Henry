require("dotenv").config();
const axios = require("axios");

const URL_BASE = "https://api.thedogapi.com/v1/breeds";
const { API_KEY } = process.env

const headers = {
    "Content-Type": "application/json",
    "x-api-key": API_KEY,
};

const getDogs = async (req, res) => {
    try {
        const allTheDogs = await axios(URL_BASE, { headers });
        const showDogs = allTheDogs.data;
        res.status(200).json(showDogs);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getDogs