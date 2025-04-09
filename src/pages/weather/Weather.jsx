import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from '@mui/icons-material';
import {
    Container, TextField, Card, Typography, IconButton, Box
} from '@mui/material';

import './Weather.css';
import WeatherReport from './WeatherReport';


// Weather App Component
export default function WeatherApp() {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState(null);
    const [weather, setWeather] = useState(null);

    const handleSearch = async () => {
        if (!city) return;
        const data = await fetchWeather(city);

        if (data?.sys?.country) {
            const countryData = await fetchCountry(data?.sys?.country);
            if (!countryData?.name) {
                setWeather(null);
                setCountry({ "error": "NOT FOUND" }); return;
            }
            setWeather(data);
            setCountry(countryData);
        } else {
            setWeather('No Data');
        }
    };

    const fetchWeather = async (city) => {
        try {
            const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
            const baseUrl = import.meta.env.VITE_WEATHER_API_URL;
            const url = `${baseUrl}?q=${city}&type=accurate&appid=${apiKey}`;

            const response = await fetch(url);
            if (!response.ok) return {};
            return await response.json();
        } catch (error) {
            console.error('Error fetching weather:', error);
            return {};
        }
    };

    const fetchCountry = async (countryCode) => {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
            const data = await response.json();
            return data[0] || {};
        } catch (error) {
            console.error('Error fetching country data:', error);
            return {};
        }
    };

    return (
        <Container maxWidth="xs">
            <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <Card sx={{ p: 2, pb: 1, boxShadow: 6, borderRadius: 3, minHeight: '200px' }}>
                    <Typography variant="h5" gutterBottom align="center" fontWeight={700}>
                        🌤️ Weather App
                    </Typography>
                    <TextField
                        fullWidth
                        value={city}
                        margin="normal"
                        label="Enter city name"
                        placeholder="Search weather by city"
                        onChange={(e) => setCity(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        InputLabelProps={{ shrink: true }}
                        InputProps={{
                            endAdornment: (
                                <IconButton
                                    color="primary"
                                    className='search-button'
                                    onClick={handleSearch} disabled={!city}>
                                    <Search />
                                </IconButton>
                            ),
                        }}
                    />
                    <Box mt={1}>
                        {weather && country && (
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.4 }}
                            >
                                <WeatherReport weather={weather} country={country} />
                            </motion.div>
                        )}
                        {weather === 'No Data' && (
                            <Typography
                                mt={2}
                                variant="h6"
                                color="error"
                                align="center"
                                fontWeight={700}
                            >
                                ❌ City Not Found!
                            </Typography>
                        )}
                        {country?.error === "NOT FOUND" && (
                            <Typography
                                mt={2}
                                variant="h6"
                                color="error"
                                align="center"
                                fontWeight={700}
                            >
                                ❌ Country Not Found!
                            </Typography>
                        )}
                    </Box>
                </Card>
            </motion.div>
        </Container>
    );
}
