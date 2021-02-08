const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, server.get('key'), (err, decoded) => {
            if (err) {
                res.status(403).json({
                    status: 'Error',
                    message: err.message
                });
            } else {
                console.log(`User avec l'id ${decoded.login}`);
                next();
            }
        })
    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
};