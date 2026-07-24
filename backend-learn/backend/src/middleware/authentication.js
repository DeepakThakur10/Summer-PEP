import jwt from 'jsonwebtoken';

export const authenticate = (req, res, next) => {

    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            res.json({ message: 'Authentication token not found' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next();
        
    } catch (err) {
        console.log('Error: ', err);
    }
}