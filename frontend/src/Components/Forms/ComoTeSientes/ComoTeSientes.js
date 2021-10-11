import React, { useEffect } from 'react';
import './estilos.css';
import { Modal } from 'react-bootstrap';

import { Title } from '../../common/Texts';
import TextField from '@material-ui/core/TextField';
import {Form, Container, Row, Col, Button} from 'react-bootstrap'
import Swal from 'sweetalert2';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { ButtonIcon } from '../../../Components/common/Button';

//Encuestas
import NuevoReporte from '../ReporteSalud/NuevoReporteSalud';
import ReporteDiabetes from '../Encuestas/ReporteDiabetes/ReporteDiabetes';
import ReporteHipertension from '../Encuestas/ReporteHipertension/ReporteHipertension';
import ReporteObesidad from '../Encuestas/ReporteObesidad/ReporteObesidad';
import ReportePsicologico from '../Encuestas/ReportePsicologico/ReportePsicologico';
import AsistenciaMedico from '../Encuestas/AsistenciaMedico/AsistenciaMedico';

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

    const [documentoIdentidad, setDocumentoIdentidad] = React.useState('');
    const [dataState, setDataState] = React.useState({});
    const [boton, setBoton] = React.useState(true);
    const [modalSec, setModalSec] = React.useState(false);
    const OpenModalSec = () => setModalSec(true);

    const handleDocumentoIdentidadChange = (event) => setDocumentoIdentidad(event.target.value)


    function prevent() {
        document.querySelector("#documentoIdentidad").addEventListener("keypress", function (evt) {
            if (evt.which !== 8 && evt.which !== 0 && evt.which < 48 || evt.which > 57) {
                evt.preventDefault();
            }
        });
        var NID = document.querySelector('#documentoIdentidad');
        NID.addEventListener('input', function () {
            if (this.value.length > 10)
                this.value = this.value.slice(0, 10);
        })
    }
    
    useEffect(() => {

        const callSearchService = () => {
        
            if (documentoIdentidad!== '') {
                registro()
            }
        }
      
        let consultarAPI = setTimeout(() => {
          callSearchService();
        }, 3500);
        
        // Se dispara cada vez que se re-renderiza el componente
        return () => {
          clearTimeout(consultarAPI);
        }
      }, [documentoIdentidad]);

      
    useEffect(() => {
        contarChecks()
        
      });

    const [state, setState] = React.useState({
        checked: false,
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
                //xdxdxdxdd
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
                //dxdxdxdx
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
   
    
    async function registro(){
        await fetch(`${process.env.REACT_APP_API_URL}../api/aprendiz/ingreso`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({documentoIdentidad})
        })
        .then(function (result) {
            if (result['ok'] === true) {
                result.text().then(function(data) { 
                    setDataState(data);
                    console.log(data);
                })
                .then(
                fetch(`${process.env.REACT_APP_API_URL}/api/ingresoSuspendido/ing`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({documentoIdentidad})
                })
                .then(function (result) {
                    if (result['ok'] === true) {
                        Swal.fire({
                            icon: 'error',
                            title: '¡BLOQUEADO!',
                            text: '¡Debes contactar al medico SENA por el ultimo reporte que dice que tienes mas de 3 sintomas!',
                            timer: 10500
                        })
                        setBoton(true)
                    } else {
                        result.text().then(function(data) { 
                            Swal.fire({
                                icon: 'success',
                                title: '¡APRENDIZ ENCONTRADO!',
                                text: "AHORA LLENA EL CUESTIONARIO",
                                timer: 10500
                            })
                            setBoton(false)
                        })
                    }
                    })
                )
            } else {
                result.text().then(function(data) { 
                    Swal.fire({
                        icon: 'error',
                        title: '¡ERROR!',
                        text: data,
                        timer: 10500
                    })
                    setBoton(true)
                })
            }
            })
        }
//cuerpo del reporte

return (
    <div className='containerForm'>
        <TextField
            value={documentoIdentidad}
            onChange={handleDocumentoIdentidadChange}
            onKeyDown={prevent}
            required
            name="documentoIdentidad"
            id='documentoIdentidad'
            type='number'
            label='Documento de Identidad'
            placeholder='Ingresa el documento de identidad'
            variant='outlined'
        />  <div>
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