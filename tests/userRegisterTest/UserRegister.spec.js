import {describe, expect, test, it} from '@jest/globals';
import {userDataValidation} from '../../src/validations/user.validation'



// Success case
describe("Creating a new user, Success case!", ()=>{
    it("User successfully registered", async () => {
       
        const req = {
            name: "thiago silva",
            email: "jesttest@gmail.com",
            phone: "61994162080",
            dateOfBirth: "2002/08 /27",
            password: "12456#tT",
            confirmPassword: "12456#tT"
        };

        const user = await userDataValidation(req);


        expect(user).toEqual(true);
    })
});



describe("check if email and phone number are registered, Error case!", ()=>{
    it("It must be possible to create a new user", async () => {
       
        const req = {
            name: "thiago silva",
            email: "jesttest@gmail.com",
            phone: "61994162080",
            dateOfBirth: "2002/08/27",
            password: "12456#tT",
            confirmPassword: "12456#tT"
        };

        const user = await userDataValidation(req);

        expect(user).toEqual(true);
    })
});



// 


// Error case: NAME

describe("Inserting ( invalid USERNAME ) in the API, Error case!", ()=>{
    it("( NAME: is invalid/Null ) - Unable to create a new user!", async () => {
       
        const req = {
            name: "",
            email: "jesttest@gmail.com",
            phone: "61994162080",
            dateOfBirth: "2002/08 /27",
            password: "12456#tT",
            confirmPassword: "12456#tT"
        };


        const user = await userDataValidation(req);
        console.log(user)

        expect(JSON.parse(user).error_status).toEqual(403);
        expect(JSON.parse(user)).toHaveProperty('error_menssage')
    })

    it("( NAME and SURNAME: contains less than 3 characters ) - Unable to create a new user!", async () => {
       
        const req = {
            name: "TH s",
            email: "jesttest@gmail.com",
            phone: "61994162080",
            dateOfBirth: "2002/08 /27",
            password: "12456#tT",
            confirmPassword: "12456#tT"
        };


        const user = await userDataValidation(req);
        console.log(user)
        expect(JSON.parse(user).error_status).toEqual(400);
        expect(JSON.parse(user)).toHaveProperty('error_menssage')
    })

    it("( NAME and SURNAME: contains numbers ) - Unable to create a new user!", async () => {
       
        const req = {
            name: "Thiago Silva1",
            email: "jesttest@gmail.com",
            phone: "61994162080",
            dateOfBirth: "2002/08 /27",
            password: "12456#tT",
            confirmPassword: "12456#tT"
        };


        const user = await userDataValidation(req);
        console.log(user)
        expect(JSON.parse(user).error_status).toEqual(400);
        expect(JSON.parse(user)).toHaveProperty('error_menssage')
    })

    it("( NAME and SURNAME: contains special characters ) - Unable to create a new user!", async () => {
       
        const req = {
            name: "Thiago Silv@",
            email: "jesttest@gmail.com",
            phone: "61994162080",
            dateOfBirth: "2002/08 /27",
            password: "12456#tT",
            confirmPassword: "12456#tT"
        };


        const user = await userDataValidation(req);
        console.log(user)
        expect(JSON.parse(user).error_status).toEqual(400);
        expect(JSON.parse(user)).toHaveProperty('error_menssage')
    })

    it("( NAME and SURNAME: maximum character limit 255 ) - Unable to create a new user!", async () => {
       
        const req = {
            name: "lhnofglksdmvwfbmrvxbrrbijvufelvcpxmbinbbohauslvmgmneaoubocqxbeqrierorppgbxvmbzamjqxqnnldcvrlpmewgklrnwsprumxvcqhhimvshxgorkbqilzeqiphyjafiokkkpgjjpqmkqrierorppgbxvmbzamjqxqnnldcvrlpmewgklrnwsprumxvcqhhimvshxgorkbqilzeqiphyjafiokkkpgjjpqmk odqogohpppuxyxaxkwdpbamtpxiastlczffecwcqgilujlxsqxfxlwdrpwsj",
            email: "jesttest@gmail.com",
            phone: "61994162080",
            dateOfBirth: "2002/08/27",
            password: "12456#tT",
            confirmPassword: "12456#tT"
        };


        const user = await userDataValidation(req);
        console.log(user)
        expect(JSON.parse(user).error_status).toEqual(400);
        expect(JSON.parse(user)).toHaveProperty('error_menssage')
    })



    
});


// Error case: E-MAIL

describe("Inserting ( invalid E-MAIL ) in the API, Error case!", ()=>{
    it("( E-MAIL: is invalid/Null ) - Unable to create a new user!", async () => {
       
        const req = {
            name: "Thiago Silva",
            email: "",
            phone: "61994162080",
            dateOfBirth: "2002/08 /27",
            password: "12456#tT",
            confirmPassword: "12456#tT"
        };


        const user = await userDataValidation(req);
        console.log(user)
        expect(JSON.parse(user).error_status).toEqual(403);
        expect(JSON.parse(user)).toHaveProperty('error_menssage')
    })

    it("( E-MAIL: is invalid ) - Unable to create a new user!", async () => {
       
        const req = {
            name: "Thiago Silva",
            email: "jesttest@gmail.",
            phone: "61994162080",
            dateOfBirth: "2002/08 /27",
            password: "12456#tT",
            confirmPassword: "12456#tT"
        };


        const user = await userDataValidation(req);
        console.log(user)
        expect(JSON.parse(user).error_status).toEqual(400);
        expect(JSON.parse(user)).toHaveProperty('error_menssage')
    })

    
});





// Error case: PHONE

describe("Inserting ( invalid PHONE ) in the API, Error case!", ()=>{
    it("( PHONE: is invalid/Null ) - Unable to create a new user!", async () => {
       
        const req = {
            name: "Thiago Silva",
            email: "jesttest@gmail.com",
            phone: "",
            dateOfBirth: "2002/08/27",
            password: "12456#tT",
            confirmPassword: "12456#tT"
        };


        const user = await userDataValidation(req);
        console.log(user)
        expect(JSON.parse(user).error_status).toEqual(403);
        expect(JSON.parse(user)).toHaveProperty('error_menssage')
    })

    it("( PHONE: maximum 11 digits ) - Unable to create a new user!", async () => {
       
        const req = {
            name: "Thiago Silva",
            email: "jesttest@gmail.com",
            phone: "619941620801",
            dateOfBirth: "2002/08/27",
            password: "12456#tT",
            confirmPassword: "12456#tT"
        };


        const user = await userDataValidation(req);
        console.log(user)
        expect(JSON.parse(user).error_status).toEqual(400);
        expect(JSON.parse(user)).toHaveProperty('error_menssage')
    })
    it("( PHONE: minimum 9 digits ) - Unable to create a new user!", async () => {
       
        const req = {
            name: "Thiago Silva",
            email: "jesttest@gmail.com",
            phone: "619941620801",
            dateOfBirth: "2002/08/27",
            password: "12456#tT",
            confirmPassword: "12456#tT"
        };


        const user = await userDataValidation(req);
        console.log(user)
        expect(JSON.parse(user).error_status).toEqual(400);
        expect(JSON.parse(user)).toHaveProperty('error_menssage')
    })

    
});



// Error case: DATE OF BIRTH

describe("Inserting ( invalid DATE OF BIRTH ) in the API, Error case!", ()=>{
    it("( DATEOFBIRTH: is invalid/Null ) - Unable to create a new user!", async () => {
       
        const req = {
            name: "Thiago Silva",
            email: "jesttest@gmail.com",
            phone: "61994162080",
            dateOfBirth: "",
            password: "12456#tT",
            confirmPassword: "12456#tT"
        };


        const user = await userDataValidation(req);
        console.log(user, "teste de dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        expect(JSON.parse(user).error_status).toEqual(403);
        expect(JSON.parse(user)).toHaveProperty('error_menssage')
    })

    it("( DATEOFBIRTH: invalid ) - Unable to create a new user!", async () => {
       
        const req = {
            name: "Thiago Silva",
            email: "jesttest@gmail.com",
            phone: "61994162080",
            dateOfBirth: "2002/15/27",
            password: "12456#tT",
            confirmPassword: "12456#tT"
        };


        const user = await userDataValidation(req);
        console.log(user)
        expect(JSON.parse(user).error_status).toEqual(400);
        expect(JSON.parse(user)).toHaveProperty('error_menssage')
    })

    it("( DATEOFBIRTH: underage user ) - Unable to create a new user!", async () => {
       
        const req = {
            name: "Thiago Silva",
            email: "jesttest@gmail.com",
            phone: "61994162080",
            dateOfBirth: "2010/10/27",
            password: "12456#tT",
            confirmPassword: "12456#tT"
        };


        const user = await userDataValidation(req);
        console.log(user)
        expect(JSON.parse(user).error_status).toEqual(401);
        expect(JSON.parse(user)).toHaveProperty('error_menssage')
    })

    
});




// Error case: PASSWORD AND CONFIRMPASSWORD

describe("Inserting ( invalid PASSWORD and CONFIRM YOUR PASSWORD ) in the API, Error case!", ()=>{
    it("( PASSWORD: is invalid/Null ) - Unable to create a new user!", async () => {
       
        const req = {
            name: "Thiago Silva",
            email: "jesttest@gmail.com",
            phone: "61994162080",
            dateOfBirth: "2002/08/27",
            password: "",
            confirmPassword: "12456#tT"
        };


        const user = await userDataValidation(req);
        console.log(user)
        expect(JSON.parse(user).error_status).toEqual(403);
        expect(JSON.parse(user)).toHaveProperty('error_menssage')
    })

    
    it("( CONFIRM PASSWORD: is invalid/Null ) - Unable to create a new user!", async () => {
       
        const req = {
            name: "Thiago Silva",
            email: "jesttest@gmail.com",
            phone: "61994162080",
            dateOfBirth: "2002/08/27",
            password: "12456#tT",
            confirmPassword: ""
        };


        const user = await userDataValidation(req);
        console.log(user)
        expect(JSON.parse(user).error_status).toEqual(403);
        expect(JSON.parse(user)).toHaveProperty('error_menssage')
    })

    it("( PASSWORD AND CONFIRM PASSWORD: mandatory capital letter ) - Unable to create a new user!", async () => {
       
        const req = {
            name: "Thiago Silva",
            email: "jesttest@gmail.com",
            phone: "61994162080",
            dateOfBirth: "2002/08/27",
            password: "12456#t",
            confirmPassword: "12456#t"
        };


        const user = await userDataValidation(req);
        console.log(user)
        expect(JSON.parse(user).error_status).toEqual(400);
        expect(JSON.parse(user)).toHaveProperty('error_menssage')
    })

    it("( PASSWORD AND CONFIRM PASSWORD: lowercase letter required ) - Unable to create a new user!", async () => {
       
        const req = {
            name: "Thiago Silva",
            email: "jesttest@gmail.com",
            phone: "61994162080",
            dateOfBirth: "2002/08/27",
            password: "12456#T",
            confirmPassword: "12456#T"
        };


        const user = await userDataValidation(req);
        console.log(user)
        expect(JSON.parse(user).error_status).toEqual(400);
        expect(JSON.parse(user)).toHaveProperty('error_menssage')
    })

    it("( PASSWORD AND CONFIRM PASSWORD: mandatory special characters ) - Unable to create a new user!", async () => {
       
        const req = {
            name: "Thiago Silva",
            email: "jesttest@gmail.com",
            phone: "61994162080",
            dateOfBirth: "2002/08/27",
            password: "12456tT",
            confirmPassword: "12456tT"
        };


        const user = await userDataValidation(req);
        console.log(user)
        expect(JSON.parse(user).error_status).toEqual(400);
        expect(JSON.parse(user)).toHaveProperty('error_menssage')
    })

    it("( PASSWORD AND CONFIRM PASSWORD: mandatory numbers ) - Unable to create a new user!", async () => {
       
        const req = {
            name: "Thiago Silva",
            email: "jesttest@gmail.com",
            phone: "61994162080",
            dateOfBirth: "2002/08/27",
            password: "@@@@@@@tT",
            confirmPassword: "@@@@@@@tT"
        };


        const user = await userDataValidation(req);
        console.log(user)
        expect(JSON.parse(user).error_status).toEqual(400);
        expect(JSON.parse(user)).toHaveProperty('error_menssage')
    })

    it("( PASSWORD AND CONFIRM PASSWORD: minimum 8 characters ) - Unable to create a new user!", async () => {
       
        const req = {
            name: "Thiago Silva",
            email: "jesttest@gmail.com",
            phone: "61994162080",
            dateOfBirth: "2002/08/27",
            password: "1234#tT",
            confirmPassword: "1234#tT"
        };


        const user = await userDataValidation(req);
        console.log(user, "teste")
        expect(JSON.parse(user).error_status).toEqual(400);
        expect(JSON.parse(user)).toHaveProperty('error_menssage')
    })

    it("( PASSWORD AND CONFIRM PASSWORD: passwords do not match) - Unable to create a new user!", async () => {
       
        const req = {
            name: "Thiago Silva",
            email: "jesttest@gmail.com",
            phone: "61994162080",
            dateOfBirth: "2002/08/27",
            password: "1234#tTs",
            confirmPassword: "1234#tTx"
        };


        const user = await userDataValidation(req);
        console.log(user)
        expect(JSON.parse(user).error_status).toEqual(401);
        expect(JSON.parse(user)).toHaveProperty('error_menssage')
    })
    
});




