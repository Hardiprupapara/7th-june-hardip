import React, { useState } from 'react';

const ImageCursol = () => {


    const [count, setCount] = useState(0)


    const images = [
        "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    ];

    const handelnext = () => {
        setCount(count === images.length - 1 ? 0 : count + 1)
    }

    const handelprevius = () => {
        setCount(count === 0  ? images.length - 1 : count - 1)
    }


    return (
        <div className='slider'>
            <button className='right-arrow' onClick={handelnext}>next</button>
            <button className=' left-arrow' onClick={handelprevius}>previus</button>
            {images.map((item, index) =>
            count === index && 
                <div key={item} className='slide'>
                    <img src={item} alt="" />
                </div>
            )}

        </div>
    );
};

export default ImageCursol;