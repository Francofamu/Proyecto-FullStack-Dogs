const { Dog, Temperament } = require('../db');
const { YOUR_API_KEY } = process.env;
const axios = require('axios');
const infoCleaner = require('../utils');

const getAllDogs = async (origin) => {
  try {
    const apiData = (await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${YOUR_API_KEY}`)).data;
    const apiDataClean = await infoCleaner(apiData);

    const dbData = await Dog.findAll({
      include: Temperament,
    });

    const dbDataClean = dbData.map((dog) => ({
      id: dog.id,
      image: dog.image,
      name: dog.name,
      height: dog.height,
      weight: dog.weight,
      life_span: dog.life_span,
      temperaments: dog.Temperaments.map((temperament) => temperament.name),
      origin: "db"
    }));

    const allDogsData = [...apiDataClean, ...dbDataClean];
    
    if (origin == "api") return apiDataClean
    else if (origin == "db") return dbDataClean
    else { return allDogsData}

    // else { return allDogsData}

  } catch (error) {
    console.error('Error al obtener datos de perros:', error);
    throw error;
  }
};

module.exports = {
  getAllDogs,
};
