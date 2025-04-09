import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Typography, Box } from '@mui/material';
import {
    ArrowDownward, ArrowUpward, DeviceThermostat, ElectricMeter,
    WaterDrop, WindPower
} from '@mui/icons-material';


// WeatherReport Component
export default function WeatherReport({ weather, country }) {

    const capitalizeWord = (word) =>
        word
            .split(' ')
            .map(w => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' ');

    const kelvinToCelsius = (k) => (k - 273.15).toFixed(2);
    const convertSpeed = (speed) => (speed * 3.6).toFixed(2);

    const weatherData = [
        {
            icon: <DeviceThermostat />,
            label: 'Feels Like',
            value: `${kelvinToCelsius(weather.main.feels_like)}°C`
        },
        {
            icon: <ArrowDownward />,
            label: 'Min Temp',
            value: `${kelvinToCelsius(weather.main.temp_min)}°C`
        },
        {
            icon: <ArrowUpward />,
            label: 'Max Temp',
            value: `${kelvinToCelsius(weather.main.temp_max)}°C`
        },
        {
            icon: <WaterDrop />,
            label: 'Humidity',
            value: `${weather.main.humidity}%`
        },
        {
            icon: <WindPower />,
            label: 'Wind',
            value: `${convertSpeed(weather.wind.speed)} km/h`
        },
        {
            icon: <ElectricMeter />,
            label: 'Pressure',
            value: `${weather.main.pressure} hPa`
        },
    ];

    return (
        <motion.div
            className="weather-result"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Typography variant="h6" fontWeight={700} align="center">
                {weather.name}, {country.name.common} {country.flag}
            </Typography>

            <Box className="weather-icons">
                <img
                    width="100"
                    height="100"
                    alt={weather.weather[0].description}
                    src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                />

                <Box ml={2}>
                    <Typography variant="h4" fontWeight={700}>
                        {kelvinToCelsius(weather.main.temp)}°C
                    </Typography>
                    <Typography variant="subtitle1">
                        {capitalizeWord(weather.weather[0].description)}
                    </Typography>
                </Box>
            </Box>

            {/* Compact Card Layout */}
            <Box
                gap={1}
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
            >
                {weatherData.map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="weather-info-card"
                    >
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            textAlign="center"
                            p={2}
                        >
                            <Box className="info-icon">
                                {item.icon}
                            </Box>
                            <Typography variant="subtitle2" fontWeight={600}>
                                {item.label}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {item.value}
                            </Typography>
                        </Box>
                    </motion.div>
                ))}
            </Box>
        </motion.div>
    );
}

WeatherReport.propTypes = {
    weather: PropTypes.object.isRequired,
    country: PropTypes.object.isRequired,
};
