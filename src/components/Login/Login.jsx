import { useEffect, useState } from "react";
import "./Login.css";
import { validation } from "./validation";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from "react-router-dom";

function Login() {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        username: "",
        password: "",
    });
    const [viewPassword, setViewPassword] = useState(false);

    function handleChange(e) {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    }

    function handleView() {
        setViewPassword(!viewPassword);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (Object.values(errors).length < 1) {
            console.log("logueado??");
        } else alert("te fallan los campos");
    }

    useEffect(() => {
        setErrors(validation(inputs));
    }, [inputs]);

    return (
        <Box display="flex" className="background" flexDirection="column">
            <Typography variant="h4">Iniciar sesión</Typography>
            <Grid className="main" display="flex" flexDirection="column">
                <Grid className="inputContainer">
                    <TextField
                        type="text"
                        name="username"
                        value={inputs.username}
                        placeholder="nombre de usuario"
                        onChange={handleChange}
                        fullWidth
                    />
                    {/*aca va el manejo de errores*/}
                </Grid>
                <Grid className="inputContainer">
                    <TextField
                        type={viewPassword? "text" : "password"}
                        name="password"
                        value={inputs.password}
                        placeholder="contraseña"
                        onChange={handleChange}
                        fullWidth
                    />
                    <Button type="button" onClick={handleView}>{viewPassword? <VisibilityIcon/> : <VisibilityOffIcon/>}</Button>
                    {/*aca va el manejo de errores*/}
                </Grid>
                <Button variant="contained" size="medium" onClick={handleSubmit}>confirmar</Button>
                <Link to="/register">
                    <Typography variant="h6">no tenes cuenta? registrate</Typography>
                </Link>
            </Grid>
        </Box>
    )
}

export default Login;