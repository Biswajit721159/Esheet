import { Backdrop, CircularProgress } from "@mui/material"

const  FullPageLoader = ({ open }) => {
    return (
        <Backdrop open={open}>
            <CircularProgress color="success" />
        </Backdrop>
    )
}

export default FullPageLoader;