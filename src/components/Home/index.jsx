import { TextField, Container, Grid, Typography, Box, Paper } from "@mui/material";
import React, { useState } from "react";
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Container style={{ backgroundColor: '#e0f7fa', minHeight: '100vh', padding: '20px' }}>
            <header>
                <Typography variant="h2" align="center" gutterBottom style={{ color: '#0d47a1' }}>
                    BIENVENIDOS A SegurAI
                </Typography>
                <Typography variant="h5" align="center" gutterBottom style={{ color: '#1b5e20' }}>
                    "Protegiendo tu futuro, hoy."
                </Typography>
            </header>
            <main>
                <Box my={4}>
                    <Typography variant="h4" align="center" gutterBottom style={{ color: '#b71c1c' }}>
                        Sobre Nosotros
                    </Typography>
                    <Paper elevation={3} style={{ padding: '20px', border: '1px solid #ccc', backgroundColor: '#ffffff' }}>
                        <Typography variant="body1" align="center" style={{ color: '#3e2723', fontSize: '1.2rem', lineHeight: '1.6' }}>
                            SegurAI es una aseguradora innovadora que utiliza inteligencia artificial para ofrecer las mejores soluciones de seguros a nuestros clientes.
                        </Typography>
                    </Paper>
                    <Box display="flex" justifyContent="center" my={4}>
                        <Diversity2OutlinedIcon style={{ fontSize: '100px', color: 'rgba(0, 0, 0, 0.5)' }} />
                    </Box>
                </Box>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} style={{ padding: '20px', border: '1px solid #ccc', backgroundColor: '#ffffff' }}>
                            <Typography variant="h4" align="center" gutterBottom style={{ color: '#0d47a1' }}>
                                Metas
                            </Typography>
                            <ul style={{ color: '#3e2723' }}>
                                <li>Proveer seguros accesibles y personalizados.</li>
                                <li>Utilizar tecnología avanzada para mejorar la experiencia del cliente.</li>
                                <li>Expandir nuestra presencia globalmente.</li>
                            </ul>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} style={{ padding: '20px', border: '1px solid #ccc', backgroundColor: '#ffffff' }}>
                            <Typography variant="h4" align="center" gutterBottom style={{ color: '#1b5e20' }}>
                                Visión
                            </Typography>
                            <Typography variant="body1" align="center" style={{ color: '#3e2723' }}>
                                Ser la aseguradora líder en innovación y satisfacción del cliente a nivel mundial.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} style={{ padding: '20px', border: '1px solid #ccc', backgroundColor: '#ffffff' }}>
                            <Typography variant="h4" align="center" gutterBottom style={{ color: '#b71c1c' }}>
                                Misión
                            </Typography>
                            <Typography variant="body1" align="center" style={{ color: '#3e2723' }}>
                                Proteger a nuestros clientes con soluciones de seguros personalizadas y accesibles, utilizando la inteligencia artificial para anticipar y satisfacer sus necesidades.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </main>
        </Container>
    );
}