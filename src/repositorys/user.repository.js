import { prisma } from '../services/prisma';


export const createUser =  async (data) => {
    const user = await prisma.user.create({
        data:  {
            name: data.name,
            email: data.email,
            phone: data.phone,
            dateOfBirth: data.dateOfBirth,
            password: data.password
        },
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            dateOfBirth: true,
            password: false,
            createdAt: true,
            updatedAt: true,
        }
    });
    return user;
};



export const getEmailUser = async (email) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: "teste@gmail.com"
            },
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                dateOfBirth: true,
                password: false,
                createdAt: true,
                updatedAt: true,
            }
    
        })
    
        return user    
    } catch (error) {
        console.log(error)
    }
};

export const getPhoneUser = async (phone) => {
    const user = await prisma.user.findUnique({
        where: {
            phone
        },
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            dateOfBirth: true,
            password: false,
            createdAt: true,
            updatedAt: true,
        }

    })
    if (!user) {
        return !!user;
    };

    return true;
};

