//import axios from "axios";

import client from './'

//https://github.com/brandiqa/redux-crud-example/blob/master/src/actions/contact-actions.js#L22

const url = '/api-catalogo/ventas/'

export const VENTAS_LIST_REQUEST = "VENTAS_LIST_REQUEST"
export const VENTAS_LIST_SUCCESS = 'VENTAS_LIST_SUCCESS'
export const VENTAS_LIST_FAILURE = 'VENTAS_LIST_FAILURE'

export const ventasList = () => ({
    type: VENTAS_LIST_REQUEST,
})

export const ventasListSuccess = (list) => ({
    type: VENTAS_LIST_SUCCESS,
    list
})

export const ventasListFailure = error => ({
    type: VENTAS_LIST_FAILURE,
    error
})

export const VENTAS_ADD = "VENTAS_ADD"
export const VENTAS_FETCH = "VENTAS_FETCH"
export const VENTAS_UPDATE = "VENTAS_UPDATE"
export const VENTAS_DELETE = "VENTAS_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(ventasListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(ventasListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(ventasListFailure(JSON.stringify('Error '+error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(ventasListFailure('Error '+error.message))
            }
            //console.log(error.config);
        })
    }
}

export function save(data, history) {
    console.log('save data:' + JSON.stringify(data))
    return (dispatch) => {
        return client.post(url, data)
            .then((r) => {
                dispatch({
                    "type": VENTAS_ADD,
                    "data": r.data //no usado
                })
                history.push('/catalogo/ventas/list')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}

export function getById(id) {
    return dispatch => {
        return client.get(`${url}${id}`)
            .then((r) => {
                /*
                dispatch({
                    "type": CATEGORIA_FETCH,
                    "data": r.data 
                })
                */
                return r.data
            })
            .catch((error) => {
                console.log(error)
                //throw (error)
            })
    }
}

export function update(data, history) {
    return (dispatch) => {
        return client.put(`${url}${data.id}/`, data)
            .then((r) => {
                dispatch({
                    "type": VENTAS_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/catalogo/ventas/list')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}

export function del(_id, history) {
    return dispatch => {
        return client.delete(`${url}${_id}`)
            .then((r) => {
                //console.log('deletex r:' + JSON.stringify(r))
                dispatch({
                    "type": VENTAS_DELETE,
                    "data": _id
                })
                //history.push('/catalogo/categorias')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}