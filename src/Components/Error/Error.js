import React from 'react';
import useTitle from '../../Hook/useTitle';

const Error = () => {
    useTitle('Error')
    return (
        <div>
            <h3>Page Not Found <strong>404</strong> </h3>
        </div>
    );
};

export default Error;