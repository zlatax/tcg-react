import {React,useState, useEffect} from 'react';

import Images from './Image'
import Buttons from './Buttons'

export default function ImageUploader() {
    const [image,setImages] = useState();

    function onChange(event) {
        const file = URL.createObjectURL(event.target.file[0]);
        setImages(file);
    }

    function removeImageHandler() {
        setImages();
    }

    function content() {
        switch (true) {
            case image !== null:
                return (<Images images={image} removeImage={removeImageHandler} />);
            default:
                // upload photo button
                return <Buttons onChange={onChange} />;

        }
    }
    
    return (
        <div>
            {content}
        </div>
    );
}