import { styled } from "@mui/material";

const Paragraph = styled('p')(({ theme }) => [
    {
        color: 'black',
    },
    theme.applyStyles('dark', {
        color: 'white',
    }),
]);

export default Paragraph;