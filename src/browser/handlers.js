import { http, HttpResponse } from 'msw';
import { LIVEPORTRAIT_ENDPOINT } from '../configs/constants';
import mockImage from './../assets/mock-img.jpg';

export const handlers = [
    http.post(LIVEPORTRAIT_ENDPOINT, async () => {
        const res = await fetch(mockImage);
        const arraybuffer = await res.arrayBuffer();
        return HttpResponse.arrayBuffer(arraybuffer);
    })
]