import { styled } from "@mui/material";

const Label = styled('label')(({ theme }) => [
    {
        color: 'black',
    },
    theme.applyStyles('dark', {
        color: 'white',
    }),
]);

export default Label;