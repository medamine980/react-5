import { styled } from "@mui/material";

const H1 = styled('h1')(({ theme }) => [
    {
        color: 'black',
    },
    theme.applyStyles('dark', {
        color: 'white',
    }),
]);

export default H1;