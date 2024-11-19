import React, { useState } from 'react';

export default function Login({ onLoginSuccess }) {
    const LoginCorrecto = {
        usuario: "1",
        Password: "1",
    };

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const validarLogin = (event) => {
        event.preventDefault();
        if (usuario === LoginCorrecto.usuario && password === LoginCorrecto.Password) {
            console.log('Login exitoso');
            setError('');
            onLoginSuccess(); // Llama a la función pasada como prop
        } else {
            setError('Usuario o contraseña incorrectos');
            setUsuario(''); // Borra el contenido del campo de usuario
            setPassword(''); // Borra el contenido del campo de contraseña
        }
    };

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#f0f2f5',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            width: '300px',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
        },
        input: {
            marginBottom: '15px',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
        },
        button: {
            padding: '10px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007bff',
            color: '#fff',
            cursor: 'pointer',
        },
        error: {
            color: 'red',
            marginBottom: '15px',
        },
    };

    return (
        <div style={styles.container}>
            <form onSubmit={validarLogin} style={styles.form}>
                <h2 style={{ display: 'flex', justifyContent: 'center', mt: 2 }}>SegurAI</h2>
                <label>
                    Usuario:
                    <input
                        type="text"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        required
                        style={styles.input}
                    />
                </label>
                <label>
                    Contraseña:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={styles.input}
                    />
                </label>
                {error && <div style={styles.error}>{error}</div>}
                <button type="submit" style={styles.button}>Login</button>
            </form>
        </div>
    );
}