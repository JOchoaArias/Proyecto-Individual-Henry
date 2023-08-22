const { Dog } = require("../db")

const postDog = async (req, res) => {
    const { weight, height, name, life_span, image } = req.body

    if (![weight, height, name, life_span, image].every(Boolean)) return res.status(401).json({ error: "Faltan Datos" })

    try {
        const newDog = await Dog.findOrCreate({
            where:
                { weight, height, name, life_span, image }
        });

        res.status(200).json(newDog)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = postDog