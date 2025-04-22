import PropTypes from 'prop-types';
import { useState } from 'react';
import {
    Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button
} from '@mui/material';

export default function AddTodo({ open, handleOpen }) {
    const [note, setNote] = useState('');

    const handleClose = () => handleOpen();

    const handleAdd = () => {
        if (note.trim() === '') return;

        const storedTodos = JSON.parse(localStorage.getItem('notes')) || [];
        const newTodo = {
            id: storedTodos.length ? storedTodos[storedTodos.length - 1].id + 1 : 1,
            note: note.trim()
        };

        const updatedTodos = [...storedTodos, newTodo];
        localStorage.setItem('notes', JSON.stringify(updatedTodos));
        handleOpen();
    };

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ style: { width: 350 } }}>
            <DialogTitle>Add a new note</DialogTitle>
            <DialogContent>
                <TextField
                    fullWidth
                    multiline
                    rows={3}
                    margin='normal'
                    variant='outlined'
                    label='Enter your note'
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button variant='outlined' color='error' onClick={handleClose}>Cancel</Button>
                <Button variant='contained' color='primary' onClick={handleAdd}>Add</Button>
            </DialogActions>
        </Dialog>
    );
}

AddTodo.propTypes = {
    open: PropTypes.bool.isRequired,
    handleOpen: PropTypes.func.isRequired
};
