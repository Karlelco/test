import Link from 'next/link';
import React from 'react';


const ErrorPage: React.FC = () => {
    return (
        <div>
            <h1>404 Error</h1>
            <p>Oops! The page you're looking for does not exist.</p>
            <p>Here are some navigation options:</p>
            <ul>
                <li>
                    <Link href="/pages/">Home</Link>
                </li>
                <li>
                    <Link href="/pages/about">About</Link>
                </li>
                <li>
                    <Link href="/pages/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default ErrorPage;