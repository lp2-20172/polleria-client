import { EMPLEADO_LIST_REQUEST, EMPLEADO_LIST_SUCCESS, EMPLEADO_LIST_FAILURE } from '../actions/empleado-action'
import { EMPLEADO_ADD, EMPLEADO_FETCH, EMPLEADO_UPDATE, EMPLEADO_DELETE } from '../actions/empleado-action'

const initialState = {
    list: [],
    data: {}
}

const empleadoReducer = (state = initialState, action) => {
    switch (action.type) {

        case EMPLEADO_LIST_REQUEST: return {
            ...state,
            list: [],
            error: null
        }
        case EMPLEADO_LIST_SUCCESS: return {
            ...state,
            list: action.list,
            error: null
        }
        case EMPLEADO_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }


        case EMPLEADO_ADD: return {
            ...state,
            //data: {} // no usado aun
        }
        case EMPLEADO_UPDATE: return {
            ...state,
            //data: {} // no usado aun
        }
        case EMPLEADO_FETCH: {
            //console.log('categoriaReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case EMPLEADO_DELETE: {
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        }

        default: return state
    }





}

export default empleadoReducer
