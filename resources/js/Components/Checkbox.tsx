import React from 'react';

type AppProps = {
    name: string,
    value?: string,
    handleChange: Function
}

export default function Checkbox({ name, value, handleChange }: AppProps) {
    return (
        <input
            type="checkbox"
            name={name}
            value={value}
            className="form-check-input"
            onChange={e => handleChange(e)}
        />
    );
}
