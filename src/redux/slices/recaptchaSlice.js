import { createSlice } from "@reduxjs/toolkit";
import { RECAPTCHA_LOCALSTORAGE_KEY } from "../../configs/constants";

const validUntil = JSON.parse(localStorage.getItem(RECAPTCHA_LOCALSTORAGE_KEY) ?? -1)

const recaptchaSlice = createSlice({
    name: 'recaptcha',
    initialState: {
        validUntil
    },
    reducers: {
        humainValidated: (state) => {
            const currentTime = Date.now();
            const validUntil = currentTime + (1000 * 60 * 60);
            localStorage.setItem(RECAPTCHA_LOCALSTORAGE_KEY, validUntil);
            state.validUntil = validUntil;
        }
    }
});

export const { humainValidated } = recaptchaSlice.actions;
export default recaptchaSlice.reducer;