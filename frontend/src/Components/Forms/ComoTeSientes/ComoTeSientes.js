import React, { useEffect } from 'react';
import './estilos.css';
import { Modal } from 'react-bootstrap';
import { Title } from '../../common/Texts';
import { Form, Container, Row } from 'react-bootstrap'
import Swal from 'sweetalert2';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

//Encuestas
import NuevoReporte from '../ReporteSalud/NuevoReporteSalud';
import ReporteDiabetes from '../Encuestas/ReporteDiabetes/ReporteDiabetes';
import ReporteHipertension from '../Encuestas/ReporteHipertension/ReporteHipertension';
import ReporteObesidad from '../Encuestas/ReporteObesidad/ReporteObesidad';
import ReportePsicologico from '../Encuestas/ReportePsicologico/ReportePsicologico';
import AsistenciaMedico from '../Encuestas/AsistenciaMedico/AsistenciaMedico';

// import { Input } from '../common/Inputs';
import { ButtonIcon } from '../../common/Button';

const mostrarAlerta1=()=>{
    Swal.fire({
      title: '¿Llenaste todos los campos?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Si, enviar`,
      denyButtonText: `No, responder`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('listo!', 'Tus datos fueron tomados y pronto un medico lo contactará', '')
      } else if (result.isDenied) {
        Swal.fire('Ingresa todos los campos para continuar', '', 'info')
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


const ComoTeSientes = () => {
    //modales
    const [modalCovid, setModalCovid] = React.useState(false);
    const OpenModalCovid = () => setModalCovid(true);
    const CloseModalCovid = () => setModalCovid(false);

    const [modalDiabetes, setModalDiabetes] = React.useState(false);
    const OpenModalDiabetes = () => setModalDiabetes(true);
    const CloseModalDiabetes = () => setModalDiabetes(false);

    const [modalHipertension, setModalHipertension] = React.useState(false);
    const OpenModalHipertension = () => setModalHipertension(true);
    const CloseModalHipertension = () => setModalHipertension(false);

    const [modalObesidad, setModalObesidad] = React.useState(false);
    const OpenModalObesidad = () => setModalObesidad(true);
    const CloseModalObesidad = () => setModalObesidad(false);

    const [modalPsicologico, setModalPsicologico] = React.useState(false);
    const OpenModalPsicologico = () => setModalPsicologico(true);
    const CloseModalPsicologico = () => setModalPsicologico(false);

    const [modalMedico, setModalMedico] = React.useState(false);
    const OpenModalMedico = () => setModalMedico(true);
    const CloseModalMedico = () => setModalMedico(false);

    useEffect(() => {
        contarChecks()
      });

    const [state, setState] = React.useState({
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false,
        checked5: false,
        checked6: false,
    });

    const handleChange = (event) => {
        event.preventDefault();
        setState({ ...state, [event.target.name]: event.target.checked });
        // contarChecks()
    };
    const contarChecks = (event) => {
        if (state.checked1 === true) {
            Swal.fire({
                title: 'Cuéntanos como te sientes',
                showDenyButton: true,
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: `Si`,
                denyButtonText: `NO`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    setState({checked1: false});
                    OpenModalCovid()
                } else {
                    Swal.fire({
                        title: 'Oosp!',
                        icon: 'info',
                        text: 'vuelve pronto',
                        confirmButtonText: 'Ok'
                    })
                }
            })
        } else if (state.checked2 === true) {
            Swal.fire({
                title: 'Cuéntanos como te sientes',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Si`,
                denyButtonText: `NO`,
                icon: 'question'
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    setState({checked2: false});
                    OpenModalDiabetes()
                } else {
                    Swal.fire({
                        title: 'Oosp!',
                        text: 'vuelve pronto',
                        icon: 'info',
                        confirmButtonText: 'Ok'
                    })
                    //window.location.replace('');
                }
            })
        } else if (state.checked3 === true) {
            Swal.fire({
                title: 'Cuéntanos como te sientes',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Si`,
                denyButtonText: `NO`,
                icon: 'question'
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    setState({checked3: false});
                    OpenModalHipertension()
                } else {
                    Swal.fire({
                        title: 'Oosp!',
                        text: 'vuelve pronto',
                        icon: 'info',
                        confirmButtonText: 'Ok'
                    })
                }
            })
        } else if (state.checked4 === true) {
            Swal.fire({
                title: 'Cuéntanos como te sientes',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Si`,
                denyButtonText: `NO`,
                icon: 'question'
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    setState({checked4: false});
                    OpenModalObesidad()
                } else {
                    Swal.fire({
                        title: 'Oosp!',
                        text: 'vuelve pronto',
                        icon: 'info',
                        confirmButtonText: 'Ok'
                    })
                }
            })
        } else if (state.checked5 === true) {
            Swal.fire({
                title: 'Cuéntanos como te sientes',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Si`,
                denyButtonText: `NO`,
                icon: 'question'
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    setState({checked5: false});
                    OpenModalPsicologico()
                } else {
                    Swal.fire({
                        title: 'Oosp!',
                        text: 'vuelve pronto',
                        icon: 'info',
                        confirmButtonText: 'Ok'
                    })
                    //window.location.replace('');
                }
            })
        } else if (state.checked6 === true) {
            Swal.fire({
                title: 'Desea que un medico se ponga en contacto contigo?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Si`,
                denyButtonText: `NO`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    setState({checked6: false});
                    OpenModalMedico()
                } else {
                    //Swal.fire('Cancelado', '', 'Vuelve cuando quieras...')
                    //window.location.replace('');
                }
            })
        }

    };

    return (
        <div className='containerForm'>
            <div>
                <div className="card-body">
                    <Container>
                        <h3>Selecciona un emoji y luego presiona continuar</h3>
                        <hr />
                        <Form>
                            <Row>
                                <FormGroup row>
                                    <h1><span role="img"  aria-label="covid" >😷</span></h1>
                                    <FormControlLabel
                                        control={
                                            <GreenCheckbox
                                                checked={state.checked1}
                                                onChange={handleChange}
                                                name="checked1"
                                                color="primary"
                                            />
                                        }
                                    />
                                     <h5>Gripa y tos</h5>
                                </FormGroup>
                                <FormGroup row>
                                    <h1><span role="img"  aria-label="diabetes" >🥛</span></h1>
                                    <FormControlLabel
                                        control={
                                            <GreenCheckbox
                                                checked={state.checked2}
                                                onChange={handleChange}
                                                name="checked2"
                                                color="primary"
                                            />
                                        }
                                    />
                                     <h5>Sed</h5>
                                </FormGroup>
                            </Row>
                            <hr />
                            <Row>

                                <FormGroup row>
                                   <h1><span role="img"  aria-label="hipertension" >🤕</span></h1>
                                    <FormControlLabel
                                        control={
                                            <GreenCheckbox

                                                checked={state.checked3}
                                                onChange={handleChange}
                                                name="checked3"
                                                color="primary"
                                            />
                                        }
                                    />
                                    <h5>Migraña</h5>
                                </FormGroup>
                                <FormGroup row>
                                    <h1><span role="img"  aria-label="obesidad" >🥵</span></h1>
                                    <FormControlLabel
                                        control={
                                            <GreenCheckbox
                                                checked={state.checked4}
                                                onChange={handleChange}
                                                name="checked4"
                                                color="primary"
                                            />
                                        }
                                    />
                                      <h5>Sudoración</h5>
                                </FormGroup>

                            </Row>
                            <hr />
                            <Row>
                                <FormGroup row>
                                    <h1><span role="img"  aria-label="depresion" >😞</span></h1>
                                    <FormControlLabel
                                        control={
                                            <GreenCheckbox
                                                checked={state.checked5}
                                                onChange={handleChange}
                                                name="checked5"
                                                color="primary"
                                            />
                                        }
                                    />
                                    <h5>Depresión</h5>
                                </FormGroup>
                                <FormGroup row>
                                    <h1><span role="img"  aria-label="asistensia medica" >🩺</span></h1>
                                    <FormControlLabel
                                        control={
                                            <GreenCheckbox
                                                checked={state.checked6}
                                                onChange={handleChange}
                                                name="checked6"
                                                color="primary"
                                            />
                                        }
                                    />
                                     <h5>Asistencia medica</h5>
                                </FormGroup>
                            </Row>
                        </Form>
                        <hr />
                        {/* <ButtonIcon
                            bgColor='#00A7AF'
                            title='Continuar'
                            onClick={contarChecks}
                        /> */}
                    </Container>

                </div>

            </div>

            <Modal show={modalCovid} onHide={CloseModalCovid}>
                <Modal.Header>
                    <Modal.Title>
                        <Title title='FORMULARIO  DE  SINTOMAS' />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NuevoReporte />
                </Modal.Body>
                <Modal.Footer>
                    <ButtonIcon bgColor='#00A7AF' title='Anterior' onClick={() => {
                        setModalCovid(false)
                    }} />
                    <ButtonIcon bgColor='#e74c3c' title='Cerrar' onClick={() => {
                        setModalCovid(false)
                    }} />
                </Modal.Footer>
            </Modal>

            <Modal show={modalDiabetes} onHide={CloseModalDiabetes}>
                <Modal.Header>
                    <Modal.Title>
                        <Title title='FORMULARIO  DE  SINTOMAS' />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ReporteDiabetes />
                </Modal.Body>
                <Modal.Footer>
                    <ButtonIcon bgColor='#00A7AF' title='Anterior' onClick={() => {
                        setModalDiabetes(false)
                    }} />
                    <ButtonIcon bgColor='#e74c3c' title='Cerrar' onClick={() => {
                        setModalDiabetes(false)
                    }} />
                </Modal.Footer>
            </Modal>

            <Modal show={modalHipertension} onHide={CloseModalHipertension}>
                <Modal.Header>
                    <Modal.Title>
                        <Title title='FORMULARIO  DE  SINTOMAS' />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ReporteHipertension />
                </Modal.Body>
                <Modal.Footer>
                    <ButtonIcon bgColor='#00A7AF' title='Anterior' onClick={() => {
                        setModalHipertension(false)
                    }} />
                    <ButtonIcon bgColor='#e74c3c' title='Cerrar' onClick={() => {
                        setModalHipertension(false)
                    }} />
                </Modal.Footer>
            </Modal>

            <Modal show={modalObesidad} onHide={CloseModalObesidad}>
                <Modal.Header>
                    <Modal.Title>
                        <Title title='FORMULARIO  DE  SINTOMAS' />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ReporteObesidad />
                </Modal.Body>
                <Modal.Footer>
                    <ButtonIcon bgColor='#00A7AF' title='Anterior' onClick={() => {
                        setModalObesidad(false)
                    }} />
                    <ButtonIcon bgColor='#e74c3c' title='Cerrar' onClick={() => {
                        setModalObesidad(false)
                    }} />
                </Modal.Footer>
            </Modal>

            <Modal show={modalPsicologico} onHide={CloseModalPsicologico}>
                <Modal.Header>
                    <Modal.Title>
                        <Title title='FORMULARIO  DE  SINTOMAS' />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ReportePsicologico />
                </Modal.Body>
                <Modal.Footer>
                    <ButtonIcon bgColor='#00A7AF' title='Anterior' onClick={() => {
                        setModalPsicologico(false)
                    }} />
                    <ButtonIcon bgColor='#e74c3c' title='Cerrar' onClick={() => {
                        setModalPsicologico(false)
                    }} />
                </Modal.Footer>
            </Modal>

            <Modal show={modalMedico} onHide={CloseModalMedico}>
                <Modal.Header>
                    <Modal.Title>
                        <Title title='CONSULTA CON UN MEDICO' />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AsistenciaMedico/>
                </Modal.Body>
                <Modal.Footer>
                <div className="App">
                        <br />
                        <button type="button" class="btn btn-success" onClick={() => mostrarAlerta1()}>Registrar</button>
                      </div>   
                </Modal.Footer>
            </Modal>

            
        </div>

    )
}

export default ComoTeSientes;
