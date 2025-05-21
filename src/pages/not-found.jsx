import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found-page">
            <div className="container text-center">
                <h1>404</h1>
                <p>Oops! The page you're looking for doesn't exist.</p>
                <Link to="/" className="theme-btn">Go Back Home</Link>
            </div>
        </div>
    );
};

export default NotFound;
