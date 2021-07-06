import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import {
    Center,
    Camps,
    DivFocus,

} from "./formbitacoraStyled"

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export const FormBitacora = () => {
    const classes = useStyles();
    const [Name, setName] = useState("");
    const [ErrorName, setErrorName] = useState(false);
    const [AsociateNumber, setAsociateNumber] = useState("");
    const [ErrorAsociateNumber, setErrorAsociateNumber] = useState(false);
    const [Rc, setRc] = useState("");
    const [ErrorRc, setErrorRc] = useState(false);
    const [Horometer, setHorometer] = useState("");
    const [ErrorHorometer, setErrorHorometer] = useState(false);
    const [BateryIn, setBateryIn] = useState("");
    const [ErrorInn, setErrorInn] = useState(false);
    const [BateryOut, setBateryOut] = useState("");
    const [ErrorOut, setErrorOut] = useState(false);

    const [sentinela, setSentinela] = useState(6);

    const InverterBool = b => b ? false : true;


    const text = "¡Dato Incorrecto Verificar!";
    const [prim, setprim] = useState(false);
    const [seg, setSeg] = useState(false);
    const [ter, setTer] = useState(false);
    const [cuar, setCuar] = useState(false);
    const [quin, setQuin] = useState(false);
    const [sex, setSex] = useState(false);
    //var prim = false;
    //var seg = false;
    //var ter = false;
    //var cuar = false;
    //var quin = false;
    //var sex = false;

    useEffect(() => {
        console.log(sentinela);

        setprim((sentinela === 0) ? true : false);
        setSeg((sentinela === 1) ? true : false);
        setTer((sentinela === 2) ? true : false);
        setCuar((sentinela === 3) ? true : false);
        setQuin((sentinela === 4) ? true : false);
        setSex((sentinela === 5) ? true : false);

    }, [sentinela])

    const plus = (b) => setSentinela(b);
    return (
        <Center>
            <p>nombre: {Name} equipo: {Rc} asociado: {AsociateNumber} horometro: {Horometer} descargada:{BateryIn} cargada: {BateryOut}</p>
            <Camps>
                <DivFocus bool={prim}>
                    <TextField
                        error={ErrorName}
                        helperText={ErrorName ? text : ""}
                        id={"AsociateName"}
                        onClick={()=>plus(0)}
                        onChange={(e) => setName(e.target.value)}
                        onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                plus(1);
                                document.getElementById("RcNumber").focus();

                            }
                        }
                        }
                        label="Nombre"
                        variant="outlined" />
                </DivFocus>
                <DivFocus bool={seg}>
                    <TextField
                        error={ErrorRc}
                        helperText={ErrorRc ? text : ""}
                        id={"RcNumber"}
                        onClick={()=>plus(1)}
                        onChange={(e) => setRc(e.target.value)}
                        onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                plus(2);
                                document.getElementById("AsociateNumber").focus();

                            }
                        }
                        }
                        label="#Equipo (RC, WP, etc...)"
                        variant="outlined" />
                </DivFocus>
                <DivFocus bool={ter}>
                    <TextField
                        error={ErrorAsociateNumber}
                        helperText={ErrorAsociateNumber ? text : ""}
                        id={"AsociateNumber"}
                        onClick={()=>plus(2)}
                        onChange={(e) => setAsociateNumber(e.target.value)}
                        onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                document.getElementById("Horometer").focus();
                                plus(3);
                            }
                        }
                        }
                        label="#Asociado o agencia"
                        variant="outlined" />
                </DivFocus>
                <DivFocus bool={cuar}>
                    <TextField
                        error={ErrorHorometer}
                        helperText={ErrorHorometer ? text : ""}
                        id={"Horometer"}
                        onClick={()=>plus(3)}
                        onChange={(e) => setHorometer(e.target.value)}
                        onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                document.getElementById("BateryIn").focus();
                                plus(4);
                            }
                        }
                        }
                        label="Horometro del equipo"
                        variant="outlined" />
                </DivFocus>
                <DivFocus bool={quin}>
                    <TextField
                        error={ErrorInn}
                        helperText={ErrorInn ? text : ""}
                        id={"BateryIn"}
                        onClick={()=>plus(4)}
                        onChange={(e) => setBateryIn(e.target.value)}
                        onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                document.getElementById("BateryOut").focus();
                                plus(5);
                            }
                        }
                        }
                        label="#Bateria descargada"
                        variant="outlined" />
                </DivFocus>
                <DivFocus bool={sex}>
                    <TextField
                        error={ErrorOut}
                        helperText={ErrorOut ? text : ""}
                        id={"BateryOut"}
                        onClick={()=>plus(5)}
                        onChange={(e) => setBateryOut(e.target.value)}
                        onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                document.getElementById("AsociateName").focus();
                                plus(0);
                            }
                        }
                        }
                        label="#Bateria cargada"
                        variant="outlined" />
                </DivFocus>
            </Camps>


            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<FontAwesomeIcon size="2x" icon={faPaperPlane} />}
                onClick={() => {
                    setErrorName(InverterBool(ErrorName));
                    setErrorRc(InverterBool(ErrorRc));
                    setErrorAsociateNumber(InverterBool(ErrorAsociateNumber));
                    setErrorHorometer(InverterBool(ErrorHorometer));
                    setErrorInn(InverterBool(ErrorInn));
                    setErrorOut(InverterBool(ErrorOut));
                }}
            >
                Send
            </Button>

        </Center>
    )
}
