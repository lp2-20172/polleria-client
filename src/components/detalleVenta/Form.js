import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Button from 'material-ui/Button';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
//import Typography from 'material-ui/Typography'
//import TextField from 'material-ui/TextField';

import { getList as getCategoriaList } from '../../actions/detalleVenta-action'
import { save, getById, update } from '../../actions/detalleVenta-action'
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
            cantidad: props.data ? props.data.cantidad : '',
            precio_uni: props.data ? props.data.precio_uni : '',
            producto_nombre: props.data ? props.data.producto_nombre : '',
            venta_cliente: props.data ? props.data.venta_cliente : '',
            empleado_nombre: props.data ? props.data.empleado_nombre : ''
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
                    cantidad: data.cantidad,
                    precio_uni: data.precio_uni,
                    producto_nombre: data.producto_nombre,
                    venta_cliente: data.vemta_cliete,
                    empleado_nombre: data.empleado_nombre
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
                        <InputLabel >Cantidad</InputLabel>
                        <Input

                            type="text"
                            name="cantidad"

                            value={this.state.cantidad}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"> : </InputAdornment>}
                        />

                    </form>

                    <form >
                        <InputLabel >precio_uni</InputLabel>
                        <Input

                            type="text"
                            name="precio_uni"

                            value={this.state.precio_uni}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"> : </InputAdornment>}
                        />

                    </form>
                    
                     <form >
                        <InputLabel >producto_nombre</InputLabel>
                        <Input

                            type="text"
                            name="producto_nombre"

                            value={this.state.producto_nombre}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"> : </InputAdornment>}
                        />

                    </form>

                     <form >
                        <InputLabel >venta_cliente</InputLabel>
                        <Input

                            type="text"
                            name="venta_cliente"

                            value={this.state.venta_cliente}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"> : </InputAdornment>}
                        />

                    </form>

                     <form >
                        <InputLabel >empleado_nombre</InputLabel>
                        <Input

                            type="text"
                            name="empleado_nombre"

                            value={this.state.empleado_nombre}
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
                            onClick={(e) => this.props.history.push('/catalogo/detalleVenta/list')}>
                        
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
            data: state.detalleVenta.list.find(item => item.id + '' === props.match.params.id + '')
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