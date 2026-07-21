import fs from "fs/promises";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        const users = JSON.parse(
            await fs.readFile("data/user.json", "utf-8")
        );

        const user = users.find(
            user => user.email === email
        );

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const matched = await bcrypt.compare(
            password,
            user.password
        );

        if (!matched) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        return res.status(200).json({
            success: true,
            token
        });

    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};