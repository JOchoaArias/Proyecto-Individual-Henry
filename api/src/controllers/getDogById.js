require("dotenv").config();
const URL = "https://api.thedogapi.com/v1/breeds/";
const axios = require("axios");

const { API_KEY } = process.env

const headers = {
    "Content-Type": "application/json",
    "x-api-key": API_KEY,
};

const getDogById = async (req, res) => {
    const id = parseInt(req.params.id)

    try {
        const { data } = await axios(`${URL}${id}`, { headers })
        const { weight, height, name, bred_for, life_span, breed_group, temperament, origin, reference_image_id } = data

        let dog = { weight, height, name, bred_for, life_span, breed_group, temperament, origin, reference_image_id }

        return name
            ? res.status(200).json(dog)
            : res.status(404).send('Not found (validate id: 1-264)')
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getDogById