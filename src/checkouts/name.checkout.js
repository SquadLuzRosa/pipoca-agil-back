export const checkName = async (req, res) => {
    console.log(req)
    const name = req
    if(name.replace(" ","").length > 255){
        return JSON.stringify({
            "error_status": 400,
            "error_menssage": "Nome inválido, maximo de caracteres excedido!"
        });
    }
    if(name.split(' ')[0].length < 3){
        return JSON.stringify({
            "error_status": 400,
            "error_menssage": "Nome inválido, o nome deve conter no minímo 3 caracteres"
        });
    }
    if(name.split(' ')[1].length < 3){
        return JSON.stringify({
            "error_status": 400,
            "error_menssage": "Sobrenome inválido, o sobrenome deve conter no minímo 3 caracteres"
        });
    }
    const regNome = /^(?=.*[$*&@#.,;><)([{}=+%$!?/:_-])/
    if (name.match(regNome) != null){
        return JSON.stringify({
            "error_status": 400,
            "error_menssage": "Nome inválido, carcatres especiais detectado"
        });
    }

    const regNome2 = /^(?=.*\d)/
    if (name.match(regNome2) != null){
        return JSON.stringify({
            "error_status": 400,
            "error_menssage": "Nome inválido, número detectado"
        });
    }else{
        return true;
    }
}