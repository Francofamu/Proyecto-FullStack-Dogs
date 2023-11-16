const infoClener = (array) => array.map(el => {
    
    let temperamentArray = [];
      if (el.temperament) {
          temperamentArray = el.temperament.split(", "); // ["Stubborn", "Curious", "Playful", "Adventurous", "Active", "Fun-loving"]
      }
      
      let heightArray = [];
      if (el.height.metric) {
          heightArray = el.height.metric.split(" - "); // ["23", "29"]
      }
  
      let weightArray = [];
      if (el.weight.metric) {
          weightArray = el.weight.metric.split(" - "); // ["3", "6"]
      }
      
      return {
        id: el.id,
        name: el.name,
        height: heightArray,
        weight: weightArray,
        temperaments: temperamentArray,
        life_span: el.life_span,
        image: el.image.url,
        origin: "api"
    }
});

module.exports = infoClener