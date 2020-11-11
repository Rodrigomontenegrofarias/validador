import React from "react";
import logo from './logo.svg';
import "./App.css";
//import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap';
//import { Button } from "@material-ui/core";
import MiComponente from './MiComponente';
import MiValidador from './MiValidador';

function App() {
    return ( 
        <div className = "App" >

            <header className = "App-header" >
                
                <p> clave de usuario : uvalpo
                    <br/>
                <MiValidador valor = "193385745"/>
                </p>
                
                <MiComponente/>
            </header> 
        </div >
    );
}

export default App;
