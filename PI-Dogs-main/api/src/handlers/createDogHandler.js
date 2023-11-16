const { Dog, Temperament } = require('../db');

const createDogHandler = async (req, res) => {

    const { name, min_height, max_height, min_weight, max_weight, temperaments, min_life_span, max_life_span, image } = req.body;

    try {
        const newDog = await Dog.create({
            name: name,
            height: [min_height, max_height],
            weight: [min_weight, max_weight],
            life_span: `${min_life_span} - ${max_life_span} years`,
            image: image,
            origin: "db"
        });
        
        const associateTemperaments = await Temperament.findAll({
            where: {name: temperaments}
        });
        
        await newDog.setTemperaments(associateTemperaments);
        
            
        return res.status(200).json(newDog);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

module.exports = createDogHandler;