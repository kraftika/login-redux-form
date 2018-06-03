import React from 'react';

export const myInput = props => {
    const { touched, error, warning } = props.meta;
    return (
        <div>
            <input {...props.input} 
                type={props.type} 
                placeholder={props.placeholder} />
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    );
};