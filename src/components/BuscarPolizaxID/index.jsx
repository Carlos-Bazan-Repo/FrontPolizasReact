import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { BuscarPolizasMovil, BuscarPolizasVehicular, BuscarPolizasInmobiliaria } from '../../Api/scripts.jsx';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const formFieldsConfig = {
    movil: [
        { label: 'DNI Asegurado', name: 'dniAsegurado' },
        { label: 'Nombre Asegurado', name: 'nombreAsegurado' },
        { label: 'Fecha Inicio', name: 'fechaInicio'},
        { label: 'Fecha Fin', name: 'fechaFin' },
        { label: 'Monto Asegurado', name: 'montoAsegurado' },
        { label: 'Modelo Móvil', name: 'modeloMovil' },
        { label: 'Marca Móvil', name: 'marcaMovil' },
    ],
    vehicular: [
        { label: 'DNI Asegurado', name: 'dniAsegurado' },
        { label: 'Nombre Asegurado', name: 'nombreAsegurado' },
        { label: 'Fecha Inicio', name: 'fechaInicio'},
        { label: 'Fecha Fin', name: 'fechaFin' },
        { label: 'Monto Asegurado', name: 'montoAsegurado' },
        { label: 'Placa Vehículo', name: 'placaVehiculo' },
        { label: 'Modelo Vehículo', name: 'modeloVehiculo' },
    ],
    inmobiliario: [
        { label: 'DNI Asegurado', name: 'dniAsegurado' },
        { label: 'Nombre Asegurado', name: 'nombreAsegurado' },
        { label: 'Fecha Inicio', name: 'fechaInicio'},
        { label: 'Fecha Fin', name: 'fechaFin'},
        { label: 'Monto Asegurado', name: 'montoAsegurado' },
        { label: 'Dirección Inmueble', name: 'direccionInmueble' },
        { label: 'Valor Inmueble', name: 'valorInmueble' },
    ],
};

export default function BuscarPoliza() {
    const [tipoSeguro, setTipoSeguro] = React.useState('');
    const [formValues, setFormValues] = React.useState({
        dniAsegurado: '',
        nombreAsegurado: '',
        fechaInicio: '',
        fechaFin: '',
        montoAsegurado: '',
        modeloMovil: '',
        marcaMovil: '',
        placaVehiculo: '',
        modeloVehiculo: '',
        direccionInmueble: '',
        valorInmueble: ''
    });
    const [polizas, setPolizas] = React.useState([]);
    const [idSeguro, setIdSeguro] = React.useState('');

    const handleChange = (event) => {
        setTipoSeguro(event.target.value);
    };

    const handleChange2 = (event) => {
        setIdSeguro(event.target.value);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleClear = () => {
        setFormValues({
            dniAsegurado: '',
            nombreAsegurado: '',
            fechaInicio: '',
            fechaFin: '',
            montoAsegurado: '',
            modeloMovil: '',
            marcaMovil: '',
            placaVehiculo: '',
            modeloVehiculo: '',
            direccionInmueble: '',
            valorInmueble: ''
        });
    };

    const handleSource = async () => {

        let polizaCreada;
        handleClear()
        switch (tipoSeguro) {
            case 'movil':
                polizaCreada = await BuscarPolizasMovil(idSeguro);
                break;
            case 'vehicular':
                polizaCreada = await BuscarPolizasVehicular(idSeguro);
                break;
            case 'inmobiliario':
                polizaCreada = await BuscarPolizasInmobiliaria(idSeguro);
                break;
            default:
                console.log('Tipo de seguro no reconocido');
        }
        if (polizaCreada) {
            setFormValues(polizaCreada);
        }
    };

    const renderFormFields = () => {
        return formFieldsConfig[tipoSeguro]?.map((field) => (
            <Grid item xs={12} sm={field.type === 'date' ? 6 : 6} key={field.name}>
                <TextField
                key={field.name}
                label={field.label}
                name={field.name}
                type={field.type || 'text'}
                value={formValues[field.name]}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
            />
            </Grid>
            
        ));
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item>
                        <h2>Búsqueda de Póliza por ID</h2>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <FormControl fullWidth>
                            <InputLabel>Tipo de Seguro</InputLabel>
                            <Select value={tipoSeguro} onChange={handleChange}>
                                <MenuItem value="movil">Seguro Móvil</MenuItem>
                                <MenuItem value="vehicular">Seguro Vehicular</MenuItem>
                                <MenuItem value="inmobiliario">Seguro Inmobiliario</MenuItem>
                            </Select>
                        </FormControl>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <TextField
                            label="ID del Seguro"
                            value={idSeguro}
                            onChange={handleChange2}
                            fullWidth
                            margin="normal"
                        />
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Button variant="contained" color="primary" onClick={handleSource}>
                            Buscar
                        </Button>
                    </Item>
                    <Item>
                        <Button variant="contained" color="primary" onClick={handleClear}>
                            Limpiar
                        </Button>
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Item>
                        <h3>Datos de la Póliza</h3>
                        {tipoSeguro && renderFormFields()}
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}