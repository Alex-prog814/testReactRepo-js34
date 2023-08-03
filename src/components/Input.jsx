import { useState } from 'react';

const Input = () => {
    const [text, setText] = useState('');

    return (
        <>
            <h1>{text}</h1>
            <input type="password" onChange={(event) => setText(event.target.value)} />

            {text.length < 6 ? (
                <div>Weak password</div>
            ) : (
                <div>Strong password</div>
            )}
        </>
    )
};

export default Input;