import React from 'react';
// import './estilos.css';
import { Form, Container, Row, Col, Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap';
import { Title } from '../../../common/Texts';
import Swal from 'sweetalert2';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { ButtonIcon } from '../../../common/Button';


const mostrarAlerta1=()=>{
    Swal.fire({
      title: 'Seleccionaste todas tus respuestas?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Si, enviar`,
      denyButtonText: `No, responder`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('listo!', '', 'Gracias por confirmar tus sintomas')
      } else if (result.isDenied) {
        Swal.fire('Selecciona los sintomas que presentas', '', 'info')
      }
    });
  }

const GreenCheckbox = withStyles({
    root: {
        color: green[50],
        '&$checked': {
            color: green[50],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);



const ReporteDiabetes = () => {

    const [modalPreguntas, setModalPreguntas] = React.useState(false);
    const [contadorPreguntas, setContadorPreguntas] = React.useState(0);
    const OpenModalPreguntas = () => setModalPreguntas(true);
    const CloseModalPreguntas = () => setModalPreguntas(false);

    const [state, setState] = React.useState({
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false,
        checked5: false,
        checked6: false,
        checked7: false,
        checked8: false,
        checked9: false,
    });

    const handleChange = (event) => {
        event.preventDefault();
        setState({ ...state, [event.target.name]: event.target.checked });
        if(event.target.checked){
            setContadorPreguntas(contadorPreguntas + 1);
        }else{
            setContadorPreguntas(contadorPreguntas - 1);
        }
    };

    const contarChecks = (event) => {

        if (state.checked1 == true) {
            Swal.fire({
                title: 'Desea llenar una encuesta de sintomas relacionados a la diabetes?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `SI`,
                denyButtonText: `NO`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    OpenModalPreguntas()
                }
            })
        } else {
            Swal.fire('Usted no presenta sintomas relacionados con diabetes.');
            setTimeout(() => {
                window.location.replace('');
            },5000);
        }

    };

    return (
        <div className='containerForm'>
            <div>
                <div className="card-body">
                    <Container>
                        <h3>Selecciona 5 sintomas para continuar</h3>
                        <hr />
                        <Form>
                            <Row>
                                <FormGroup row>
                                    <h1><span role="img"  aria-label="inodoro" >🚽</span></h1>
                                    <FormControlLabel
                                        control={
                                            <GreenCheckbox
                                                checked={state.checked1}
                                                onChange={handleChange}
                                                name="checked1"
                                                color="primary"
                                                disabled ={ state.checked1 === true ? false : contadorPreguntas === 5 ? true : false}

                                            />
                                        }
                                    />
                                    <h5>Indigestión</h5>
                                </FormGroup>
                                <FormGroup row>
                                    <h1><span role="img"  aria-label="hambre" >🤤</span></h1>
                                    <FormControlLabel
                                        control={
                                            <GreenCheckbox
                                                checked={state.checked2}
                                                onChange={handleChange}
                                                name="checked2"
                                                color="primary"
                                                disabled ={ state.checked2 === true ? false : contadorPreguntas === 5 ? true : false}

                                            />
                                        }
                                    />
                                     <h5>Hambre</h5>
                                </FormGroup>
                                <FormGroup row>
                                    <h1><span role="img"  aria-label="pesa" >⚖️</span></h1>
                                    <FormControlLabel
                                        control={
                                            <GreenCheckbox
                                                checked={state.checked3}
                                                onChange={handleChange}
                                                name="checked3"
                                                color="primary"
                                                disabled ={ state.checked3 === true ? false : contadorPreguntas === 5 ? true : false}

                                            />
                                        }
                                    />
                                     <h5>Perdida de peso</h5>
                                </FormGroup>
                            </Row>

                            <hr />
                            <Row>

                                <FormGroup row>
                                    <h1><span role="img"  aria-label="fatiga" >😪</span></h1>
                                    <FormControlLabel
                                        control={
                                            <GreenCheckbox
                                                checked={state.checked4}
                                                onChange={handleChange}
                                                name="checked4"
                                                color="primary"
                                                disabled ={ state.checked4 === true ? false : contadorPreguntas === 5 ? true : false}

                                            />
                                        }
                                    />
                                     <h5>Fatiga</h5>
                                </FormGroup>
                                <FormGroup row>
                                    <h1><span role="img"  aria-label="irritable" >😤</span></h1>
                                    <FormControlLabel
                                        control={
                                            <GreenCheckbox
                                                checked={state.checked5}
                                                onChange={handleChange}
                                                name="checked5"
                                                color="primary"
                                                disabled ={ state.checked5 === true ? false : contadorPreguntas === 5 ? true : false}

                                            />
                                        }
                                    />
                                     <h5>Irritabilidad</h5>
                                </FormGroup>
                                <FormGroup row>
                                    <h1><span role="img"  aria-label="ojos" >👀</span></h1>
                                    <FormControlLabel
                                        control={
                                            <GreenCheckbox
                                                checked={state.checked6}
                                                onChange={handleChange}
                                                name="checked6"
                                                color="primary"
                                                disabled ={ state.checked6 === true ? false : contadorPreguntas === 5 ? true : false}

                                            />
                                        }
                                    />
                                     <h5>Visión borrosa</h5>
                                </FormGroup>
                            </Row>

                            <hr />
                            <Row>


                                <FormGroup row>
                                    <h1><span role="img"  aria-label="diente" >🦷</span></h1>
                                    <FormControlLabel
                                        control={
                                            <GreenCheckbox
                                                checked={state.checked7}
                                                onChange={handleChange}
                                                name="checked7"
                                                color="primary"
                                                disabled ={ state.checked7 === true ? false : contadorPreguntas === 5 ? true : false}

                                            />
                                        }
                                    />
                                     <h5>Infección oral</h5>
                                </FormGroup>
                                <FormGroup row>
                                    <h1><span role="img"  aria-label="sed" >🥛</span></h1>
                                    <FormControlLabel
                                        control={
                                            <GreenCheckbox
                                                checked={state.checked8}
                                                onChange={handleChange}
                                                name="checked8"
                                                color="primary"
                                                disabled ={ state.checked8 === true ? false : contadorPreguntas === 5 ? true : false}

                                            />
                                        }
                                    />
                                     <h5>Sed</h5>
                                </FormGroup>

                                <FormGroup row>
                                    <h1><span role="img"  aria-label="estornudos" >🤧</span></h1>
                                    <FormControlLabel
                                        control={
                                            <GreenCheckbox
                                                checked={state.checked9}
                                                onChange={handleChange}
                                                name="checked9"
                                                color="primary"
                                                disabled ={ state.checked9 === true ? false : contadorPreguntas === 5 ? true : false}

                                            />
                                        }
                                    />
                                     <h5>Estornudos</h5>
                                </FormGroup>
                            </Row>
                            <hr />

                        </Form>
                        <ButtonIcon
                            bgColor='#00A7AF'
                            title='Continuar'
                            onClick={contarChecks}
                        />
                    </Container>


                    <Modal show={modalPreguntas} onHide={CloseModalPreguntas}>
                        <Modal.Header>
                            <Modal.Title>
                                <Title title='FORMULARIO  DE  SINTOMAS' />
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Container>
                                <h2>Ayudanos a conocer tu estado de salud de posible DIABETES <span role="img"  aria-label="feliz" >😄</span></h2>
                                <h3>Marca SI los sintomas que presentas</h3>
                                <hr />
                                <Form>
                                    <Row>
                                        <Col>
                                            <Form.Label>
                                                <strong>Tiene la presión arterial alta?</strong>
                                            </Form.Label>
                                            <Form.Check type="radio"
                                                name={'sed'} label={'Si'} />
                                            <Form.Check type="radio"
                                                name={'sed'} label={'No'} />
                                        </Col>
                                        <Col>
                                            <Form.Label>
                                                <strong>Estas en estado de embarazo?</strong>
                                            </Form.Label>
                                            <Form.Check type="radio"
                                                name={'fatiga'} label={'Si'} />
                                            <Form.Check type="radio"
                                                name={'fatiga'} label={'No'} />
                                        </Col>
                                        <Col>
                                            <Form.Label>
                                                <strong>Presentas niveles anormales de colesterol?</strong>
                                            </Form.Label>
                                            <Form.Check type="radio"
                                                name={'infecciones'} label={'Si'} />
                                            <Form.Check type="radio"
                                                name={'infecciones'} label={'No'} />
                                        </Col>

                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col>
                                            <Form.Label>
                                                <strong>Te has realizado algun examen de glucosa?</strong>
                                            </Form.Label>
                                            <Form.Check type="radio"
                                                name={'diente'} label={'Si'} />
                                            <Form.Check type="radio"
                                                name={'diente'} label={'No'} />
                                        </Col>
                                        <Col>
                                            <Form.Label>
                                                <strong>Tienes antecedentes de síndrome de ovario poliquístico o enfermedad cardíaca?</strong>
                                            </Form.Label>
                                            <Form.Check type="radio"
                                                name={'pollo'} label={'Si'} />
                                            <Form.Check type="radio"
                                                name={'pollo'} label={'No'} />
                                        </Col>
                                        <Col>
                                            <Form.Label>
                                                <strong>Tienes algun pariente cercano con diabetes?</strong>
                                            </Form.Label>
                                            <Form.Check type="radio"
                                                name={'fiebre'} label={'Si'} />
                                            <Form.Check type="radio"
                                                name={'fiebre'} label={'No'} />
                                        </Col>
                                    </Row>
                                    <hr />

                                    <div className="App">
      <br />
      <button type="button" class="btn btn-success" onClick={() => mostrarAlerta1()}>Registrar</button>
    </div>
                                </Form>
                            </Container>
                        </Modal.Body>
                        <Modal.Footer>
                            <ButtonIcon bgColor='#00A7AF' title='Anterior' onClick={() => {
                                setModalPreguntas(false)
                            }} />
                            <ButtonIcon bgColor='#e74c3c' title='Cerrar' onClick={() => {
                                setModalPreguntas(false)
                            }} />
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default ReporteDiabetes;