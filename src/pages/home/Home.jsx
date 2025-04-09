import { useNavigate } from 'react-router-dom';
import { Container, Typography, Grid, Divider, Card } from '@mui/material';


// Home Component
export default function Home() {
    const navigate = useNavigate();
    return (
        <Container maxWidth="lg">
            <Typography pt={2} variant="h4" align="center" gutterBottom >
                Welcome to Reactify Hub!
            </Typography>
            <Divider />
            <Typography variant="body1" align="center" paragraph>
                Explore the power of React with our interactive features designed to showcase its versatility and functionality. From secure password handling to real-time weather forecasting, we&apos;ve got you covered.
            </Typography>
            <Grid container spacing={3} justifyContent="center" mt={2}>
                <Grid item xs={12} md={4}>
                    <Card className='home-card' onClick={() => navigate('/weather')}>
                        <Typography variant="h6" align="center" gutterBottom>Weather App</Typography>
                        <Typography variant="body2" align="center" paragraph>
                            Plan your day with confidence using our weather app. Stay informed about current conditions and get accurate forecasts to help you prepare for any weather.
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className='home-card' onClick={() => navigate('/password')}>
                        <Typography variant="h6" align="center" gutterBottom>Password Validation</Typography>
                        <Typography variant="body2" align="center" paragraph>
                            Test the strength of your passwords with our password validation tool. Ensure your accounts stay secure with robust password practices. It can rate your password&apos;s strength.
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} onClick={() => navigate('/calculator')}>
                    <Card className='home-card'>
                        <Typography variant="h6" align="center" gutterBottom>Arithmetic Calculator</Typography>
                        <Typography variant="body2" align="center" paragraph>
                            Need to perform more advanced calculations? Our arithmetic calculator handles complex mathematical operations with precision and efficiency, our calculator makes math a breeze.
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className='home-card' onClick={() => navigate('/bmi')}>
                        <Typography variant="h6" align="center" gutterBottom>BMI Calculator</Typography>
                        <Typography variant="body2" align="center" paragraph>
                            Stay on top of your health goals with our BMI calculator. Track your body mass index and monitor your progress toward a healthier lifestyle.
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className='home-card' onClick={() => navigate('/notes')}>
                        <Typography variant="h6" align="center" gutterBottom>Notes Store</Typography>
                        <Typography variant="body2" align="center" paragraph>
                            Stay organized and productive with our todo lists. Manage your tasks, set reminders, and prioritize your goals to stay on track and accomplish more.
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
            <Typography variant="body2" align="center" paragraph mt={3}>
                Powered by React and enhanced with Material UI, our applications provide a seamless and intuitive user experience. React&apos;s component-based architecture and virtual DOM make it easy to create dynamic and responsive interfaces, while Material UI&apos;s pre-built components ensure a polished and modern look.
            </Typography>
        </Container>
    );
}
