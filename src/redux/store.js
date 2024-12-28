import { configureStore } from "@reduxjs/toolkit";
import ReCAPTCHAReducer from "./slices/recaptchaSlice";

const store = configureStore({
    reducer: {
        recaptcha: ReCAPTCHAReducer
    }
});

export default store;