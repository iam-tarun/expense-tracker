import jwt from 'jsonwebtoken';

// Define paths to exclude from authentication
const excludedPaths = [
    { path: '/api/register', method: 'POST' },
    { path: '/api/login', method: 'POST' },
];

const authMiddleware = (req, res, next) => {
    // Check if the current route is in the excluded paths
    const isExcluded = excludedPaths.some(
        (route) => route.path === req.path && route.method === req.method
    );

    if (isExcluded) {
        return next(); // Skip middleware for excluded routes
    }

    // Get token from Authorization header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access denied, no token provided' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Add user info to the request object
        req.user = { id: decoded.userId, username: decoded.username };
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(403).json({ error: 'Invalid or expired token' });
    }
};

export default authMiddleware;