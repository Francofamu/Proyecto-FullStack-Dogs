const getAllTemperaments = require("../controllers/getAllTemperaments");

const getAllTemperamentsHandler = async(req,res) =>{
    try {
        const temperaments = await getAllTemperaments();

        res.json(temperaments);
        
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los temperamentos de los perros.' });
      }
}

module.exports = getAllTemperamentsHandler;