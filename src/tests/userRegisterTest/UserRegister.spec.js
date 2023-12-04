import {describe, expect, test, it} from '@jest/globals';
import {userDataValidation} from '../../validations/user.validation'


describe("Creating a new user, Success case!", ()=>{
    it("It must be possible to create a new user", async () => {
       
        const req = {
            name: "thiago silva",
            email: "jesttest@gmail.com",
            phone: "61994162080",
            dateOfBirth: "2002/08/27",
            password: "12456#tT",
            confirmPassword: "12456#tT"
        };

        const res = {};
        const user = await userDataValidation(req);


        expect(user).toEqual(true);
    })
});