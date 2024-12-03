import axios from "axios"
import { useState } from "react";
import { LIVEPORTRAIT_ENDPOINT } from "../configs/constants";

const useLivePortraitHooks = ({
    sourceImage,
    drivingImage,
}) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const convert = async () => {
        const formData = new FormData();
        formData.append('source_file', sourceImage);
        formData.append('driving_file', drivingImage);
        setIsLoading(true);
        try {
            const response = await axios.post(LIVEPORTRAIT_ENDPOINT, formData, {
                responseType: 'blob',
            });
            const data = response.data;
            const url = URL.createObjectURL(data);
            setData(url);
        } catch (e) {
            setError(e);
            setData(null);
        }
        setIsLoading(false);
    }

    return {
        isLoading,
        data,
        error,
        convert
    };
}

export default useLivePortraitHooks;