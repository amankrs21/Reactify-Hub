// import './Todo.css';
// import { useState } from 'react';
// import { Card, Divider, Grid, Tooltip, Typography } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

// export default function Todo() {
//     const [notes, setNotes] = useState([]);
//     setNotes(['Note 1', 'Note 2', 'Note 3']);
//     return (
//         <div className='todo-main'>
//             <Card className='todo-card'>
//                 <Typography variant='h4' align='center'>NOTES</Typography>
//                 <Divider />
//                 <div className='todo-list'>
//                     {notes && notes.map((note, index) => {
//                         <div className="todo-item" key={index}>
//                             <Typography variant='h6'>{note}</Typography>
//                             <DeleteForeverIcon color='error' sx={{ cursor: 'pointer' }} />
//                         </div>
//                     })}
//                 </div>
//                 <div className='todo-add'>
//                     <Grid item xs={5} sm md>
//                         <Tooltip title='Add a new note' placement='top'>
//                             <AddIcon className='todo-icon' />
//                         </Tooltip>
//                     </Grid>
//                 </div>
//             </Card>
//         </div>
//     )
// }


import './Todo.css';
import { useState } from 'react';
import { Card, Divider, Grid, Tooltip, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Todo() {
    // Initialize the notes state with default values.
    const [notes, setNotes] = useState([
        'Note 1 Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for "hamburger" or "logout.',
        'Note 1 Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for "hamburger" or "logout.',
        'Note 1 Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for "hamburger" or "logout.',
        'Note 2',
        'Note 3'
    ]);

    return (
        <div className='todo-main'>
            <Card className='todo-card'>
                <Typography variant='h4' align='center' color='primary'>NOTE'S</Typography>
                <Divider />
                <div className='todo-list'>
                    {/* Ensure you return the JSX from the map function */}
                    {notes.map((note, index) => (
                        <div className="todo-item" key={index}>
                            <Typography variant='subtitle1'>{note}</Typography>
                            <Tooltip title='Delete note' placement='top'>
                                <DeleteForeverIcon color='error' sx={{ cursor: 'pointer' }} />
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
