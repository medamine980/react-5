import useLivePortraitHooks from '../../hooks/useLivePortraitAPI';
import Loading from '../shared/loading/Loading';
import './Animate.css';
import { useState } from 'react';
import ImageBlock from './imageBlock/ImageBlock';
import ActionButton from '../shared/actionButton/ActionButton';
import { ChangeCircle } from '@mui/icons-material';
import { Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Core = () => {

    const { t } = useTranslation();

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
            <Stack
                direction={{ sm: 'column', md: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                <ImageBlock title="L'image source" setFile={setSourceImage} />
                <ImageBlock title="L'image conduite" setFile={setDrivingImage} />
                <ImageBlock title="Résultat" src={data} />
            </Stack>
            {
                isLoading ?
                    <Loading /> :
                    <>
                        <ActionButton
                            disabled={!sourceImage || !drivingImage} startIcon={<ChangeCircle />} displayText={t("Change")} />
                    </>
            }
        </form>
    </>
}

export default Core;