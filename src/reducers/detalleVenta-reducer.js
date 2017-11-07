import { DETALLEVENTA_LIST_REQUEST, DETALLEVENTA_LIST_SUCCESS, DETALLEVENTA_LIST_FAILURE } from '../actions/detalleVenta-action'
import { DETALLEVENTA_ADD, DETALLEVENTA_FETCH, DETALLEVENTA_UPDATE, DETALLEVENTA_DELETE } from '../actions/detalleVenta-action'

const initialState = {
    list: [],
    data: {}
}

const detalleVentaReducer = (state = initialState, action) => {
    switch (action.type) {

        case DETALLEVENTA_LIST_REQUEST: return {
            ...state,
            list: [],
            error: null
        }
        case DETALLEVENTA_LIST_SUCCESS: return {
            ...state,
            list: action.list,
            error: null
        }
        case DETALLEVENTA_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }


        case DETALLEVENTA_ADD: return {
            ...state,
            //data: {} // no usado aun
        }
        case DETALLEVENTA_UPDATE: return {
            ...state,
            //data: {} // no usado aun
        }
        case DETALLEVENTA_FETCH: {
            //console.log('categoriaReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case DETALLEVENTA_DELETE: {
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        }

        default: return state
    }





}

export default detalleVentaReducer
