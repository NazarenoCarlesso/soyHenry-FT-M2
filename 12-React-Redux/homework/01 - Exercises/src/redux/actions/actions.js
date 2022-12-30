// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import { ADD_PRODUCT, DELETE_PRODUCT, GET_STORE_NAME } from './types'

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: id
    }
}

const getStoreName = () => {
    return axios.get("http://localhost:3001/store").then((response) => {
        console.log(response)
        return {
            type: GET_STORE_NAME,
            payload: response
        }
    })
}

export { addProduct, deleteProduct, getStoreName }