const { Dog, Temperament } = require('../db')
const { YOUR_API_KEY } = process.env;
const axios = require('axios');

const getAllTemperaments = async () => {
    
    const apiData = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`);
    const breeds = apiData.data;
  
    // Recopila todos los temperamentos de las razas
    const allTemperaments = new Set();
    breeds.forEach((breed) => {
      if (breed.temperament) {
        const temperamentArray = breed.temperament.split(', ');
        temperamentArray.forEach((temperament) => {
          allTemperaments.add(temperament);
        });
      }
    });
  
    // Guarda los temperamentos en la base de datos si aún no existen
    const savedTemperaments = await Promise.all(
      Array.from(allTemperaments).map(async (temperament) => {
        return Temperament.findOrCreate({ where: { name: temperament } });
      })
    );
  
    // Devuelve la lista de temperamentos guardados en la base de datos
    const temperamentsList = savedTemperaments.map((result) => result[0].name);
    return temperamentsList;
  };
  
  module.exports = getAllTemperaments
    