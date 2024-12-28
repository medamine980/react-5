import './ImageBlock.css';
import { useEffect, useState } from "react";
import { Download } from '@mui/icons-material'
import UploadButton from '../../shared/UploadButton';
import ActionButton from '../../shared/actionButton/ActionButton';
import Label from '../../shared/themebased/Label';


const ImageBlock = ({ title, setFile, src }) => {

    const [imageLink, setImageLink] = useState('');

    useEffect(() => {
        setImageLink(src);
    }, [src]);

    let button = setFile ? <UploadButton setImageLink={setImageLink} setFile={setFile} /> :
        <ActionButton startIcon={<Download />} displayText="Download" disabled={!src} downloadLink={src} />;

    return <div className="expression-form__block">
        <Label>{title}</Label>
        <img className="expression-form__image" src={imageLink} />
        {button}
    </div>
}

export default ImageBlock;