import './PasswordVal.css';
import React, { useEffect, useState } from 'react';
import { Button, Card, TextField, Typography } from '@mui/material';

export default function PasswordVal() {
    const [text, setText] = useState('');
    const [show, setShow] = useState(false);
    const [strength, setStrength] = useState('');

    const validatePassword = () => {
        if (text.length < 8) return 'VeryLow';
        const hasLowerCase = /[a-z]/.test(text);
        const hasUpperCase = /[A-Z]/.test(text);
        const hasDigit = /\d/.test(text);
        const hasSpecialChar = /\W/.test(text);
        const count = [hasLowerCase, hasUpperCase, hasDigit, hasSpecialChar].filter(Boolean).length;
        switch (count) {
            case 1:
                return 'Low';
            case 2:
                return 'Medium';
            case 3:
                return 'High';
            case 4:
                return 'VeryHigh';
            default:
                return 'Low';
        }
    }

    // This useEffect will re-calculate the strength every time the `text` changes.
    useEffect(() => {
        setStrength(validatePassword()); // Directly setting the strength based on current text.
    }, [text]);

    const clearText = () => {
        setText('');
    };

    const hideUnhide = () => {
        setShow(!show);
    }

    return (
        <div className='password-main'>
            <Card className='password-card'>
                <Typography variant="h6" color='primary' fontWeight='700' gutterBottom>
                    Password Strength Checker
                </Typography>
                <TextField
                    value={text}
                    type={show ? 'text' : 'password'}
                    variant="outlined"
                    className='text-field'
                    label="Enter your Password"
                    onChange={(e) => setText(e.target.value)}
                />
                <div className='password-buttons'>
                    <Button variant="outlined" color="info" onClick={hideUnhide}>{show ? 'Hide' : 'Show'}</Button>&nbsp;
                    <Button variant="outlined" color="warning" onClick={clearText}>Clear</Button>
                </div>
                <Typography fontWeight={700} mt={2} color={strength === 'VeryHigh' ? 'success.main' : strength === 'Low' || strength === 'VeryLow' ? 'error.main' : 'warning.main'}>
                    {text ? `Strength: ${strength}` : 'Strength will appear here.'}
                </Typography>
            </Card>
        </div>
    );
};
