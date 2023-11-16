import { 
    GET_ALL_DOGS,
    DOG_DETAIL,
    CLEAN_DETAIL,
    GET_DOG_BY_NAME,
    CLEAN_FILTERED_DOGS,
    GET_DOGS_BY_ORIGIN,
    GET_ALL_TEMPERAMENTS,
    FILTERED_TEMPERAMENTS,
    ORDER_BY,
} from "./action-types"
import axios from "axios"


export const getAllDogs = () => {
    return async function(dispatch) {
        const dogs = await axios("http://localhost:3001/dogs")
        return dispatch({
            type: GET_ALL_DOGS,
            payload: dogs.data
        })
    }
}

export const getAllTemperaments = () => {
    return async function(dispatch) {
        const temperaments = await axios("http://localhost:3001/temperaments")
        return dispatch({
            type: GET_ALL_TEMPERAMENTS,
            payload: temperaments.data
        })
    }
}

export const dogDetail = (id) => {
    return async function(dispatch) {
        const dogId = await axios(`http://localhost:3001/dogs/${id}`)
        return dispatch({
            type: DOG_DETAIL,
            payload: dogId.data
        }) 
    }
}

export function cleanDetail(){
    return function(dispatch){
        dispatch({type:CLEAN_DETAIL})
    }
}

export const getDogByName = (name) => {
    return function(dispatch) {
        return dispatch({
            type: GET_DOG_BY_NAME,
            payload: name
        }) 
    }
}

export function cleanFilteredDogs(){
    return function(dispatch){
      dispatch({type:CLEAN_FILTERED_DOGS})
    }
}

export const getDogsByOrigin = (origin) => {
    return function(dispatch) {
        return dispatch({
            type: GET_DOGS_BY_ORIGIN,
            payload: origin
        })
    }
}

export const filterDogsByTemperament = (selectedTemperament) => {
    return function(dispatch) {
        return dispatch({
            type: FILTERED_TEMPERAMENTS,
            payload: selectedTemperament
        })
    }
}

export function orderBy(a){
    return function(dispatch){
      dispatch({type:ORDER_BY, payload:a})
    }
}

export const createNewDog = (newDogData) => {
    return async function(dispatch) {
        
        console.log("action")
        console.log(newDogData)
        const newDog = await axios.post("http://localhost:3001/dogs",newDogData)
        console.log(newDog)
        return dispatch({
            type: GET_ALL_TEMPERAMENTS,
            payload: newDog
        })
    }
}