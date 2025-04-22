import { useState } from 'react';
import {
    Button, Card, Container, TextField, Typography, Box, LinearProgress, Tooltip
} from '@mui/material';


// BMI Calculator Component
export default function Bmi() {
    const [data, setData] = useState({ weight: '', height: '', bmi: '', status: '' });

    const calculateBMI = () => {
        const weight = parseFloat(data.weight);
        const height = parseFloat(data.height);
        if (!weight || !height || height <= 0) {
            setData({ ...data, bmi: '', status: 'Invalid input' });
            return;
        }
        const heightInM = height / 100;
        const bmiValue = (weight / (heightInM * heightInM)).toFixed(2);
        const status = getBMIStatus(bmiValue);

        setData({ ...data, bmi: `${bmiValue} kg/m²`, status });
    };

    const getBMIStatus = (bmi) => {
        const value = parseFloat(bmi);
        if (value < 18.5) return 'Underweight';
        if (value >= 18.5 && value < 24.9) return 'Normal';
        if (value >= 25 && value < 29.9) return 'Overweight';
        if (value >= 30) return 'Obese';
        return 'Unknown';
    };

    const getProgressColor = () => {
        switch (data.status) {
            case 'Underweight':
                return 'info';
            case 'Normal':
                return 'success';
            case 'Overweight':
                return 'warning';
            case 'Obese':
                return 'error';
            default:
                return 'primary';
        }
    };

    const getProgressValue = () => {
        const bmi = parseFloat(data.bmi);
        if (!bmi || isNaN(bmi)) return 0;
        return Math.min((bmi / 40) * 100, 100);
    };

    return (
        <Container maxWidth="xs">
            <Card className="bmi-card" sx={{ p: 3, borderRadius: 4, boxShadow: 5 }}>
                <Typography variant="h5" gutterBottom align="center" fontWeight={700}>
                    BMI Calculator
                </Typography>

                <TextField
                    fullWidth
                    type="number"
                    margin="normal"
                    value={data.weight}
                    label="Weight (kg)"
                    placeholder='Enter your weight in kilograms'
                    onChange={(e) => setData({ ...data, weight: e.target.value })}
                />
                <TextField
                    fullWidth
                    type="number"
                    margin="normal"
                    value={data.height}
                    label="Height (cm)"
                    placeholder='Enter your height in centimeters'
                    onChange={(e) => setData({ ...data, height: e.target.value })}
                />

                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" onClick={calculateBMI}>
                        Calculate BMI
                    </Button>
                </Box>

                {data.bmi && (
                    <Box sx={{ mt: 3 }}>
                        <Typography align="center" fontWeight={600}>
                            Your BMI: {data.bmi}
                        </Typography>
                        <Tooltip title={data.status} placement="top">
                            <LinearProgress
                                variant="determinate"
                                color={getProgressColor()}
                                value={getProgressValue()}
                                sx={{ mt: 1.5, height: 10, borderRadius: 5 }}
                            />
                        </Tooltip>
                        <Typography align="center" mt={1.5}>
                            Status: <strong>{data.status}</strong>
                        </Typography>
                    </Box>
                )}
            </Card>
        </Container>
    );
}