/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError()
    return (
        <>
            <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <img
                        src="https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg"
                        className="h-96 w-96 rounded-lg shadow-lg"
                        alt=""
                    />
                    <div className="max-w-md text-center mt-6">
                        <Link to="/" className="btn">
                            Back to homepage
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Error;