import React from 'react';
// import photo1 from '../assets/photo1.webp';
// import photo2 from '../assets/photo2.jpg';

const RenderPicture = () => {
    const [isPhoto, setIsPhoto] = React.useState(true);

    let imgStyles = {
        margin: '20px',
        width: '200px',
        height: '150px'
    };

    return (
        <>
            {isPhoto ? (
                <img src="../assets/photo1.webp" alt="error:(" style={imgStyles} />
            ) : (
                <img src="/photo2.jpg" alt="error:(" style={imgStyles} />
            )}
            <br />

            <button onClick={() => setIsPhoto(true)}>Photo 1</button>
            <button onClick={() => setIsPhoto(false)}>Photo 2</button>
        </>
    )
};

export default RenderPicture;