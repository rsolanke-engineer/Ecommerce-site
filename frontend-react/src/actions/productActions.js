import { PRODUCT_LIST_SUCCESS, PRODUCT_LIST_REQUEST, PRODUCT_LIST_FAIL, PRODUCT_DETAIL_SUCCESS, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_FAIL } from '../constants/productConstants.js'
import { useParams } from 'react-router-dom'

import axios from 'axios'


export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })

        const {data} = await axios.get('api/products')

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response

        })
    }
}

export const detailProduct = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAIL_REQUEST })
        const { id } = useParams();
        const {data} = await axios.get(`/api/product/${Number(id)}`)

        dispatch({
            type: PRODUCT_DETAIL_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAIL_FAIL,
            payload: error.response

        })
    }
}