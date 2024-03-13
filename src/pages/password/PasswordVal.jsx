import React, { useEffect, useState } from 'react';
import { Button, Card, Container, TextField } from '@mui/material';

const getPasswordStrength = (text) => {
    if (!text) return '';
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
};

export default function PasswordVal() {
    const [text, setText] = useState('');
    const [strength, setStrength] = useState('');
    const [inputType, setInputType] = useState('password');

    useEffect(() => {
        setStrength(getPasswordStrength(text));
    }, [text]);

    const clearText = () => {
        setText('');
    };

    const hideUnhide = () => {
        setInputType(inputType === 'password' ? 'text' : 'password');
    }

    return (
        <>
            <Container
                sx={{
                    height: '100vh',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Card
                    sx={{
                        width: '300px',
                        height: '300px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <TextField
                        className='text-field'
                        variant="outlined"
                        type={inputType}
                        label="Enter your Password"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <br />
                    <div>
                        <Button variant="contained" onClick={hideUnhide}>{inputType === 'password' ? "Unhide" : "Hide"}</Button>&nbsp;
                        <Button variant="outlined" onClick={clearText}>Clear</Button>
                    </div>
                    <br />
                    <h3>
                        <b>
                            {strength && (
                                <p style={{ color: strength === 'VeryHigh' ? 'green' : strength === 'Low' || strength === 'VeryLow' ? 'red' : 'yellow' }}>
                                    {strength}
                                </p>
                            )}
                        </b>
                    </h3>
                </Card>
            </Container>
        </>
    );
};
