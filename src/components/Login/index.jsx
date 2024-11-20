import React, { useState } from 'react';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';

export default function Login({ onLoginSuccess }) {
    const LoginCorrecto = {
        usuario: "Master",
        Password: "Master",
    };

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const validarLogin = (event) => {
        event.preventDefault();
        if (usuario === LoginCorrecto.usuario && password === LoginCorrecto.Password) {
            console.log('Login exitoso');
            setError('');
            onLoginSuccess(); 
        } else {
            setError('Usuario o contraseña incorrectos');
            setUsuario(''); 
            setPassword(''); 
        }
    };

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '320px',
            padding: '40px',
            borderRadius: '30px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
        },
        input: {
            width: '100%',
            marginBottom: '20px',
            padding: '12px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '16px',
        },
        button: {
            width: '100%',
            padding: '12px',
            borderRadius: '50px',
            border: 'none',
            backgroundColor: '#007bff',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s ease',
        },
        buttonHover: {
            backgroundColor: '#0056b3',
        },
        error: {
            color: 'red',
            marginBottom: '20px',
        },
        icon: {
            fontSize: '50px',
            color: '#007bff',
            marginBottom: '20px',
        },
        title: {
            marginBottom: '30px',
            color: '#333',
            fontSize: '24px',
            fontWeight: 'bold',
        },
        label: {
            width: '100%',
            marginBottom: '10px',
            color: '#333',
            fontSize: '14px',
            fontWeight: 'bold',
        },
    };

    return (
        <div style={styles.container}>
            <form onSubmit={validarLogin} style={styles.form}>
                <Diversity2OutlinedIcon style={styles.icon} />
                <h2 style={styles.title}>SegurAI</h2>
                <label style={styles.label}>
                    USUARIO:
                    <input
                        type="text"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        required
                        style={styles.input}
                    />
                </label>
                <label style={styles.label}>
                    CONTRASEÑA:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={styles.input}
                    />
                </label>
                {error && <div style={styles.error}>{error}</div>}
                <button
                    type="submit"
                    style={styles.button}
                    onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
                    onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
                >
                    Login
                </button>
            </form>
        </div>
    );
}