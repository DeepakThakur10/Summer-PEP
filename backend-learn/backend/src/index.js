import express from "express";
import fs from "fs/promises";
import "dotenv/config";
import bcrypt from 'bcrypt';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Response from server"
    });
});

app.post("/signup", async (req, res) => {

   try{
     const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({
            message: "All information is required for signup!"
        });
    }

    const userList = JSON.parse(
        await fs.readFile("data/user.json", "utf-8")
    );

    const existingUser = userList.find(
        (u) => u.email === email
    );

    if (existingUser) {
        return res.status(409).json({
            success: false,
            message: "User already exists"
        });
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const newUser = {
        "id": userList.length+1,
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role: "student"
    };

    userList.push(newUser);

    await fs.writeFile(
        "data/user.json",
        JSON.stringify(userList,null,2)
    );
    const { password: _dirname, ...userData } = newUser;

     res.status(201).json({
        success: true,
        message: "User registered successfully",
        user: userData
    });
    return;
   }
   catch (error) {
    console.error(error);

    return res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });
}

   
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});