import React, { useRef, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material"
import ReCAPTCHA from 'react-google-recaptcha';
import { useDispatch, useSelector } from 'react-redux';
import { humainValidated } from '../../../redux/slices/recaptchaSlice';

const Transition = React.forwardRef(function Transition(
    props,
    ref
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ReCAPTCHAModal = () => {
    const recaptcha = useRef(null);
    const [open, setOpen] = useState(true);
    const { validUntil } = useSelector(state => state.recaptcha);

    const dispatch = useDispatch();

    const handleClose = () => {
        setOpen(false);
        dispatch(humainValidated());
    }

    const recaptchaChange = (value) => {
        if (value) {
            handleClose();
        }
    }

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"Est-ce que vous êtes un être humain?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    <ReCAPTCHA onChange={recaptchaChange} ref={recaptcha} sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} />
                </DialogContentText>
            </DialogContent>
            {/* <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose}>Agree</Button>
            </DialogActions> */}
        </Dialog>
    )
}

export default ReCAPTCHAModal;