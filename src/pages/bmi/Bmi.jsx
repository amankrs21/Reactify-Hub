import './Bmi.css';
import React, { useState } from 'react';
import { Button, Card, TextField, Typography } from '@mui/material';

export default function Bmi() {
    const [data, setData] = useState({ weight: '', height: '', bmi: '' });
    const handleSubmit = () => {
        const bmi = (data.weight / (data.height) ** 2).toFixed(2) + ' kg/m²';
        setData({ ...data, bmi })
    }
    return (
        <div className='bmi-main'>
            <Card className='bmi-card'>
                <Typography variant="h5" gutterBottom align='center'>
                    BMI Calculator
                </Typography>
                <TextField
                    fullWidth
                    type='number'
                    margin="normal"
                    value={data.weight}
                    label="Enter your weight in KG"
                    onChange={(e) => setData({ ...data, weight: e.target.value })}
                />
                <TextField
                    fullWidth
                    type='number'
                    margin="normal"
                    value={data.height}
                    label="Enter your height in M"
                    onChange={(e) => setData({ ...data, height: e.target.value })}
                />
                <TextField
                    fullWidth
                    disabled
                    margin="normal"
                    label="Your BMI"
                    value={data.bmi}
                />
                <div className='bmi-button'>
                    <Button variant="contained" onClick={handleSubmit}>
                        Calculate BMI
                    </Button>
                </div>
            </Card>
        </div>
    )
}
