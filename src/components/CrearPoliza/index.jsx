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
                console.log('Tipo de seguro no reconocido');
        }
        setPolizas([...polizas, nuevaPoliza]);
        handleClear();
        console.log(polizas); 
        
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
        <div>
            <h1 style={{ display: 'flex', justifyContent: 'center', mt: 2 }}>Registrar Póliza</h1>
            <h2 style={{ display: 'flex', justifyContent: 'left', mt: 2 , marginBottom: '10px',marginTop: '10px'}}>Elije el tipo de poliza</h2>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Item>
                            <FormControl fullWidth>
                                <InputLabel id="tipo-seguro-label">Tipo de Seguro</InputLabel>
                                <Select
                                    labelId="tipo-seguro-label"
                                    id="tipo-seguro"
                                    value={tipoSeguro}
                                    label="Tipo de Seguro"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="movil">Seguro Móvil</MenuItem>
                                    <MenuItem value="vehicular">Seguro Vehicular</MenuItem>
                                    <MenuItem value="inmobiliario">Seguro Inmobiliario</MenuItem>
                                </Select>
                            </FormControl>
                        </Item>
                    </Grid>
                    <Grid item xs={12}>
                        <h3 style={{ display: 'flex', justifyContent: 'left', mt: 2 , marginBottom: '10px',marginTop: '10px'}}>Ingresa los datos para el registro de tu poliza {tipoSeguro}</h3>
                    </Grid>

                    {renderFormFields()}
                    {tipoSeguro && (
                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                <Button variant="contained" color="primary" onClick={handleRegister}>Registrar</Button>
                                <Button variant="outlined" color="secondary" onClick={handleClear}>Limpiar</Button>
                            </Box>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </div>

    );
}