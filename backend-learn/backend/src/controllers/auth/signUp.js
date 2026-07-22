// import fs from "fs/promises";
import bcrypt from "bcrypt";
import User from "../../models/User.js";

export const signup = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({
                message: "All information is required"
            });
        }

        // const users = JSON.parse(
        //     await fs.readFile("data/user.json", "utf-8")
        // );

        // const existingUser = users.find(
        //     user => user.email === email
        // );

        const existingUser = await User.findOne( {email} );

        if (existingUser) {
            return res.status(409).json({
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // const newUser = {
        //     id: users.length + 1,
            
        // }
        await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            // role: "tudent"
        })

        // users.push(newUser);

        // await fs.writeFile(
        //     "data/user.json",
        //     JSON.stringify(users, null, 2)
        // );

        const { password: _, ...userData } = newUser.toObject();

        return res.status(201).json({
            success: true,
            user: userData
        });

    } catch (err) {
        console.log('Error: ', err)
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};