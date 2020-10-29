// eslint-disable-next-line no-unused-expressions
'use strict'
import React from 'react';
import { validate } from "./rut";
export default function MiValidador(params) {
    const [rutIngresado, setRutIngresado] = React.useState(params.valor);
    console.log(rutIngresado);


    const [clave, setClave] = React.useState("");
    console.log(clave);




    const change = (e) => {
        setRutIngresado(e.target.value)
    }

    const onChangePassword = (e) => {
        setClave(e.target.value)
    }


    if (clave == "uvalpo") return <p > Maravilloso < /p>
    return ( < div >
        <
        input type = "text"
        value = { rutIngresado }
        onChange = { change }
        / > { validate(rutIngresado) &&  <
        input type = "password"
        value = { clave }
        // eslint-disable-next-line no-undef
        onChange = { onChangePassword }

        / >

    } < /
    div > )
}
