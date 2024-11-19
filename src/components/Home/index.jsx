import { TextField } from "@mui/material";
import React from "react";

export default function Home() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleMenu}>
                {isOpen ? 'Cerrar Menú' : 'Abrir Menú'}
            </button>
            {isOpen && (
                <ul>
                    <li><button onClick={() => alert('Crear Póliza')}>Crear Póliza</button></li>
                    <li><button onClick={() => alert('Listar Pólizas')}>Listar Pólizas</button></li>
                    <li><button onClick={() => alert('Buscar Póliza')}>Buscar Póliza</button></li>
                    <li><button onClick={() => alert('Modificar Póliza')}>Modificar Póliza</button></li>
                    <li><button onClick={() => alert('Eliminar Póliza')}>Eliminar Póliza</button></li>
                </ul>
            )}
        </div>
    );
}