import './Weather.css';
import React, { useState } from 'react';
import { fetchWeather, fetchCountry } from './WeatherService';
import { Container, TextField, Box, Button, Card, Typography, Divider } from '@mui/material';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WindPowerIcon from '@mui/icons-material/WindPower';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ElectricMeterIcon from '@mui/icons-material/ElectricMeter';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

export default function WeatherApp() {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState(null);
    const [weather, setWeather] = useState(null);

    const handleSearch = async () => {
        if (!city) return;
        const data = await fetchWeather(city);
        if (data.list.length === 0) {
            setWeather('No Data');
        } else if (data.list[0].sys.country) {
            setWeather(data.list[0]);
            const countryData = await fetchCountry(data.list[0].sys.country);
            setCountry(countryData);
        } else {
            setWeather('No Data');
        }
    };

    function capitalizeWord(word) {
        return word
            .split(' ')
            .map(w => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' ');
    }

    function fahrenheitToCelsius(kelvin) {
        return (kelvin - 273.15).toFixed(2);
    }

    function convertSpeed(speed) {
        // 1 m/s = 3.6 km/h
        return (speed * 3.6).toFixed(2);
    }

    return (
        <div className='weather-main'>
            <Container maxWidth="sm">
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
                            <div className='weather-result'>
                                <Typography variant="h6" fontWeight={700}>{`${weather.name}, ${country.name.official} ${country.flag}`}</Typography>
                                <div className='weather-icons'>
                                    <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />
                                    <div>
                                        <Typography variant="h4" fontWeight={700}>{fahrenheitToCelsius(weather.main.temp)}°C</Typography>
                                        <Typography variant="subtitle1">{capitalizeWord(weather.weather[0].description)}</Typography>
                                    </div>
                                </div>
                                <div className="weather-temp">
                                    <DeviceThermostatIcon color='primary' />
                                    <Typography variant="subtitle1">Feels Like: {fahrenheitToCelsius(weather.main.feels_like)}°C</Typography>
                                </div>
                                <div className="weather-temp">
                                    <ArrowDownwardIcon color='primary' />
                                    <Typography variant="subtitle1">{fahrenheitToCelsius(weather.main.temp_min)}°C</Typography>
                                    <ArrowUpwardIcon color='primary' />
                                    <Typography variant="subtitle1">{fahrenheitToCelsius(weather.main.temp_max)}°C</Typography>
                                </div>
                                <div className="weather-temp">
                                    <WaterDropIcon color='primary' />
                                    <Typography variant="subtitle1">Humidity: {weather.main.humidity}%</Typography>
                                </div>
                                <div className="weather-temp">
                                    <WindPowerIcon color='primary' />
                                    <Typography variant="subtitle1">Wind Speed: {convertSpeed(weather.wind.speed)} km/h</Typography>
                                </div>
                                <div className="weather-temp">
                                    <ElectricMeterIcon color='primary' />
                                    <Typography variant="subtitle1">Pressure: {weather.main.pressure} hPa</Typography>
                                </div>
                            </div>
                        </Box>
                    )}
                    {weather == 'No Data' && (
                        <Typography variant="h6" fontWeight={700}>City Not Found!!</Typography>
                    )}
                </Card>
            </Container>
        </div>
    );
}
