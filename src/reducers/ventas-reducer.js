import { VENTAS_LIST_REQUEST, VENTAS_LIST_SUCCESS, VENTAS_LIST_FAILURE } from '../actions/ventas-action'
import { VENTAS_ADD, VENTAS_FETCH, VENTAS_UPDATE, VENTAS_DELETE } from '../actions/ventas-action'

const initialState = {
    list: [],
    data: {}
}

const ventasReducer = (state = initialState, action) => {
    switch (action.type) {

        case VENTAS_LIST_REQUEST: return {
            ...state,
            list: [],
            error: null
        }
        case VENTAS_LIST_SUCCESS: return {
            ...state,
            list: action.list,
            error: null
        }
        case VENTAS_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }


        case VENTAS_ADD: return {
            ...state,
            //data: {} // no usado aun
        }
        case VENTAS_UPDATE: return {
            ...state,
            //data: {} // no usado aun
        }
        case VENTAS_FETCH: {
            //console.log('PRODUCTOReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case VENTAS_DELETE: {
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        }

        default: return state
    }





}

export default ventasReducer
