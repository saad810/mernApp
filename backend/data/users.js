import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Umar Naeem',
        email: 'umar@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Hamza Naeem',
        email: 'hamza@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },

];
export default users;