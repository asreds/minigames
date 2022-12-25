import React from 'react';

type InputErrorProps = {
    message: string,
    className?: string
}

export default function InputError({ message, className = "" }: InputErrorProps) {
    return message ? <div className="invalid-feedback">{message}</div> : null;
}
