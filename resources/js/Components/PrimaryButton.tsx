import React from 'react';

type PrimaryButtonProps = {
    type?: string,
    className?: string,
    processing?: boolean,
    children?: string,
    onClick?: Function,
}

const PrimaryButton = ({ type = 'submit', className = '', processing, children, onClick }: PrimaryButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`btn bg-gradient-primary ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}


export default PrimaryButton;
