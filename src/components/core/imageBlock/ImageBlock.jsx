import './ImageBlock.css';
import { useState } from "react";

const ImageBlock = ({ title, setFile }) => {

    const [imageLink, setImageLink] = useState('');

    const handleSourceImageChange = (e) => {
        const file = e.currentTarget.files[0];
        if (file) {
            setFile(file);
            const blobLink = URL.createObjectURL(file);
            setImageLink(blobLink);
        }
    }

    return <div className="expression-form__block">
        <label>{title}</label>
        <img className="expression-form__image" src={imageLink} />
        <input type="file" onChange={handleSourceImageChange} />
    </div>
}

export default ImageBlock