import React from 'react';

function Error ({mensaje}) {
    return (
    <p className="alert alert-danger p3 my-5 text-center text-uppercase">{mensaje}</p>
    )
}

export default Error;