import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";

const BasicModal = ({open, onClose, title, subtitle, content, style}) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={style}>
                <Box>
                    {title}
                    <Typography gutterBottom variant="h4">{subtitle}</Typography>
                </Box>
                <Box>
                    {content}
                </Box>
                <Box>
                    <Button variant="contained" onClick={onClose} sx={{
                        position: "absolute",
                        bottom: 0, 
                        right: 0, 
                        height: "10%",
                        width: "15%"
                    }}>X
                    </Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default BasicModal;