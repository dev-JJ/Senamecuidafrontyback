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


const ReporteObesidad = () => {

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
///limpiar formulario
        if (state.checked1 == true) {
            Swal.fire({
                title: '¿Desea llenar una encuesta de sintomas relacionados a la obesidad?',
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
            Swal.fire('Usted no presenta sintomas relacionados con la obesidad.');
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
                                    <h1><span role="img"  aria-label="dormir" >🥱</span></h1>
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
                                    <h5>Insomnio</h5>
                                </FormGroup>
                                <FormGroup row>
                                    <h1><span role="img"  aria-label="espalda" >😧</span></h1>
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
                                    <h5>Dolor de espalda</h5>
                                </FormGroup>
                                <FormGroup row>
                                    <h1><span role="img"  aria-label="sudoracion" >💧</span></h1>
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
                                     <h5>Sudoración</h5>
                                </FormGroup>
                            </Row>

                            <hr />
                            <Row>

                                <FormGroup row>
                                    <h1><span role="img"  aria-label="calor" >🥵</span></h1>
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
                                     <h5>Calor excesivo</h5>
                                </FormGroup>
                                <FormGroup row>
                                    <h1><span role="img"  aria-label="infeccion" >😷</span></h1>
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
                                   <h5>Infección cutanea</h5>
                                </FormGroup>
                                <FormGroup row>
                                    <h1><span role="img"  aria-label="fatiga" >💤</span></h1>
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
                                     <h5>Fatiga</h5>
                                </FormGroup>
                            </Row>

                            <hr />
                            <Row>


                                <FormGroup row>
                                    <h1><span role="img"  aria-label="Deprecion" >😔</span></h1>
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
                                     <h5>Depresión</h5>
                                </FormGroup>
                                <FormGroup row>
                                    <h1><span role="img"  aria-label="aire" >😶</span></h1>
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
                                     <h5>Falta de aire</h5>
                                </FormGroup>

                                <FormGroup row>
                                    <h1><span role="img"  aria-label="apetito" >🍔</span></h1>
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
                                     <h5>Mucho apetito</h5>
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
                                <h2>Responde las siguietes preguntas para saber si tienes obecidad <span role="img"  aria-label="feliz" >😄</span></h2>
                                <hr />
                                <Form>
                                    <Row>
                                        <Col>
                                            <Form.Label>
                                                <strong>Ingrese su peso.</strong>
                                            </Form.Label> 
                                            <Form.Control type="text"
                                                name={'peso'} />
                                        </Col>
                                        <Col>
                                            <Form.Label>
                                                <strong>Ingrese su estatura en centimetros(cm).</strong>
                                            </Form.Label>
                                            <Form.Control type="text"
                                                name={'estatura'} />
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col>
                                            <Form.Label>
                                                <strong>¿usted hace ejercicio o practica algún deporte? y si es asi, cada cuanto lo hace.</strong>
                                            </Form.Label>
                                            <Form.Check type="radio"
                                                name={'deporte'} label={'No, nunca'} />
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
                                                <strong>¿Cada cuanto ingiere comida chatarra al mes? (ej: Coca-Cola, doritos, pizza)</strong>
                                            </Form.Label>
                                            <Form.Check type="radio"
                                                name={'comida'} label={'A veces los fines de semana'} />
                                            <Form.Check type="radio"
                                                name={'comida'} label={'Cada fin de semana'} />
                                            <Form.Check type="radio"
                                                name={'comida'} label={'Varias veces en semana'} />
                                            <Form.Check type="radio"
                                                name={'comida'} label={'Casi diario'} />
                                            <Form.Check type="radio"
                                                name={'comida'} label={'Diario'} />
                                        </Col>
                                    </Row>

                                    <hr />

                                    <Row>
                                        <Col>
                                            <Form.Label>
                                                <strong>¿Tiene algún familiar con sobrepeso u obesidad?</strong>
                                            </Form.Label>
                                            <Form.Check type="radio"
                                                name={'familia'} label={'Si'} />
                                            <Form.Check type="radio"
                                                name={'familia'} label={'No'} />
                                        </Col>
                                        <Col>
                                            <Form.Label>
                                                <strong>¿usted está actualmente haciendo dieta?</strong>
                                            </Form.Label>
                                            <Form.Check type="radio"
                                                name={'dieta'} label={'Si'} />
                                            <Form.Check type="radio"
                                                name={'dieta'} label={'No'} />
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

        //

        /*{ <div className='containerForm'>
            <div>
                <div className="card-body">
                    <Container>
                        <h2>Responde las siguietes preguntas para saber si tienes obecidad 😄</h2>
                        <hr />
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Label>
                                        <strong>Ingrese su peso.</strong>
                                    </Form.Label> 
                                    <Form.Control type="text"
                                        name={'peso'} />
                                </Col>
                                <Col>
                                    <Form.Label>
                                        <strong>Ingrese su estatura en centimetros(cm).</strong>
                                    </Form.Label>
                                    <Form.Control type="text"
                                        name={'estatura'} />
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col>
                                    <Form.Label>
                                        <strong>¿usted hace ejercicio o practica algún deporte? y si es asi, cada cuanto lo hace.</strong>
                                    </Form.Label>
                                    <Form.Check type="radio"
                                        name={'deporte'} label={'No, nunca'} />
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
                                        <strong>¿Cada cuanto ingiere comida chatarra al mes? (ej: Coca-Cola, doritos, pizza)</strong>
                                    </Form.Label>
                                    <Form.Check type="radio"
                                        name={'comida'} label={'A veces los fines de semana'} />
                                    <Form.Check type="radio"
                                        name={'comida'} label={'Cada fin de semana'} />
                                    <Form.Check type="radio"
                                        name={'comida'} label={'Varias veces en semana'} />
                                    <Form.Check type="radio"
                                        name={'comida'} label={'Casi diario'} />
                                    <Form.Check type="radio"
                                        name={'comida'} label={'Diario'} />
                                </Col>

                            </Row>

                            <hr />

                            <Row>
                                <Col>
                                    <Form.Label>
                                        <strong>¿Tiene algún familiar con sobrepeso u obesidad?</strong>
                                    </Form.Label>
                                    <Form.Check type="radio"
                                        name={'familia'} label={'Si'} />
                                    <Form.Check type="radio"
                                        name={'familia'} label={'No'} />
                                </Col>
                                <Col>
                                    <Form.Label>
                                        <strong>¿usted está actualmente haciendo dieta?</strong>
                                    </Form.Label>
                                    <Form.Check type="radio"
                                        name={'dieta'} label={'Si'} />
                                    <Form.Check type="radio"
                                        name={'dieta'} label={'No'} />
                                </Col>
                            </Row>
                            <hr />

                            <div style={{ marginTop: 25, marginLeft: "43%" }}>
                                <Button
                                    style={{
                                        backgroundColor: "#00A7AF",
                                        borderColor: "#00A7AF"
                                    }}
                                    type="submit"
                                // disabled={boton}
                                // onClick={() => OpenModalSec()}
                                >
                                    REGISTRAR
                                </Button>
                            </div>
                        </Form>
                    </Container>
                </div>
            </div>

        </div> } */
    )
}

export default ReporteObesidad;