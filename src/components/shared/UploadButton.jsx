import { CloudUpload } from "@mui/icons-material";
import { Button, styled } from "@mui/material";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const UploadButton = ({ setImageLink, setFile }) => {

    const handleSourceImageChange = (e) => {
        const file = e.currentTarget.files[0];
        if (file) {
            setFile(file);
            const blobLink = URL.createObjectURL(file);
            setImageLink(blobLink);
        }
    }

    return (
        <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            style={{ marginTop: 5 }}
            startIcon={<CloudUpload />}
        >
            Téléverser le fichier
            <VisuallyHiddenInput
                type="file"
                onChange={handleSourceImageChange}
            />
        </Button>
    )
}

export default UploadButton;