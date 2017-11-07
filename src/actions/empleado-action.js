//import axios from "axios";    

import client from './'

//https://github.com/brandiqa/redux-crud-example/blob/master/src/actions/contact-actions.js#L22

const url = '/api-catalogo/empleados/'

export const EMPLEADO_LIST_REQUEST = "EMPLEADO_LIST_REQUEST"
export const EMPLEADO_LIST_SUCCESS = 'EMPLEADO_LIST_SUCCESS'
export const EMPLEADO_LIST_FAILURE = 'EMPLEADO_LIST_FAILURE'

export const empleadoList = () => ({
    type: EMPLEADO_LIST_REQUEST,
})

export const empleadoListSuccess = (list) => ({
    type: EMPLEADO_LIST_SUCCESS,
    list
})

export const empleadoListFailure = error => ({
    type: EMPLEADO_LIST_FAILURE,
    error
})

export const EMPLEADO_ADD = "EMPLEADO_ADD"
export const EMPLEADO_FETCH = "EMPLEADO_FETCH"
export const EMPLEADO_UPDATE = "EMPLEADO_UPDATE"
export const EMPLEADO_DELETE = "EMPLEADO_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(empleadoListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(empleadoListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(empleadoListFailure(JSON.stringify('Error '+error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(empleadoListFailure('Error '+error.message))
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
                    "type": EMPLEADO_ADD,
                    "data": r.data //no usado
                })
                history.push('/catalogo/empleados/list')
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
                    "type": EMPLEADO_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/catalogo/empleados/list')
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
                    "type": EMPLEADO_DELETE,
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