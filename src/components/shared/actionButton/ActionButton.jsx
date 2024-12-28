import { Button } from '@mui/material';
import './ActionButton.css';

const ActionButton = ({
    displayText,
    downloadLink,
    startIcon,
    disabled,
    handleClick = () => { }
}) => {

    return (
        <Button style={{ marginTop: 5 }} type="submit" variant="contained" disabled={disabled} download={downloadLink ? 'result.jpg' : false}
            href={downloadLink}
            startIcon={startIcon} onClick={handleClick} className="expression-form__submit-btn">{displayText}</Button>
    )


};

export default ActionButton;