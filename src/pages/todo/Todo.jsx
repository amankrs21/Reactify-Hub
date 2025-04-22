import { useState, useEffect } from 'react';
import { Card, Container, Divider, Grid, Tooltip, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import './Todo.css';
import AddTodo from './AddTodo';

export default function Todo() {
    const [open, setOpen] = useState(false);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('notes')) || [];
        setTodos(savedTodos);
    }, [open]);

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        localStorage.setItem('notes', JSON.stringify(updatedTodos));
    };

    const handleOpen = () => setOpen(prev => !prev);

    return (
        <Container maxWidth='xs'>
            <Card className='todo-card'>
                <Typography variant='h4' align='center' color='primary' gutterBottom>
                    Notes
                </Typography>
                <Divider />
                <div className='todo-list'>
                    {todos.length === 0 ? (
                        <Typography variant='subtitle1' align='center' style={{ marginTop: '2rem', color: '#888' }}>
                            No notes added yet.
                        </Typography>
                    ) : (
                        todos.map((todo) => (
                            <div className="todo-item" key={todo.id}>
                                <Typography variant='subtitle1' className='todo-text'>
                                    {todo.note}
                                </Typography>
                                <Tooltip title='Delete note' placement='top'>
                                    <IconButton onClick={() => deleteTodo(todo.id)}>
                                        <DeleteForeverIcon color='error' />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        ))
                    )}
                </div>
                <div className='todo-add'>
                    <Grid item>
                        <Tooltip title='Add a new note' placement='top'>
                            <IconButton className='todo-icon' onClick={handleOpen}>
                                <AddIcon fontSize='large' />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </div>
                {open && <AddTodo open={open} handleOpen={handleOpen} />}
            </Card>
        </Container>
    );
}