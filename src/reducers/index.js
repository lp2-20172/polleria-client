import {combineReducers} from 'redux'
import { authReducer as auth } from '../components/utils/OAuth2'

//import counterReducer from './counterReducer'
import categoria from './categoria-reducer'
import producto from './producto-reducer'
import ventas from './ventas-reducer'
import empleado from './empleados-reducer'
import cliente from './cliente-reducer'
import detalleVenta from './detalleVenta-reducer'
import user from './user-reducer'

//import ecomm from './ecommReducer'
import themeReducer from './appLayoutReducer'


var reducers = combineReducers({
  auth: auth,
   // counter: counterReducer,
  categoria: categoria,
  producto: producto,
  empleado: empleado,
  ventas: ventas,
  cliente: cliente,
  detalleVenta: detalleVenta,
  user: user,


  //  ecomm: ecomm,
  theme:themeReducer,

});

export default reducers;