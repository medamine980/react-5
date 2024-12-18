import { LIVEPORTRAIT_ENDPOINT } from '../../configs/constants';
import useLivePortraitHooks from '../../hooks/useLivePortraitAPI';
import Loading from '../loading/Loading';
import './Core.css';
import { useEffect, useState } from 'react';
import ImageBlock from './imageBlock/ImageBlock';
import ActionButton from './actionButton/ActionButton';
import { } from 'msw';

const Core = () => {


    const [sourceImage, setSourceImage] = useState(null);
    const [drivingImage, setDrivingImage] = useState(null);

    const { data, isLoading, convert } = useLivePortraitHooks({
        drivingImage,
        sourceImage
    });

    const handleSubmit = async e => {
        e.preventDefault();
        if (!sourceImage || !drivingImage) return;
        await convert();
    }

    return <>
        <form className="expression-form" onSubmit={handleSubmit}>
            <ImageBlock title="L'image source" setFile={setSourceImage} />
            <ImageBlock title="L'image conduite" setFile={setDrivingImage} />
            {
                isLoading ?
                    <Loading /> :
                    <>
                        <div className='expression-form__block'>
                            <label>Le résultat</label>
                            <img className="expression-form__image" src={data} />
                        </div>
                        {
                            data &&
                            <ActionButton displayText="Download" downloadLink={data} />
                        }
                        <ActionButton displayText="Change" />
                    </>
            }
        </form>
    </>
}

export default Core;