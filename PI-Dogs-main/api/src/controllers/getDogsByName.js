const { Dog, Temperament } = require('../db');
const { getAllDogs } = require('./getAllDogs');


const getDogByName = async (name) => {

    const dogs = await getAllDogs()

    const dogsFiltered = dogs.filter(dog => dog.name.toLowerCase() == name.toLowerCase())

    const dogsDb = await Dog.findAll({
        where: { name: name },
        include: Temperament,
      });

      const formattedDogs = dogsDb.map((dog) => ({
        id: dog.id,
        image: dog.image,
        name: dog.name,
        height: dog.height,
        weight: dog.weight,
        life_span: dog.life_span,
        temperaments: dog.Temperaments.map((temperament) => temperament.name)
    }))

    if(dogsFiltered.length > 0 || formattedDogs.length > 0) return [...dogsFiltered, ...formattedDogs]
    else throw new Error("No se ha encontrado una raza de perro con ese nombre")
  }

module.exports = getDogByName;


