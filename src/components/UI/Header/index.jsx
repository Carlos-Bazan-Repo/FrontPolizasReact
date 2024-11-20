import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';

export default function Header({ onMenuClick }) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (view) => {
        onMenuClick(view);
        handleMenuClose();
    };

    let nombreEmpresa = "SegurAI";

    return (
        <div>

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Diversity2OutlinedIcon fontSize="large" />
                        <h1 style={{ display: 'flex', justifyContent: 'center', mt: 2, fontSize: '50px', color: "#102C54" }} >{nombreEmpresa}</h1>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', color: 'navy' }}>
                            <label style={{ display: 'flex', justifyContent: 'right', color: 'white' }}>Menu</label>
                        </Typography>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenuOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={() => handleMenuItemClick('Home')}>Inicio</MenuItem>
                            <MenuItem onClick={() => handleMenuItemClick('crear-poliza')}>Registrar Poliza</MenuItem>
                            <MenuItem onClick={() => handleMenuItemClick('buscar-poliza')}>Buscar Poliza</MenuItem>
                            <MenuItem onClick={() => handleMenuItemClick('listar-polizas')}>Listar Polizas</MenuItem>

                        </Menu>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>

    );
}