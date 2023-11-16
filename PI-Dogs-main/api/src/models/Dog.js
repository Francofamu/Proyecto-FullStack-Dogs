const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define(
    'Dog', 
    {
      id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      },

      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      height: {
        type: DataTypes.ARRAY(DataTypes.STRING),//al enviar los datos por medio del body se hace con un array
        allowNull: false
      },

      weight: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
      },

      life_span: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      origin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {timestamps: false}
  );   
}

