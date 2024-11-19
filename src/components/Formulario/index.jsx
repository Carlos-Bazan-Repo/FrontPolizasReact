import { TextField } from "@mui/material";
import React from "react";

export default function Formulario() {

    return (
        <div>
            <TextField label="DNI del asegurado" />
            <TextField label="Nombre del asegurado" />
            <TextField label="Fecha de Inicio" />
            <TextField label="Fecha de Fin" />
        </div>

    )
}