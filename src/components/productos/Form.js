import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Button from 'material-ui/Button';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
//import Typography from 'material-ui/Typography'
//import TextField from 'material-ui/TextField';

import { getList as getCategoriaList } from '../../actions/producto-action'
import { save, getById, update } from '../../actions/producto-action'
import { connect } from 'react-redux'



class Form extends Component {
    /*
        constructor(props) {
            super(props);
            this.state = {
                d: {
                    codigo: '',
                    nombre: '',
                },
                saving: false
            }
        }*/
    constructor(props) {
        super(props);
        this.state = {
            id: props.data ? props.data.id : null,
            nombre: props.data ? props.data.nombre : '',
            codigo: props.data ? props.data.codigo : '',
            detalle: props.data ? props.data.detalle: '',
            precio_venta: props.data ? props.data.precio_venta: '',
            categoria: props.data ? props.data.categoria: ''
        }
    }
    /*
        componentWillReceiveProps = (nextProps) => { // Load Asynchronously
            const { data } = nextProps;
            console.log('componentWillReceiveProps data:' + JSON.stringify(data))
            this.setState({
                id: data.id,
                codigo: data.codigo,
                nombre: data.nombre
            })
        }
    */
    componentWillMount = () => {
        /*
        const { id } = this.props.match.params
        if (id) {
            //this.props.getById(id)
            //this.props.getItemAsync(id)
            this.props.getById(id).then(data => {
                console.log('componentWillReceiveProps data:' + JSON.stringify(data))
                this.setState({
                    id: data.id,
                    codigo: data.codigo,
                    nombre: data.nombre
                })
            }).catch(e => {
            });
        }
        */
    }


    componentDidMount = () => {
        const { id } = this.props.match.params
        if (id) {
            this.props.getById(id).then(data => {
                this.setState({
                    id: data.id,
                    nombre: data.nombre,
                    codigo: data.codigo,
                    detalle: data.detalle,
                    precio_venta: data.precio_venta,
                    categoria: data.categoria
                });
            });
        }
    }

    handleChange = (event) => {
        //this.setState({ value: event.target.value });
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        const { id } = this.props.match.params
        if (id) {
            //console.log('handleSubmit state:' + JSON.stringify(this.state))
            this.props.update(this.state, this.props.history)
        } else {
            this.props.save(this.state, this.props.history)
        }
        //this.props.history.push('/categorias/list');
        event.preventDefault();
    }

    render() {
        //const { data } = this.props
        return (
            <Card>
                <CardHeader
                    avatar={
                        <Avatar src = "https://icon-icons.com/icons2/1147/PNG/512/1486486297-attribute-category-label-shop-price-price-tag-tag_81213.png" >
                            
                          </Avatar>
                    }
                    title="User Form"
                    subheader="Users Form"
                />
                <CardContent>

                    <form >
                        <InputLabel >Nombre</InputLabel>
                        <Input

                            type="text"
                            name="nombre"

                            value={this.state.nombre}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"> : </InputAdornment>}
                        />

                    </form>

                    <form >
                        <InputLabel >Codigo</InputLabel>
                        <Input

                            type="text"
                            name="codigo"

                            value={this.state.codigo}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"> : </InputAdornment>}
                        />

                     </form>

                    <form >
                        <InputLabel >Detalle</InputLabel>
                        <Input

                            type="text"
                            name="detalle"

                            value={this.state.detalle}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"> : </InputAdornment>}
                        />

                    </form>

                    <form >
                        <InputLabel >Precio_venta</InputLabel>
                        <Input

                            type="text"
                            name="precio_venta"

                            value={this.state.precio_venta}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"> : </InputAdornment>}
                        />

                     </form>

                    <form >
                        <InputLabel >Categoria</InputLabel>
                        <Input

                            type="text"
                            name="categoria"

                            value={this.state.categoria}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"> : </InputAdornment>}
                        />

                    </form>

                   
                         
                </CardContent>
                  <CardContent>
                    <form onSubmit={this.handleSubmit}>
                        <Button
                            raised
                            color="primary"
                            type="submit"
                            margin="normal"
                        >
                            Guardar
                        </Button>
                        {'  '}
                        <Button
                            raised
                            color="accent"
                            type="reset"
                            
                            margin="normal"
                            onClick={(e) => this.props.history.push('/catalogo/productos/list')}>
                        
                            cancelar
                        </Button>
                        
                     </form>


                </CardContent>
            </Card>
        )
    }
}

Form.propTypes = {
    data: PropTypes.object
}

const mapStateToProps = (state, props) => {
    if (props.match.params.id) {
        return {
            data: state.producto.list.find(item => item.id + '' === props.match.params.id + '')
        }
    }
    return {
        data: null
    }

}
/*
const mapDispatchToProps = (dispatch) => {
    return {
        save: (d, h) => { dispatch(save(d, h)) },
        getList: (q) => { dispatch(getList(q)) },
        getById: (id) => { dispatch(getById(id)) },
        update: (d, h) => { dispatch(update(d, h)) },
    }
}
*/
export default connect(mapStateToProps, {
    save,
    getById,
    update

})(Form)