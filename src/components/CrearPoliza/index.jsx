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
import { CrearPolizaMovil, CrearPolizaVehicular, CrearPolizaInmobiliaria } from '../../Api/scripts.jsx';

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
        { label: 'Fecha Inicio', name: 'fechaInicio', type: 'date' },
        { label: 'Fecha Fin', name: 'fechaFin', type: 'date' },
        { label: 'Monto Asegurado', name: 'montoAsegurado' },
        { label: 'Modelo Móvil', name: 'modeloMovil' },
        { label: 'Marca Móvil', name: 'marcaMovil' },
    ],
    vehicular: [
        { label: 'DNI Asegurado', name: 'dniAsegurado' },
        { label: 'Nombre Asegurado', name: 'nombreAsegurado' },
        { label: 'Fecha Inicio', name: 'fechaInicio', type: 'date' },
        { label: 'Fecha Fin', name: 'fechaFin', type: 'date' },
        { label: 'Monto Asegurado', name: 'montoAsegurado' },
        { label: 'Placa Vehículo', name: 'placaVehiculo' },
        { label: 'Modelo Vehículo', name: 'modeloVehiculo' },
    ],
    inmobiliario: [
        { label: 'DNI Asegurado', name: 'dniAsegurado' },
        { label: 'Nombre Asegurado', name: 'nombreAsegurado' },
        { label: 'Fecha Inicio', name: 'fechaInicio', type: 'date' },
        { label: 'Fecha Fin', name: 'fechaFin', type: 'date' },
        { label: 'Monto Asegurado', name: 'montoAsegurado' },
        { label: 'Dirección Inmueble', name: 'direccionInmueble' },
        { label: 'Valor Inmueble', name: 'valorInmueble' },
    ],
};

export default function CrearPoliza() {
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
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState('');
    const [snackbarSeverity, setSnackbarSeverity] = React.useState('success');

    const handleChange = (event) => {
        setTipoSeguro(event.target.value);
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

    const handleRegister = async () => {
        debugger
        const nuevaPoliza = { ...formValues, tipoSeguro };
        let polizaCreada;
        try {
            switch (tipoSeguro) {
                case 'movil':
                    polizaCreada = await CrearPolizaMovil(formValues);
                    break;
                case 'vehicular':
                    polizaCreada = await CrearPolizaVehicular(formValues);
                    break;
                case 'inmobiliario':
                    polizaCreada = await CrearPolizaInmobiliaria(formValues);
                    break;
                default:
                    throw new Error('Tipo de seguro no reconocido');
            }
            setPolizas([...polizas, nuevaPoliza]);
            handleClear();
            setSnackbarMessage('Póliza registrada correctamente');
            setSnackbarSeverity('success');
        } catch (error) {
            setSnackbarMessage('Error al registrar la póliza');
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
                    <Item><h1>Registrar Póliza</h1></Item>
                </Grid>

                <Grid item xs={4}>
                    <h2>Ingresa el tipo de seguro:</h2>
                    <Item>
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
                    </Item>

                </Grid>
                {tipoSeguro && (
                    <>
                        <Grid item xs={12}>
                            <Item><h2>Ingresa los datos para el registro de tu poliza {tipoSeguro}</h2></Item>
                        </Grid>
                        {renderFormFields()}
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" onClick={handleRegister}>
                                Registrar
                            </Button>
                            <Button variant="outlined" color="secondary" onClick={handleClear} style={{ marginLeft: '10px' }}>
                                Limpiar
                            </Button>
                        </Grid>
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