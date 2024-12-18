import './ActionButton.css';

const ActionButton = ({
    displayText,
    downloadLink,
    handleClick = () => { }
}) => {

    return (
        downloadLink ?
            <a className="expression-form__submit-btn" href={downloadLink} download>{displayText}</a> :
            <button onClick={handleClick} className="expression-form__submit-btn">{displayText}</button>
    )


};

export default ActionButton;