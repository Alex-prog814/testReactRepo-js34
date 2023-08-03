import { useState } from 'react';

const Like = () => {
    let [like, setLike] = useState(false);
    
    return (
        <>
            <h2 onClick={() => setLike(!like)}>
                Like: {like ? '❤️' : '🤍'}
            </h2>
        </>
    )
};

export default Like;