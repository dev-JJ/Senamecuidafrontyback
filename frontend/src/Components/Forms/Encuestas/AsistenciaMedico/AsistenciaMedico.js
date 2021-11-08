import React from 'react';
// import './estilos.css';
import { makeStyles } from '@material-ui/core/styles';
import { Form, Container, Row, Col, Button } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
import { Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { ButtonIcon } from '../../../common/Button';
import { Title } from '../../../common/Texts';
import Select from 'react-select'


    



const AsistenciaMedico = () => {

  const [documento, setDocumento] = React.useState('')
  const [nombre, setNombre] = React.useState('')
  const [email, setEmail] = React.useState('true')
  const [telefono, setTelefono] = React.useState('')
  const [direccion, setDireccion] = React.useState('')
  const [documentoIdentidad, setDocumentoIdentidad] = React.useState('')
  const [eps, setEps] = React.useState('')

  const handleSubmit = e => {
        e.preventDefault()
        let valores = [
            fiebre,
            dolorTragar,
            Tos,
            dificultadRespirar,+
            malestargeneral,
            gripa,
            diarrea,
            contacto,
            tratamiento,
        ]


    const options = [
        { value: 'Ninguna', label: 'Ninguna'},
        { value: 'SURA', label: 'SURA' },
        { value: 'COOMEVA', label: 'COOMEVA' },
        { value: 'Salud Colmena', label: 'Salud Colmena' },
        { value: 'Salud Total', label: 'Salud Total' },
        { value: 'Cafesalud', label: 'Cafesalud' },
        { value: 'Sanitas', label: 'Vanilla' },
        { value: 'Medimas', label: 'Vanilla' },
        { value: 'Colseguros', label: 'Colseguros' },
        { value: 'Colpatria', label: 'Colpatria' },
        { value: 'Cruz Blanca', label: 'Cruz Blanca'},
        { value: 'Sisben', label: 'Sisben'},
        { value: 'Sanidad Militar', label: 'Sanidad Militar'},
        { value: 'Red Vital', label: 'Red Vital'} 
    ]

    const OnDropdownChange = (value)=> {
        console.log(value);
    }
    
    return(
            <Form onSubmit={this.AsistenciaMedico}>
            <Form.Group as={Row} className="mb-3" name="nombre" controlId="Nombre">
              <Form.Label column sm="2">
                Nombre
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Nombre Completo" />
              </Col>
            </Form.Group>
    
            <Form.Group as={Row} className="mb-3" name="documento" controlId="Documento">
              <Form.Label column sm="2">
                documento
              </Form.Label>
              <Col sm="10">
                <Form.Control type="number" placeholder="documento" />
              </Col>
            </Form.Group>
    
            <Form.Group as={Row} className="mb-3" name="email" controlId="Email">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control type="email" placeholder="email@ejemplo.com" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" name="telefono" controlId="telefono">
              <Form.Label column sm="2">
                Telefono
              </Form.Label>
              <Col sm="10">
                <Form.Control type="number" placeholder="Telefono" />
              </Col>
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3" name="direccion" controlId="Direccion">
              <Form.Label column sm="2">
                Direccion
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Direccion" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
                EPS
              </Form.Label>
               <Col sm="10">
                <div className="AsistenciaMedico">
                  <Select 
                    options={options}
                    onChange={OnDropdownChange}
                    defaultValue={options[0]}
                    name="eps"
                  />
                </div>
              </Col>
              </Form.Group>
          </Form>
          
    
          );
    } 
    

export default AsistenciaMedico;
