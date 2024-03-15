import './Weather.css';
import React, { useState } from 'react';
import { fetchWeather, fetchCountry } from './WeatherService';
import { Container, TextField, Box, Button, Card, Typography } from '@mui/material';

export default function WeatherApp() {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState(null);
    const [weather, setWeather] = useState(null);

    const handleSearch = async () => {
        if (!city) return;
        const data = await fetchWeather(city);
        setWeather(data.list[0]);
        if (data.list[0].sys.country) {
            const countryData = await fetchCountry(data.list[0].sys.country);
            setCountry(countryData);
        }
    };

    return (
        <div className='weather-main'>
            <Container maxWidth="sm" sx={{ mt: 5 }}>
                <Card sx={{ p: 2 }}>
                    <Typography variant="h5" gutterBottom>
                        Weather Finder
                    </Typography>
                    <TextField
                        fullWidth
                        label="Enter city name"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        margin="normal"
                    />
                    <Button variant="contained" onClick={handleSearch} sx={{ mb: 2 }}>
                        Get Weather
                    </Button>
                    {weather && country && (
                        <Box>
                            <Typography variant="h6">{`${weather.name}, ${country.name.official} ${country.flag}`}</Typography>
                            <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />
                            <Typography variant="body1">Description: {weather.weather[0].description}</Typography>
                            <Typography variant="body1">Temperature: {weather.main.temp}°C</Typography>
                            <Typography variant="body1">Feels Like: {weather.main.feels_like}°C</Typography>
                            <Typography variant="body1">Min Temp: {weather.main.temp_min}°C, Max Temp: {weather.main.temp_max}°C</Typography>
                            <Typography variant="body1">Pressure: {weather.main.pressure} hPa</Typography>
                            <Typography variant="body1">Humidity: {weather.main.humidity}%</Typography>
                            <Typography variant="body1">Wind Speed: {weather.wind.speed} m/s</Typography>
                        </Box>
                    )}
                </Card>
            </Container>
        </div>
    );
}
