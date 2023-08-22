require("dotenv").config();
const axios = require("axios");
const { Dog, conn } = require("../db")

const URL = "https://api.thedogapi.com/v1/breeds/";

const { API_KEY } = process.env

const headers = {
    "Content-Type": "application/json",
    "x-api-key": API_KEY,
};

const getDogsByName = async (req, res) => {
    const { value } = req.query

    try {
        let resultados = await Dog.findAll({
            where: {
                name: {
                    [conn.Sequelize.Op.iLike]: `%${value}%`
                }
            }
        });

        if (resultados) {
            const { data } = await axios(URL, { headers })

            const allDogs = data

            resultados = allDogs.filter(dog => dog.name.toLowerCase().includes(value.toLowerCase()));

        }

        const { weight, height, name, id, bred_for, life_span, breed_group, temperament, origin, reference_image_id } = resultados[0]

        let dog = { weight, height, name, bred_for, life_span, breed_group, temperament, origin, reference_image_id, id }

        return name
            ? res.status(200).json(dog)
            : res.status(404).send('Not found')
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getDogsByName