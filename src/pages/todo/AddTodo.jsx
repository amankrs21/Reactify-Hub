import { useState } from 'react';
import {
    Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Slide
} from '@mui/material';

export default function AddTodo({ open, handleOpen }) {
    const [note, setNote] = useState('');

    const handleClose = () => {
        handleOpen();
    }

    const handleAdd = () => {
        const todos = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [];
        if (todos.length === 0) {
            todos.push({ id: 1, note });
            localStorage.setItem('notes', JSON.stringify(todos));
            handleOpen();
        } else {
            todos.push({ id: todos[todos.length - 1].id + 1, note });
            localStorage.setItem('notes', JSON.stringify(todos));
            handleOpen();
        }
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                style: {
                    width: 350,
                },
            }}
        >
            <DialogTitle>Add a new note</DialogTitle>
            <DialogContent>
                <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label='Enter Note'
                    variant='outlined'
                    onChange={(e) => setNote(e.target.value)}
                    sx={{ marginTop: '10px' }}
                />
            </DialogContent>
            <DialogActions>
                <Button variant='outlined' color='error' onClick={handleOpen}>Cancel</Button>
                <Button variant='outlined' color='primary' onClick={handleAdd}>Add</Button>
            </DialogActions>
        </Dialog>
    )
}
