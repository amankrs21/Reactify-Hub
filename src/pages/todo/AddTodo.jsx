import React from 'react';
import { Dialog, DialogTitle, DialogContent, TextField } from '@mui/material';

export default function AddTodo() {
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add a new note</DialogTitle>
            <DialogContent style={{ marginTop: '10px' }}>
                <TextField
                    label='Note'
                    variant='outlined'
                    fullWidth
                />
            </DialogContent>
        </Dialog>
    )
}
