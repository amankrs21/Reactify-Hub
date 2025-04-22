import { useState } from 'react';
import { Button, Card, Container, Grid, TextField, Typography } from '@mui/material';


// Calculator component
export default function Calculator() {
    const [data, setData] = useState('');

    const handleSubmit = (val) => {
        switch (val) {
            case 'C':
                setData('');
                break;
            case '=':
                if (data === '') return;
                try {
                    setData(String(eval(data)));
                } catch (e) {
                    setData('Error');
                }
                break;
            case '<-':
                setData(data.slice(0, -1));
                break;
            default:
                setData(data == 'Error' ? val : data + val);
                break;
        }
    };


    return (
        <Container maxWidth='xs' >
            <Card variant='outlined' className='cal-card'>
                <Typography variant='h4' align='center'>Calculator</Typography>
                <div className='cal-body'>
                    <TextField
                        fullWidth
                        disabled
                        value={data}
                        margin="normal"
                        InputProps={{
                            style: {
                                fontSize: '1.8rem',
                                fontWeight: 'bold',
                            },
                        }}
                        inputProps={{
                            style: { textAlign: 'right' },
                        }}
                    />
                    <div className='cal-btns'>
                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                <Button fullWidth variant='outlined' onClick={() => handleSubmit('+')}>+</Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button fullWidth variant='outlined' onClick={() => handleSubmit('-')}>-</Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button fullWidth variant='outlined' onClick={() => handleSubmit('*')}>*</Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button fullWidth variant='outlined' onClick={() => handleSubmit('/')}>/</Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button fullWidth variant='outlined' onClick={() => handleSubmit('7')}>7</Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button fullWidth variant='outlined' onClick={() => handleSubmit('8')}>8</Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button fullWidth variant='outlined' onClick={() => handleSubmit('9')}>9</Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button fullWidth variant='outlined' onClick={() => handleSubmit('%')}>%</Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button fullWidth variant='outlined' onClick={() => handleSubmit('4')}>4</Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button fullWidth variant='outlined' onClick={() => handleSubmit('5')}>5</Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button fullWidth variant='outlined' onClick={() => handleSubmit('6')}>6</Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button fullWidth variant='outlined' onClick={() => handleSubmit('<-')}>{"<-"}</Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button fullWidth variant='outlined' onClick={() => handleSubmit('1')}>1</Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button fullWidth variant='outlined' onClick={() => handleSubmit('2')}>2</Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button fullWidth variant='outlined' onClick={() => handleSubmit('3')}>3</Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button fullWidth variant='contained' color='warning' onClick={() => handleSubmit('C')}>C</Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button fullWidth variant='outlined' onClick={() => handleSubmit('0')}>0</Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button fullWidth variant='outlined' onClick={() => handleSubmit('.')}>.</Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button fullWidth variant='contained' onClick={() => handleSubmit('=')}>=</Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Card>
        </Container>
    )
}
