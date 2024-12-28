import { styled } from "@mui/material";

const Div = styled('div')(({ theme }) => [
    {
        backgroundColor: 'white',
    },
    theme.applyStyles('dark', {
        backgroundColor: 'black',
    }),
]);

export default Div;