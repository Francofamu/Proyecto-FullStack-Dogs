import { 
    GET_ALL_DOGS, 
    GET_ALL_TEMPERAMENTS,
    DOG_DETAIL, 
    CLEAN_DETAIL,
    GET_DOG_BY_NAME,
    CLEAN_FILTERED_DOGS,
    GET_DOGS_BY_ORIGIN,
    FILTERED_TEMPERAMENTS,
    ORDER_BY,
    CREATE_NEW_DOG,
  } from "./action-types"

const initialState = {
    allDogs: [],
    temperaments: [],
    filteredDogs: [],
    dogDetail: [],
  }
  
  const reducer = (state = initialState, action) => {
    
    const dogsToFilter = state.filteredDogs.length > 0 ? [...state.filteredDogs] : [...state.allDogs];
    
    switch (action.type) {
      
    case GET_ALL_DOGS:
      return {
        ...state,
        allDogs: action.payload
      }
      
      case GET_ALL_TEMPERAMENTS: {
        return {
          ...state,
          temperaments: action.payload
        }
      }

      case DOG_DETAIL:
        return {
          ...state,
          dogDetail: action.payload
        }
  
      case CLEAN_DETAIL:
        return {
          ...state,
          dogDetail: []
        }

      case GET_DOG_BY_NAME: {
        const filteredByName = dogsToFilter.filter((dog) => dog.name.toLowerCase() === action.payload.toLowerCase());
        return {
          ...state,
          filteredDogs: filteredByName,
        };
      }
        
      case GET_DOGS_BY_ORIGIN: {
        const filteredByOrigin = dogsToFilter.filter((dog) => dog.origin.toLowerCase() === action.payload.toLowerCase());
        return {
          ...state,
          filteredDogs: filteredByOrigin,
        };
      }
  
      case FILTERED_TEMPERAMENTS: {
        const filteredByTemperament = dogsToFilter.filter((dog) => dog.temperaments.includes(action.payload));
        return {
          ...state,
          filteredDogs: filteredByTemperament,
        };
      }
  
      case ORDER_BY: {
        let sortedDogs = [...dogsToFilter];
        if (action.payload === "A-Z") {
          sortedDogs = sortedDogs.sort((prev, next) => prev.name.localeCompare(next.name));
        }
        if (action.payload === "Z-A") {
          sortedDogs = sortedDogs.sort((prev, next) => next.name.localeCompare(prev.name));
        }
        if (action.payload === "asc") {
          sortedDogs = sortedDogs.sort((prev, next) => prev.weight[0] - next.weight[0]);
        }
        if (action.payload === "desc") {
          sortedDogs = sortedDogs.sort((prev, next) => next.weight[0] - prev.weight[0]);
        }
        return {
          ...state,
          filteredDogs: sortedDogs,
        };
      }
          
      default:
        return state; 
    }
  };
  
    
    export default reducer;
    
        // case ADD_FAV:
        //     return {
        //         ...state,
        //         myFavorites: [...state.myFavorites, action.payload],
        //         allFavorites: [...state.allFavorites, action.payload],
        //     }

        // case REMOVE_FAV:
        //     return {
        //         ...state,
        //         myFavorites: state.myFavorites.filter((character) => {
        //             return character.id != action.payload
        //         })
        //     }

        // case FILTER:
        //     const filterByGender = [...state.allFavorites].filter((favorite) => favorite.gender === action.payload);

        //     return {
        //         ...state,
        //         myFavorites: filterByGender
        //     }

        // case ORDER:
        //     const favoritesOrdered = action.payload === 'Ascendente'
        //     ? [...state.myFavorites].sort((a, b) => a.id - b.id)
        //     : [...state.myFavorites].sort((a, b) => b.id - a.id);

        //     return {
        //         ...state,
        //         myFavorites: favoritesOrdered
        //     }
