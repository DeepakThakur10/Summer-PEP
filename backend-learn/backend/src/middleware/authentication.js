

const authenticate = (req,res,next) =>{
    const token = req.headers.authorization;
    if(!token){
        return res.stauts(401).json({
            success: false,
            message: "Authorization headers missing"
        })
    }

    if(!token.startsWith("Bearer ")){
        return res.status(401).json({
            success: false,
            message: "Authorization header should be Bearer"
        })
    }
    const jimi = token.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log(req.user);

    next();
}