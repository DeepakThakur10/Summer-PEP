// import fs from 'fs/promises';
import bcrypt from 'bcrypt';
import User from '../../models/User.js';

export const signup = async (req, res) => {
    // const body = req.body;
    try {
        const { firstName, lastName, email, password }= req.body;

        if (!firstName || !lastName || !email || !password) {
            res.json({ message: 'All informations are required for signup!'});
            return;
        }

        // const userList = JSON.parse(await fs.readFile('data/user.json', 'utf-8'));
        // console.log('UserData, ', userList);

        // const existingUser = userList.find(u => u.email === email);
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            res.json({ message: 'User with this email already exist.'});
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10); 

        await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role: "student"
        })


    //    const { password: _, ...userData } = newUser;

        // userList.push(newUser);
        // await fs.writeFile('data/user.json', JSON.stringify(userList, null, 2));

        res.json({
            message: "New user created successfully",
            // data: userData
        });
        return;

        } catch (err) {
            console.log(err);
    }
}