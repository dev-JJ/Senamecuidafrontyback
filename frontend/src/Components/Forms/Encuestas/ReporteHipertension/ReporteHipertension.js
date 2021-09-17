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


const GreenCheckbox = withStyles({
    root: {
        color: green[50],
        '&$checked': {
            color: green[50],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

// const useStyles = makeStyles((theme) => ({
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 120,
//     },
//     selectEmpty: {
//         marginTop: theme.spacing(2),
//     },
// }));

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

const ReporteHipertension = () => {

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

    const handleChangeHipertension = (event) => {
        event.preventDefault();
        setState({ ...state, [event.target.name]: event.target.checked });
        if(event.target.checked){
            setContadorPreguntas(contadorPreguntas + 1);
        }else{
            setContadorPreguntas(contadorPreguntas - 1);
        }

        // contarChecks()
    };

    const contarChecksHipertension = (event) => {

        if (state.checked1 == true) {
            Swal.fire({
                title: 'Deseas llenar una encuesta para identificar si tienes sintomas relacionados a la hipertensión?',
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
            Swal.fire('Usted no presenta sintomas relacionados con hipertención.');
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
                                <h1><span role="img"  aria-label="mareos" >😵</span></h1>
                                <FormControlLabel
                                    control={
                                        <GreenCheckbox
                                            checked={state.checked1}
                                            onChange={handleChangeHipertension}
                                            name="checked1"
                                            color="primary"
                                            disabled ={ state.checked1 === true ? false : contadorPreguntas === 5 ? true : false}

                                        />
                                    }
                                />
                                <h5>Mareos</h5>
                            </FormGroup>
                            <FormGroup row>
                                <h1><span role="img"  aria-label="hambre" >🤤</span></h1>
                                <FormControlLabel
                                    control={
                                        <GreenCheckbox
                                            checked={state.checked2}
                                            onChange={handleChangeHipertension}
                                            name="checked2"
                                            color="primary"
                                            disabled={ state.checked2 === true ? false : contadorPreguntas === 5 ? true : false}

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
                                            onChange={handleChangeHipertension}
                                            name="checked3"
                                            color="primary"
                                            disabled={ state.checked3 === true ? false : contadorPreguntas === 5 ? true : false}

                                        />
                                    }
                                />
                                <h5>Perdida de peso</h5>
                            </FormGroup>
                        </Row>

                        <hr />
                        <Row>

                            <FormGroup row>
                                <h1><span role="img"  aria-label="fiebre" >🤒</span></h1>
                                <FormControlLabel
                                    control={
                                        <GreenCheckbox
                                            checked={state.checked4}
                                            onChange={handleChangeHipertension}
                                            name="checked4"
                                            color="primary"
                                            disabled={ state.checked4 === true ? false : contadorPreguntas === 5 ? true : false}

                                        />
                                    }
                                />
                                <h5>Fiebre</h5>
                            </FormGroup>
                            <FormGroup row>
                                <h1><span role="img"  aria-label="sangrado" >👃</span></h1>
                                <FormControlLabel
                                    control={
                                        <GreenCheckbox
                                            checked={state.checked5}
                                            onChange={handleChangeHipertension}
                                            name="checked5"
                                            color="primary"
                                            disabled={ state.checked5 === true ? false : contadorPreguntas === 5 ? true : false}

                                        />
                                    }
                                />
                                <h5>Sangrado de nariz</h5>
                            </FormGroup>
                            <FormGroup row>
                                <h1><span role="img"  aria-label="ojos" >👀</span></h1>
                                <FormControlLabel
                                    control={
                                        <GreenCheckbox
                                            checked={state.checked6}
                                            onChange={handleChangeHipertension}
                                            name="checked6"
                                            color="primary"
                                            disabled={ state.checked6 === true ? false : contadorPreguntas === 5 ? true : false}
                                        />
                                    }
                                />
                                <h5>Visión borrosa</h5>
                            </FormGroup>
                        </Row>

                        <hr />
                        <Row>


                            <FormGroup row>
                                <h1><span role="img"  aria-label="dolor" >🤦‍♂️</span></h1>
                                <FormControlLabel
                                    control={
                                        <GreenCheckbox
                                            checked={state.checked7}
                                            onChange={handleChangeHipertension}
                                            name="checked7"
                                            color="primary"
                                            disabled={ state.checked7 === true ? false : contadorPreguntas === 5 ? true : false}

                                        />
                                    }
                                />
                                <h5>Migraña</h5>
                            </FormGroup>
                            <FormGroup row>
                                <h1><span role="img"  aria-label="sed" >🥛</span></h1>
                                <FormControlLabel
                                    control={
                                        <GreenCheckbox
                                            checked={state.checked8}
                                            onChange={handleChangeHipertension}
                                            name="checked8"
                                            color="primary"
                                            disabled={ state.checked8 === true ? false : contadorPreguntas === 5 ? true : false}

                                        />
                                    }
                                />
                                <h5>sed</h5>
                            </FormGroup>

                            <FormGroup row>
                                <h1><span role="img"  aria-label="fatiga" >😪</span></h1>
                                <FormControlLabel
                                    control={
                                        <GreenCheckbox
                                            checked={state.checked9}
                                            onChange={handleChangeHipertension}
                                            name="checked9"
                                            color="primary"
                                            disabled={ state.checked9 === true ? false : contadorPreguntas === 5 ? true : false}

                                        />
                                    }
                                />
                                <h5>Fatiga</h5>
                            </FormGroup>
                        </Row>
                        <hr />

                    </Form>
                    <ButtonIcon
                        bgColor='#00A7AF'
                        title='Continuar'
                        onClick={contarChecksHipertension}
                        disabled={contadorPreguntas === 5 ? false : true }
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
                            <h2>Ayudanos a conocer tu estado de salud de posible HIPERTENSIÓN <span role="img"  aria-label="feliz" >😄</span></h2>
                            <hr />
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Label>
                                            <strong>¿usted cada cuanto hace ejercicio o algún deporte?</strong>
                                        </Form.Label>
                                        <Form.Check type="radio"
                                            name={'deporte'} label={'Nunca'} />
                                        <Form.Check type="radio"
                                            name={'deporte'} label={'1 o 2 veces por semana'} />
                                        <Form.Check type="radio"
                                            name={'deporte'} label={'3 o 4 veces por semana'} />
                                        <Form.Check type="radio"
                                            name={'deporte'} label={'5 o 6 veces por semana'} />
                                        <Form.Check type="radio"
                                            name={'deporte'} label={'Diario'} />
                                    </Col>
                                    <Col>
                                        <Form.Label>
                                            <strong>En los ultimos 3 meses ¿ha tenido problemas de descontrol con su presión arterial?</strong>
                                        </Form.Label>
                                        <Form.Check type="radio"
                                            name={'presion'} label={'Si'} />
                                        <Form.Check type="radio"
                                            name={'presion'} label={'No'} />
                                    </Col>

                                </Row>
                                <hr />
                                <Row>
                                    <Col>
                                        <Form.Label>
                                            <strong>¿Alguna vez le han diagnosticado alguna enfermedad como la diabetes, colesterol, trigliceridos o obesidad?</strong>
                                        </Form.Label>
                                        <Form.Check type="radio"
                                            name={'enfermedad'} label={'Si'} />
                                        <Form.Check type="radio"
                                            name={'enfermedad'} label={'No'} />
                                    </Col>
                                    <Col>
                                        <Form.Label>
                                            <strong>¿Tienes algún pariente cercano con hipertensión?</strong>
                                        </Form.Label>
                                        <Form.Check type="radio"
                                            name={'pariente'} label={'Si'} />
                                        <Form.Check type="radio"
                                            name={'pariente'} label={'No'} />
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

export default ReporteHipertension;