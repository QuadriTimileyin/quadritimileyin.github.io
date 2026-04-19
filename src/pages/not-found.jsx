import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
            <h1 className="text-7xl font-bold text-accent">404</h1>
            <p className="text-text-secondary mt-3">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="mt-6 inline-flex px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded-lg font-medium transition-colors">Go Back Home</Link>
        </div>
    );
};

export default NotFound;
