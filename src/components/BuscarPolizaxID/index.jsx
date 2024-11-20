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
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { BuscarPolizasMovil, BuscarPolizasVehicular, BuscarPolizasInmobiliaria, ActualizarPolizasMovil,ActualizarPolizasVehicular,ActualizarPolizasInmobiliaria,EliminarPolizasMovil, EliminarPolizasVehicular, EliminarPolizasInmobiliaria } from '../../Api/scripts.jsx';

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
        { label: 'Fecha Inicio', name: 'fechaInicio' },
        { label: 'Fecha Fin', name: 'fechaFin' },
        { label: 'Monto Asegurado', name: 'montoAsegurado' },
        { label: 'Modelo Móvil', name: 'modeloMovil' },
        { label: 'Marca Móvil', name: 'marcaMovil' },
    ],
    vehicular: [
        { label: 'DNI Asegurado', name: 'dniAsegurado' },
        { label: 'Nombre Asegurado', name: 'nombreAsegurado' },
        { label: 'Fecha Inicio', name: 'fechaInicio' },
        { label: 'Fecha Fin', name: 'fechaFin' },
        { label: 'Monto Asegurado', name: 'montoAsegurado' },
        { label: 'Placa Vehículo', name: 'placaVehiculo' },
        { label: 'Modelo Vehículo', name: 'modeloVehiculo' },
    ],
    inmobiliario: [
        { label: 'DNI Asegurado', name: 'dniAsegurado' },
        { label: 'Nombre Asegurado', name: 'nombreAsegurado' },
        { label: 'Fecha Inicio', name: 'fechaInicio' },
        { label: 'Fecha Fin', name: 'fechaFin' },
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
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState('');
    const [snackbarSeverity, setSnackbarSeverity] = React.useState('success');

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
        handleClear();
        try {
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
            if (polizaCreada === undefined) {
                setSnackbarMessage('No se encontró ninguna póliza.');
                setSnackbarSeverity('warning');
            } else {
                setFormValues(polizaCreada);
                setSnackbarMessage('Búsqueda realizada correctamente');
                setSnackbarSeverity('success');
            }
            
        } catch (error) {
            setSnackbarMessage('Error al buscar la póliza');
            setSnackbarSeverity('error');
        } finally {
            setOpenSnackbar(true);
        }
    };

    const handleEdit = async () => {
        let polizaActualizada;
        const polizaEditada = { ...formValues, tipoSeguro };
        handleClear();
        try {
            switch (tipoSeguro) {
                case 'movil':
                    polizaActualizada = await ActualizarPolizasMovil(idSeguro);
                    break;
                case 'vehicular':
                    polizaActualizada = await ActualizarPolizasVehicular(idSeguro);
                    break;
                case 'inmobiliario':
                    polizaActualizada = await ActualizarPolizasInmobiliaria(idSeguro);
                    break;
                default:
                    console.log('Tipo de seguro no reconocido');
            }
            setFormValues("");
            setSnackbarMessage('Modificacion realizada correctamente');
            setSnackbarSeverity('success');
            
        } catch (error) {
            setSnackbarMessage('Error al Modificar la póliza');
            setSnackbarSeverity('error');
        } finally {
            setOpenSnackbar(true);
        }
    };

    const handleEliminar = async () => {
        let polizaActualizada;
        const polizaEditada = { ...formValues, tipoSeguro };
        handleClear();
        try {
            switch (tipoSeguro) {
                case 'movil':
                    polizaActualizada = await EliminarPolizasMovil(idSeguro,formValues);
                    break;
                case 'vehicular':
                    polizaActualizada = await EliminarPolizasVehicular(idSeguro,formValues);
                    break;
                case 'inmobiliario':
                    polizaActualizada = await EliminarPolizasInmobiliaria(idSeguro,formValues);
                    break;
                default:
                    console.log('Tipo de seguro no reconocido');
            }
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
            setSnackbarMessage('Eliminacion realizada correctamente');
            setSnackbarSeverity('success');
            
        } catch (error) {
            setSnackbarMessage('Error al Modificar la póliza');
            setSnackbarSeverity('error');
        } finally {
            setOpenSnackbar(true);
        }
    };

    const renderFormFields = () => {
        return formFieldsConfig[tipoSeguro]?.map((field) => (
            <Grid item xs={12} sm={field.type === 'date' ? 2 : 4} key={field.name}>
                <Item>
                    <TextField
                        fullWidth
                        label={field.label}
                        variant="outlined"
                        name={field.name}
                        type={field.type || 'text'}
                        value={formValues[field.name]}
                        onChange={handleInputChange}
                        InputLabelProps={field.type === 'date' ? { shrink: true } : {}}
                    />
                </Item>
            </Grid>
        ));
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

                <Grid item xs={12}>
                    <Item><h1>Búsqueda de Póliza por ID</h1></Item>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={2} alignItems="center">
                        
                        <Grid item xs={3}>
                            <FormControl fullWidth>
                                <InputLabel>Tipo de Seguro</InputLabel>
                                <Select
                                    value={tipoSeguro}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="movil">Seguro Móvil</MenuItem>
                                    <MenuItem value="vehicular">Seguro Vehicular</MenuItem>
                                    <MenuItem value="inmobiliario">Seguro Inmobiliario</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                label="ID del Seguro"
                                value={idSeguro}
                                onChange={handleChange2}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="contained" color="primary" onClick={handleSource}>
                                Buscar
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined" color="secondary" onClick={handleClear}>
                                Limpiar
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="contained" color="primary" onClick={handleEdit}>
                                Editar
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="contained" color="primary" onClick={handleEliminar}>
                                Eliminar
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

                {tipoSeguro && (
                    <>
                        <Grid item xs={12}>
                            <Item><h2>Datos de la Póliza</h2></Item>
                        </Grid>
                        {renderFormFields()}
                    </>
                )}
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={6000}
                    onClose={() => setOpenSnackbar(false)}
                >
                    <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity} sx={{ width: '100%' }}>
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
            </Grid>
        </Box>
    );
}