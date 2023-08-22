require("dotenv").config();
const axios = require("axios");

const URL_BASE = "https://api.thedogapi.com/v1/breeds";
const { API_KEY } = process.env

const headers = {
    "Content-Type": "application/json",
    "x-api-key": API_KEY,
};

const getTemperaments = async (req, res) => {

    try {
        const dataApi = await axios(URL_BASE, { headers })
        const temperamentData = dataApi.data
        const allTemperaments = temperamentData.map(temp => temp.temperament)
            .filter(temp => temp);

        const temps = allTemperaments
            .flatMap(item => item.split(', '))
            .filter((property, index, self) => property && self.indexOf(property) === index);

        res.status(200).json(temps)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getTemperaments;