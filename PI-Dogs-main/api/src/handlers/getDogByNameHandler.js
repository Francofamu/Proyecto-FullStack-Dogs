const getDogByName = require("../controllers/getDogsByName");



const getDogByNameHandler = async(req,res) => {
    const name = req.query.name;
  
    try {
      if(name) {
          const dogDetailByName = await getDogByName(name);
          res.status(200).json(dogDetailByName);
      } else { 
        res.status(400).json("Se debe ingresar una raza de Perro");
      }
  
    } catch (error) {
      console.error(error);
      res.status(400).json({ error:error.message });
    }
    
  };
  
  
  module.exports = getDogByNameHandler;