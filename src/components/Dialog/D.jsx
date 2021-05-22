import React from "react";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { DialogActions, DialogContent } from "@material-ui/core";

const D = ({ children, title, open, setOpen }) => {
    return (
        <Dialog
            onClose={() => setOpen(false)}
            aria-labelledby={title}
            open={open}
            style={{ width: "100%" }}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                <Button
                    onClick={() => setOpen(false)}
                    color="primary"
                    autoFocus
                >
                    Chiudi
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default D;
