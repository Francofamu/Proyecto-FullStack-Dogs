const getDogById = require('../controllers/getDogById');


const getDogByIdHandler = async(req,res) => {
  const { idRaza } = req.params;
  const source = isNaN(idRaza) ? "bdd" : "api"

  try {
    const dogDetailById = await getDogById(idRaza, source)

    res.status(200).json(dogDetailById);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error:error.message });
  }
  
};


module.exports = getDogByIdHandler;