import { createBrowserRouter } from "react-router-dom";
import Home from "./components/home/home";
import Animate from "./components/animate/Animate";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Home
    },
    {
        path: '/animate',
        Component: Animate
    }
]);

export { router };