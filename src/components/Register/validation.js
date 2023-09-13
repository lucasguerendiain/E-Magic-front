export function validation(inputs) {
    let errors = {};
    const {username, password, confirmPassword} = inputs;
    if (!username || username.length > 35 || username.length < 3) {
        errors.username = "el nombre de usuario debe tener mas de 3 letras y menos de 35";
    }
    if (!password || password.length < 6 || password.length > 16 || !(/\d/.test(password))) {
        errors.password = "La contraseña debe tener entre 6 y 16 caracteres y al menos un numero";
    }
    if (!confirmPassword || confirmPassword !== password) {
        errors.confirmPassword = "confirmaste mal la contraseña"
    }
    
    return errors;
}