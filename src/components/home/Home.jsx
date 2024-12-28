import './Home.css';
import { House } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Paragraph from '../shared/themebased/Paragraph';
import H1 from '../shared/themebased/H1.Jsx';
import { useTranslation } from 'react-i18next';

const Home = () => {

    const navigate = useNavigate();
    const { t } = useTranslation();

    function getStarted() {
        navigate("/animate");
    }

    return (
        <>
            <div className="home-container__sub-container">
                <img src="expressor.logo.webp" height="45" />
                <H1>Expressor</H1>
                <Paragraph>{t('HOME.DESCRIPTION')}</Paragraph>
            </div>
            <Button onClick={getStarted}
                startIcon={<House />} variant="contained">{t('HOME.WELCOME')}</Button>
        </>
    )
}

export default Home;