import { useEffect, useState } from "react";
import "./Register.css";
import { validation } from "./validation";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from "react-router-dom";


function Register() {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({
        username: "",
        password: "",
        confirmPassword: "",
    });
    const [viewPassword, setViewPassword] = useState(false);

    function handleView() {
        setViewPassword(!viewPassword);
    }

    function handleChange(e) {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (Object.values(errors).length < 1) {
            console.log(inputs);
        } else {
            console.log(errors);
            alert("sos tonto");
        }
    }

    useEffect(() => {
        setErrors(validation(inputs));
    }, [inputs]);

    return (
        <Box className="background" display="flex" flexDirection="column">
            <Typography variant="h4">Registrarse</Typography>
            <Grid className="main" display="flex" flexDirection="column">
                <Grid className="inputContainer">
                    <TextField
                        type="text"
                        name="username"
                        placeholder="nombre de usuario"
                        value={inputs.username}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid className="inputContainer">
                    <TextField
                        type={viewPassword? "text" : "password"}
                        name="password"
                        placeholder="contraseña"
                        value={inputs.password}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid className="inputContainer">
                    <TextField
                        type={viewPassword? "text" : "password"}
                        name="confirmPassword"
                        placeholder="confirmar contraseña"
                        value={inputs.confirmPassword}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Button size="small" onClick={handleView}>{viewPassword? <VisibilityIcon/> :<VisibilityOffIcon/>}</Button>
                <Button onClick={handleSubmit} variant="contained" size="large">confirmar</Button>
                <Link to="/login">
                    <Typography variant="h6">ya tenes cuenta? logueate</Typography>
                </Link>
            </Grid>
        </Box>
    )
}

export default Register;