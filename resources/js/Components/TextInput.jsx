import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'border-blue-800 text-zinc-900 bg-blue-50 focus:border-blue-500 focus:ring-blue-500 rounded-md shadow-sm' +
                className
            }
            ref={input}
        />
    );
});
