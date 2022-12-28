import React from 'react';
import { forwardRef, useEffect, useRef } from 'react';
export default forwardRef(function TextInput(
    { type = 'text', name, id, value, className, autoComplete, required, isFocused, handleChange },
    ref
) {
    const input = ref ? ref : useRef();
    useEffect(() => {
        // @ts-ignore
        window.onload();
        if (isFocused) {
            input.current.focus();
        }
    }, []);
    return (
        <input
            type={type}
            name={name}
            id={id}
            defaultValue={value}
            className={
                `border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ` +
                className
            }
            ref={input}
            autoComplete={autoComplete}
            required={required}
            onChange={e => handleChange(e)}
        />
    );
});
