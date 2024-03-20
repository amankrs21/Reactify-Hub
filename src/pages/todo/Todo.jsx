import './Todo.css';
import { useState } from 'react';
import { Card, Divider, Grid, Tooltip, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Todo() {
    const [todos, setNotes] = useState([
        {
            id: 1,
            note: 'Note 1 Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for "hamburger" or "logout.'
        },
        {
            id: 2,
            note: 'Note 1 Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for "hamburger" or "logout.'
        },
        {
            id: 3,
            note: 'Note 1 Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for "hamburger" or "logout.'
        }
    ]);
    // setNotes(localStorage.getItem('notes') || []);
    // localStorage.setItem('notes', JSON.stringify(todos));

    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setNotes(newTodos);
        localStorage.setItem('notes', JSON.stringify(newTodos));
    }

    return (
        <div className='todo-main'>
            <Card className='todo-card'>
                <Typography variant='h4' align='center' color='primary'>NOTE'S</Typography>
                <Divider />
                <div className='todo-list'>
                    {todos.map((todo) => (
                        <div className="todo-item" key={todo.id}>
                            <Typography variant='subtitle1'>{todo.note}</Typography>
                            <Tooltip title='Delete note' placement='top'>
                                <DeleteForeverIcon color='error' sx={{ cursor: 'pointer' }} onClick={() => deleteTodo(todo.id)} />
                            </Tooltip>
                        </div>
                    ))}
                </div>
                <div className='todo-add'>
                    <Grid item xs={5} sm md>
                        <Tooltip title='Add a new note' placement='top'>
                            <AddIcon className='todo-icon' />
                        </Tooltip>
                    </Grid>
                </div>
            </Card>
        </div>
    );
}
