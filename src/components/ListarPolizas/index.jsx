import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import { ListarPolizasMovil, ListarPolizasVehiculares, ListarPolizasInmobiliarias } from '../../Api/scripts.jsx';

const ButtonContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
});

const ButtonGroupStyled = styled(ButtonGroup)({
    gap: '20px',
});

const TableContainerStyled = styled(TableContainer)({
    marginTop: '20px',
});

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

const columnsMoviles = [
    { id: 'id', label: 'ID', minWidth: 50 },
    { id: 'dniAsegurado', label: 'DNI Asegurado', minWidth: 100 },
    { id: 'nombreAsegurado', label: 'Nombre Asegurado', minWidth: 170 },
    { id: 'fechaInicio', label: 'Fecha Inicio', minWidth: 100 },
    { id: 'fechaFin', label: 'Fecha Fin', minWidth: 100 },
    { id: 'montoAsegurado', label: 'Monto Asegurado', minWidth: 100 },
    { id: 'modeloMovil', label: 'Modelo Movil', minWidth: 100 },
    { id: 'marcaMovil', label: 'Marca Movil', minWidth: 100 },
];

const columnsVehicular = [
    { id: 'id', label: 'ID', minWidth: 50 },
    { id: 'dniAsegurado', label: 'DNI Asegurado', minWidth: 100 },
    { id: 'nombreAsegurado', label: 'Nombre Asegurado', minWidth: 170 },
    { id: 'fechaInicio', label: 'Fecha Inicio', minWidth: 100 },
    { id: 'fechaFin', label: 'Fecha Fin', minWidth: 100 },
    { id: 'montoAsegurado', label: 'Monto Asegurado', minWidth: 100 },
    { id: 'placaVehiculo', label: 'Placa Vehiculo', minWidth: 100 },
    { id: 'modeloVehiculo', label: 'Modelo Vehiculo', minWidth: 100 },
];

const columnsInmobiliaria = [
    { id: 'id', label: 'ID', minWidth: 50 },
    { id: 'dniAsegurado', label: 'DNI Asegurado', minWidth: 100 },
    { id: 'nombreAsegurado', label: 'Nombre Asegurado', minWidth: 170 },
    { id: 'fechaInicio', label: 'Fecha Inicio', minWidth: 100 },
    { id: 'fechaFin', label: 'Fecha Fin', minWidth: 100 },
    { id: 'montoAsegurado', label: 'Monto Asegurado', minWidth: 100 },
    { id: 'direccionInmueble', label: 'Direccion Inmueble', minWidth: 170 },
    { id: 'valorInmueble', label: 'Valor Inmueble', minWidth: 100 },
];

export default function ListarPolizas() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [showTable, setShowTable] = React.useState(false);
    const [columns, setColumns] = React.useState([]);
    const [rows, setRows] = React.useState([]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleButtonClick = async (type) => {
        setShowTable(true);
        switch (type) {
            case 'moviles':
                setColumns(columnsMoviles);
                const polizasMoviles = await ListarPolizasMovil();
                setRows(polizasMoviles);
                break;
            case 'vehicular':
                setColumns(columnsVehicular);
                const polizasVehiculares = await ListarPolizasVehiculares();
                setRows(polizasVehiculares);
                break;
            case 'inmobiliaria':
                setColumns(columnsInmobiliaria);
                const polizasInmobiliaria = await ListarPolizasInmobiliarias();
                setRows(polizasInmobiliaria);
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <h1 style={{ display: 'flex', justifyContent: 'center', mt: 1 }}>Tablas de Pólizas</h1>
            <h3 style={{ display: 'flex', justifyContent: 'left', mt: 1 }}>Elije que tipo de Poliza que deseas buscar:</h3>
            <Paper>
            
                <ButtonContainer>
                    
                    <ButtonGroupStyled variant="contained" aria-label="outlined primary button group">
                        <Button onClick={() => handleButtonClick('moviles')}>Polizas Moviles</Button>
                        <Button onClick={() => handleButtonClick('vehicular')}>Polizas Vehiculares</Button>
                        <Button onClick={() => handleButtonClick('inmobiliaria')}>Polizas Inmoviliarias</Button>
                    </ButtonGroupStyled>
                </ButtonContainer>
                {showTable && (
                    <TableContainerStyled>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth, backgroundColor: 'darkblue', color: 'white' }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </TableContainerStyled>
                )}
            </Paper>
        </div>

    );
}