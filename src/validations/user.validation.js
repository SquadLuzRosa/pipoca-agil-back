import * as yup from "yup";
import { getEmailUser, getPhoneUser } from "../repositorys/user.repository";

export const userValidation =  yup.object({
    
    name: yup.string().required().max(255),
    email: yup.string().required().email(),
    phone: yup.string().required().min(9),
    dateOfBirth: yup.string().required(),
    password: yup.string().required().min(8),

});


export const userDataValidation = async (req, res) => {
    
    if(!req.name || req.name == null || req.name == undefined || req.name == ''|| req.name.replace(" ","") == '' || req.name.replace(" ","").length == 0){
        
        return JSON.stringify({
            "error_status": 400,
            "error_menssage": "Nome é obrigatório"
        });
    }

    if(!req.email){
        return JSON.stringify({
            "error_status": 400,
            "error_menssage": "E-mail é obrigatório"
        });
    }
    
    if(!req.phone){
        return JSON.stringify({
            "error_status": 400,
            "error_menssage": "Telefone é obrigatório"
        });
    }

    if(!req.dateOfBirth){
        return JSON.stringify({
            "error_status": 400,
            "error_menssage": "Data de nascimento é obrigatória"
        });
    }

    if(!req.password){
        return JSON.stringify({
            "error_status": 400,
            "error_menssage": "Senha é obrigatória"
        });
    }

    if(!req.confirmPassword){
       
        return JSON.stringify({
            "error_status": 400,
            "error_menssage": "Confirmação de Senha é obrigatória"
        });
    }



    if(req.name){
        const nameUser = req.name.split(' ');
        
        const countName = nameUser.length

        if(countName < 2){
            return JSON.stringify({
                "error_status": 400,
                "error_menssage": "Sobrenome é obrigatório"
            });
        }


        const fistNameUser = nameUser[0].length;
        const surnameUser = nameUser[1].length;
        
        
        if(req.name.length > 255){
            return JSON.stringify({
                "error_status": 400,
                "error_menssage": "Nome inválido, 'limite máximo' de caracteres excedido"
            });
        }
        if(fistNameUser < 3){
            return JSON.stringify({
                "error_status": 400,
                "error_menssage": "Nome inválido, o nome deve conter no mínimo '3 caracteres'"
            });
        }
        if(surnameUser < 3 || countName < 2){
            return JSON.stringify({
                "error_status": 400,
                "error_menssage": "Sobrenome inválido, o sobrenome deve conter no mínimo '3 caracteres'"
            });
        }
        const regNome = /^(?=.*[$*&@#.,;><)([{}=+%$!?/:_-])/
        if (req.name.match(regNome) != null){
            return JSON.stringify({
                "error_status": 400,
                "error_menssage": "Nome inválido, nome de usuário não pode conter 'caracteres especiais'"
            });
        }

        const regNome2 = /^(?=.*\d)/
        if (req.name.match(regNome2) != null){
            return JSON.stringify({
                "error_status": 400,
                "error_menssage": "Nome inválido, nome de usuário não pode conter 'números'"
            });
        }
        
        
    }
    
    
    
    if(req.email){
        var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (req.email !== '' && req.email.match(emailFormat) == null) { 
            return JSON.stringify({
                "error_status": 400,
                "error_menssage": "E-mail inválido"
            });
        }
        
    }

    

    if(req.phone){
        const phoneUser = req.phone.length;

        const phoneFormat = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[0-9])[0-9]{3}\-?[0-9]{4}$/;
        if (req.phone !== '' && req.phone.match(phoneFormat) == null) { 
            return JSON.stringify({
                "error_status": 400,
                "error_menssage": "Número de telefone inválido"
            });
        }

        if (phoneUser > 11) { 
            return JSON.stringify({
                "error_status": 400,
                "error_menssage": "Número de telefone inválido"
            });
        }


    }
    
    
    if(req.dateOfBirth){
        var regex = "\\d{2}/\\d{2}/\\d{4}";
        var dtArray = req.dateOfBirth.split("/");

        if (dtArray == null){
            return JSON.stringify({
                "error_status": 400,
                "error_menssage": "Data de nascimento inválida"
            });
        } 

        // Checks for dd/mm/yyyy format.
        var dtDay= dtArray[2];
        var dtMonth = dtArray[1];
        var dtYear = dtArray[0];
        var dtyerNow = 2023


        if ((dtyerNow - parseInt(dtYear)) < 18 ){
            return JSON.stringify({
                "error_status": 400,
                "error_menssage": "Cadastro inválido, usuário menor de idade"
            });
        }    
        if (dtMonth < 1 || dtMonth > 12){
            return JSON.stringify({
                "error_status": 400,
                "error_menssage": "Data de nascimento inválida"
            });
        }    
        if (dtDay < 1 || dtDay> 31){
            return JSON.stringify({
                "error_status": 400,
                "error_menssage": "Data de nascimento inválida"
            });
        }  
        if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31){
            return JSON.stringify({
                "error_status": 400,
                "error_menssage": "Data de nascimento inválida"
            });
        }
        if (dtMonth == 2){
            var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
            if (dtDay> 29 || (dtDay ==29 && !isleap)){
                return JSON.stringify({
                    "error_status": 400,
                    "error_menssage": "Data de nascimento inválida"
                });
            };
                
        }
        
    }
    
    
    const teste =/^(?=.*[A-Z])/
    if (req.password.match(teste) == null){
        return JSON.stringify({
            "error_status": 400,
            "error_menssage": "Senha inválida, a senha deve conter pelo menos uma letra 'maiúscula'"
        });
    }

    const teste2 = /^(?=.*[a-z])/
    if (req.password.match(teste2) == null){
        return JSON.stringify({
            "error_status": 400,
            "error_menssage": "Senha inválida, a senha deve conter pelo menos uma letra 'minúscula'"
        });
    }

    const teste3 = /^(?=.*[$*&@#])/
    if (req.password.match(teste3) == null){
        return JSON.stringify({
            "error_status": 400,
            "error_menssage": "Senha inválida, a senha deve conter pelo menos um 'caractere especial'"
        });
    }

    const teste4 = /^(?=.*\d)/
    if (req.password.match(teste4) == null){
        return JSON.stringify({
            "error_status": 400,
            "error_menssage": "Senha inválida, a senha deve conter pelo menos um 'número'"
        });
    }

    const teste5 = /^[0-9a-zA-Z$*&@#]{8,}/
    if (req.password.match(teste5) == null){
        return JSON.stringify({
            "error_status": 400,
            "error_menssage": "Senha inválida, a senha deve conter pelo menos 8 caracteres entre eles uma letra 'maiúscula', uma letra 'minúscula', um 'número' e um 'caractere especial'"
        });
    }

    if(req.password){
        const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
        if (req.password !== '' && req.password.match(password) == null) { 
            return JSON.stringify({
                "error_status": 400,
                "error_menssage": "Senha inválida"
            });
        }
        
    }

    

    const teste6 =/^(?=.*[A-Z])/
    if (req.confirmPassword.match(teste6) == null){
        return JSON.stringify({
            "error_status": 400,
            "error_menssage": "As senhas não conferem"
        });
    }

    const teste7 = /^(?=.*[a-z])/
    if (req.confirmPassword.match(teste7) == null){
        return JSON.stringify({
            "error_status": 400,
            "error_menssage": "As senhas não conferem"
        });
    }

    const teste8 = /^(?=.*[$*&@#])/
    if (req.confirmPassword.match(teste8) == null){
        return JSON.stringify({
            "error_status": 400,
            "error_menssage": "As senhas não conferem"
        });
    }

    const teste9 = /^(?=.*\d)/
    if (req.confirmPassword.match(teste9) == null){
        return JSON.stringify({
            "error_status": 400,
            "error_menssage": "As senhas não conferem"
        });
    }

    const teste10 = /^[0-9a-zA-Z$*&@#]{8,}/
    if (req.confirmPassword.match(teste10) == null){
        return JSON.stringify({
            "error_status": 400,
            "error_menssage": "As senhas não conferem"
        });
    }

    if(req.confirmPassword){
        const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
        if (req.confirmPassword !== '' && req.confirmPassword.match(password) == null) { 
            return JSON.stringify({
                "error_status": 400,
                "error_menssage": "As senhas não conferem"
            });
        }
        
    }

    if(req.confirmPassword !== req.password){
        return JSON.stringify({
            "error_status": 400,
            "error_menssage": "As senhas não conferem"
        });
    }

    const emailUser = await getEmailUser(req.email);
    const phoneUser = await getPhoneUser(req.phone);


    if(emailUser){
        return JSON.stringify({
            "error_status": 400,
            "error_menssage": "E-mail já cadastrado"
        });
        
    }else if(phoneUser){
        return JSON.stringify({
            "error_status": 400,
            "error_menssage": "Número de telefone já cadastrado"
        });
    }else{
        return true;
    }
};


