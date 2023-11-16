const { Dog, Temperament } = require('../db');
const axios = require('axios');
const infoClener = require('../utils');
const { YOUR_API_KEY } = process.env


const getDogById = async (idRaza, source) => {
  let dogData;

  if (source === "api") {
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds/${idRaza}?api_key=${YOUR_API_KEY}`);
    const responseData = response.data;

    dogData = {
      id: responseData.id,
      name: responseData.name,
      height: responseData.height.metric,
      weight: responseData.weight.metric,
      temperaments: responseData.temperament,
      life_span: responseData.life_span,
      image: `https://cdn2.thedogapi.com/images/${responseData.reference_image_id}.jpg`,
    };

    return dogData

  } else {
    const dogDb = await Dog.findByPk(idRaza, {
      include: Temperament,
    });

    const formattedDogs = dogDb ? {
      id: dogDb.id,
      image: dogDb.image,
      name: dogDb.name,
      height: (dogDb.height).join(" - "),
      weight: (dogDb.weight).join(" - "),
      life_span: dogDb.life_span,
      temperaments: (dogDb.Temperaments.map((temperament) => temperament.name)).join(", ")
    } : [];

    return formattedDogs;
  }

};

module.exports = getDogById