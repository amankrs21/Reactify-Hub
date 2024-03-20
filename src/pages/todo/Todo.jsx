import './Todo.css';
import { useState, useEffect } from 'react';
import { Card, Divider, Grid, Tooltip, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddTodo from './AddTodo';

export default function Todo() {
    const [open, setOpen] = useState(false);
    const [todos, setNotes] = useState([]);

    useEffect(() => {
        setNotes(JSON.parse(localStorage.getItem('notes')) || []);
    }, [open]);

    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setNotes(newTodos);
        localStorage.setItem('notes', JSON.stringify(newTodos));
    }

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className='todo-main'>
            <Card className='todo-card'>
                <Typography variant='h4' align='center' color='primary'>NOTE'S</Typography>
                <Divider />
                <div className='todo-list'>
                    {todos.map((todo) => (
                        <div className="todo-item" key={todo.id}>
                            <pre style={{
                                minWidth: '18rem',
                                whiteSpace: 'pre-wrap',
                                wordBreak: 'break-word',
                                overflowWrap: 'break-word'
                            }}>
                                <Typography variant='subtitle1'>{todo.note}</Typography>
                            </pre>
                            <Tooltip title='Delete note' placement='top'>
                                <DeleteForeverIcon color='error' sx={{ cursor: 'pointer' }} onClick={() => deleteTodo(todo.id)} />
                            </Tooltip>
                        </div>
                    ))}
                </div>
                <div className='todo-add'>
                    <Grid item xs={5} sm md>
                        <Tooltip title='Add a new note' placement='top'>
                            <AddIcon className='todo-icon' onClick={handleOpen} />
                        </Tooltip>
                    </Grid>
                </div>
                <Divider />
                {open && <AddTodo open={open} handleOpen={handleOpen} />}
            </Card>
        </div>
    );
}
