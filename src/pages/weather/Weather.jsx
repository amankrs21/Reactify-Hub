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
    const [weather, setWeather] = useState(null);
    const [country, setCountry] = useState(null);
    const [cityError, setCityError] = useState(false);
    const [countryError, setCountryError] = useState(false);

    const handleSearch = async () => {
        if (!city.trim()) return;

        // Reset previous state
        setWeather(null);
        setCountry(null);
        setCityError(false);
        setCountryError(false);

        const data = await fetchWeather(city.trim());

        if (data?.cod === '404' || !data?.sys?.country) {
            setCityError(true);
            return;
        }

        const countryData = await fetchCountry(data.sys.country);
        if (!countryData?.name) {
            setCountryError(true);
        }

        setWeather(data);
        setCountry(countryData);
    };

    const fetchWeather = async (city) => {
        try {
            const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
            const baseUrl = import.meta.env.VITE_WEATHER_API_URL;
            const url = `${baseUrl}?q=${city}&type=accurate&appid=${apiKey}`;

            const response = await fetch(url);
            if (!response.ok) {
                return {};
            }

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
                        error={cityError}
                        helperText={cityError ? "❌ City not found!" : ''}
                        InputLabelProps={{ shrink: true }}
                        InputProps={{
                            endAdornment: (
                                <IconButton
                                    color="primary"
                                    className='search-button'
                                    onClick={handleSearch}
                                    disabled={!city.trim()}
                                >
                                    <Search />
                                </IconButton>
                            ),
                        }}
                    />

                    <Box mt={1}>
                        {countryError && (
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

                        {weather && country && !cityError && !countryError && (
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.4 }}
                            >
                                <WeatherReport weather={weather} country={country} />
                            </motion.div>
                        )}
                    </Box>
                </Card>
            </motion.div>
        </Container>
    );
}
