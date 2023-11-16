const { getAllDogs } = require("../controllers/getAllDogs");

const getAllDogsHandler = async(req, res) =>{
  const origin = req.query.origin
  try {
    const dogs = await getAllDogs(origin)

    res.status(200).json(dogs);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.menssage });
  }
};


module.exports = getAllDogsHandler;