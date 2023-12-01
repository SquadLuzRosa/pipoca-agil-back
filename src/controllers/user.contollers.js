import { createUser, getUser } from "../repositorys/user.repository";
import { userValidation, userDataValidation} from "../validations/user.validation";
import bcrypt from "bcrypt";





export const create = async (req, res) => {
    try{
        console.log('Creating')
        const validateUserData = await userDataValidation(req.body);
        console.log(validateUserData)
        // await userValidation.validate(req.body);
        
        if (validateUserData == true){
            const hashPassword = await bcrypt.hash(req.body.password, 10);
            req.body.password = hashPassword;
            const user = await createUser(req.body);
            res.status(200).send(user);

        }else{
            res.status(400).send(validateUserData);
        }
        
    } catch(err) {
        res.status(400).send(err);
        
    }
};



export const getUserEmail = async (req, res) => {
    try{
        const user = await getUser(req.params.email);
        req.status(200).send(user);
    } catch(err) {
        res.status(400).send(err + " teste de erro");
        console.log(err.path , err.errors)
    }
};