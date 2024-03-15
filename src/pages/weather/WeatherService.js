const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const KEY = '00f400d0546c66bc9091f6f14060c2bd';

export const fetchWeather = async (city) => {
    try {
        const url = `${process.env.REACT_APP_API_BASE_URL}?q=${city}&units=imperial&type=accurate&appid=${process.env.REACT_APP_API_KEY}`;
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.error('Error fetching weather:', error);
    }
};


export const fetchCountry = async (countryCode) => {
    try {
        const response = await fetch('https://restcountries.com/v3.1/alpha/' + countryCode);
        const data = await response.json();

        const countryData = data[0];

        if (countryData) {
            return countryData;
        } else {
            console.log('Country code not found');
            return 'Country code not found';
        }
    } catch (error) {
        console.error('Error fetching country data:', error);
    }
}