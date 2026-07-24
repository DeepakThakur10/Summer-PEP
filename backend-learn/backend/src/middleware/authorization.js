
export const authorize = (...roles) => {

    const middleware = (req, res, next) => {

        if (!roles.includes(req.user.role)) {
            res.status(403).json({
                message: 'Access Denied'
            });
            return;
        }

        next();
    }

    return middleware;
}