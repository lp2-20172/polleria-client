import { Content } from './app/AppContent'
import { Home, Bus, Cart, About, Sandwiches }
  from './app/AppContent'
import CategoriaList from './categorias/List'
import CategoriaForm from './categorias/Form'
import ProductoForm from './productos/Form'
import ProductoList from './productos/List'
import VentasForm from './ventas/Form'
import VentasList from './ventas/List'
import ClientesForm from './clientes/Form'
import ClientesList from './clientes/List'
import EmpleadoForm from './empleados/Form'
import EmpleadoList from './empleados/List'
import DetalleVentaForm from './detalleVenta/Form'
import DetalleVentaList from './detalleVenta/List'
import UserList from './core/user/List'
import UserForm from './core/user/Form'

import Login from './Login'

const routese = [
  {
    path: '/login',
    title: 'Login!',
    icon: 'home',
    component: Login
  }
]
////////////////////////////////////////////////////////////
// then our route config
const routes = [
  {
    path: '/home',
    title: 'Home!',
    icon: 'home',
    exact: true,
    component: Home
  },



  {
    path: '/catalogo',
    title: 'Catalogo!',
    icon: 'list',
    component: Content,
    routes: [
      {
        path: '/catalogo/categorias/list',
        exact: true,
        title: 'Categorias',
        icon: 'copyrightmark',
        component: CategoriaList
      },
      {
        path: '/catalogo/categorias/new',
        exact: true,
        title: 'Categoria New!',
        icon: 'send',
        component: CategoriaForm,
        novisible: true
      },
      {
        path: '/catalogo/categorias/edit/:id',
        exact: true,
        title: 'Categoria Edit!',
        icon: 'send',
        component: CategoriaForm,
        novisible: true
      },
     
      {
        path: '/catalogo/detalleVenta/list',
        exact: true,
        title: 'Detalle Ventas!',
        icon: 'mail',
        component: DetalleVentaList,
      },
      {
        path: '/catalogo/detalleVenta/new',
        exact: true,
        title: 'Detalle Ventas New!',
        icon: 'send',
        component: DetalleVentaForm,
        novisible: true
      },
      {
        path: '/catalogo/detalleVenta/edit/:id',
        exact: true,
        title: 'Detalle Ventas Edit!',
        icon: 'send',
        component: DetalleVentaForm,
        novisible: true
      },

      {
        path: '/catalogo/productos/list',
        exact: true,
        title: 'Producto!',
        icon: 'drafts',
        component: ProductoList,
      },
      {
        path: '/catalogo/productos/new',
        exact: true,
        title: 'Producto New!',
        icon: 'send',
        component: ProductoForm,
        novisible: true
      },
      {
        path: '/catalogo/productos/edit/:id',
        exact: true,
        title: 'Producto Edit!',
        icon: 'send',
        component: ProductoForm,
        novisible: true
      },

      {
        path: '/catalogo/ventas/list',
        exact: true,
        title: 'Ventas!',
        icon: 'book',
        component: VentasList,
      },
      {
        path: '/catalogo/ventas/new',
        exact: true,
        title: 'Ventas New!',
        icon: 'send',
        component: VentasForm,
        novisible: true
      },
      {
        path: '/catalogo/ventas/edit/:id',
        exact: true,
        title: 'Ventas Edit!',
        icon: 'send',
        component: VentasForm,
        novisible: true
      },

      {
        path: '/catalogo/clientes/list',
        exact: true,
        title: 'Clientes!',
        icon: 'personadd',
        component: ClientesList,
      },
      {
        path: '/catalogo/clientes/new',
        exact: true,
        title: 'Clientes New!',
        icon: 'send',
        component: ClientesForm,
        novisible: true
      },
      {
        path: '/catalogo/clientes/edit/:id',
        exact: true,
        title: 'Clientes Edit!',
        icon: 'send',
        component: ClientesForm,
        novisible: true
      },

      {
        path: '/catalogo/empleados/list',
        exact: true,
        title: 'Empleados!',
        icon: 'lock',
        component: EmpleadoList,
      },
      {
        path: '/catalogo/empleados/new',
        exact: true,
        title: 'Empleados New!',
        icon: 'send',
        component: EmpleadoForm,
        novisible: true
      },
      {
        path: '/catalogo/empleados/edit/:id',
        exact: true,
        title: 'Empleados Edit!',
        icon: 'send',
        component: EmpleadoForm,
        novisible: true
      },
      
      ]
    },
      {
       path: '/core',
       title: 'Core',
       icon: 'list',
       component: Content,
       routes: [
     

       {
        path: '/core/users/list',
        exact: true,
        title: 'users',
        icon: 'send',
        component: UserList
      },
      {
        path: '/core/users/new',
        exact: true,
        title: 'User New!',
        icon: 'send',
        component: UserForm,
        novisible: true
      },
      {
        path: '/core/users/edit/:id',
        exact: true,
        title: 'User Edit!',
        icon: 'send',
        component: UserForm,
        novisible: true
      }, 

      ]
    }
  ] 


  

export { routes, routese }