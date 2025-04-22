/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import {
    Container, Card, TextField, Typography, IconButton, LinearProgress, Box, Tooltip
} from '@mui/material';
import { Visibility, VisibilityOff, Clear } from '@mui/icons-material';


const strengthLevels = [
    { label: 'Very Low', color: 'error', value: 10 },
    { label: 'Low', color: 'error', value: 30 },
    { label: 'Medium', color: 'warning', value: 60 },
    { label: 'High', color: 'info', value: 80 },
    { label: 'Very High', color: 'success', value: 100 }
];


function estimateBruteForceTime(password) {
    const charsetSize = new Set(password).size;
    const combinations = Math.pow(charsetSize, password.length);
    const guessesPerSecond = 1e9; // 1 billion guesses per second
    const seconds = combinations / guessesPerSecond;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;

    if (days > 365 * 1000) return 'Thousands of years';
    if (days > 365) return `${Math.round(days / 365)} years`;
    if (hours > 24) return `${Math.round(hours / 24)} days`;
    if (minutes > 60) return `${Math.round(minutes / 60)} hours`;
    if (seconds > 60) return `${Math.round(seconds / 60)} minutes`;
    return `${Math.round(seconds)} seconds`;
}


export default function PasswordVal() {
    const [text, setText] = useState('');
    const [show, setShow] = useState(false);
    const [strength, setStrength] = useState(strengthLevels[0]);
    const [bruteForceTime, setBruteForceTime] = useState('');

    const evaluateStrength = () => {
        if (text.length < 8) return strengthLevels[0];
        const hasLowerCase = /[a-z]/.test(text);
        const hasUpperCase = /[A-Z]/.test(text);
        const hasDigit = /\d/.test(text);
        const hasSpecialChar = /\W/.test(text);
        const score = [hasLowerCase, hasUpperCase, hasDigit, hasSpecialChar].filter(Boolean).length;
        return strengthLevels[score];
    };

    useEffect(() => {
        const newStrength = evaluateStrength();
        setStrength(newStrength);
        if (text.length > 0) setBruteForceTime(estimateBruteForceTime(text));
        else setBruteForceTime('');
    }, [text]);

    return (
        <Container maxWidth="xs">
            <Card className="password-card" sx={{ boxShadow: 6 }}>
                <Typography variant="h5" gutterBottom align="center" fontWeight={700}>
                    🔒 Password Strength Analyzer
                </Typography>

                <Box position="relative" width="100%">
                    <TextField
                        fullWidth
                        value={text}
                        variant="outlined"
                        label="Enter your Password"
                        placeholder="Type password..."
                        type={show ? 'text' : 'password'}
                        onChange={(e) => setText(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <>
                                    {text && (
                                        <Tooltip title="Clear">
                                            <IconButton onClick={() => setText('')}>
                                                <Clear color='error' />
                                            </IconButton>
                                        </Tooltip>
                                    )}
                                    <IconButton onClick={() => setShow(!show)}>
                                        {show ?
                                            <VisibilityOff color='warning' /> :
                                            <Visibility color='primary' />}
                                    </IconButton>
                                </>
                            )
                        }}
                        error={text.length > 0 && text.length < 8}
                        sx={{ mt: 3, mb: 1 }}
                    />
                </Box>

                <Box width="100%" mt={5} mb={1}>
                    <LinearProgress
                        variant="determinate"
                        value={strength.value}
                        color={strength.color}
                        sx={{ height: 10, borderRadius: 5 }}
                    />
                    <Typography
                        mt={1}
                        align="center"
                        fontWeight={600}
                        color={`${strength.color}.main`}
                    >
                        Strength: {strength.label}
                    </Typography>
                </Box>

                {bruteForceTime && (
                    <Tooltip arrow sx={{ cursor: 'pointer' }} title="Estimated time to crack using brute force attack">
                        <Typography mt={1.5} height={15} fontSize="0.9rem" textAlign="center" color="text.secondary">
                            Estimated time to crack: <strong>{bruteForceTime}</strong>
                        </Typography>
                    </Tooltip>
                )}
            </Card>
        </Container>
    );
}
