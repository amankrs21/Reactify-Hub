import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Container, Avatar
} from '@mui/material';
import {
    Menu as MenuIcon, Home, CloudQueue, Https, Calculate, DirectionsRun, Description
} from '@mui/icons-material';


// Header Component
export default function Navbar() {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpen = (page) => {
        navigate(page);
        setAnchorElNav(null);
    }

    const isActive = (page) => location.pathname.split('/')[1] === page;

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    {/* LARGE SCREEN VIEW */}
                    <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => window.location.reload()}>
                        <Avatar
                            variant="square"
                            alt="header-icon"
                            src="/navbar.png"
                            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                        />
                        <Typography noWrap variant="h6" fontWeight={800} sx={{ display: { xs: 'none', md: 'flex' } }}>
                            Reactify Hub
                        </Typography>
                    </Box>

                    {/* RIGHT: Nav Items */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                        <MenuItem onClick={() => navigate('/home')} className={isActive('home') ? "active-route" : "non-active-route"}>
                            <Home />&nbsp;<Typography variant="body1">Home</Typography>
                        </MenuItem>
                        <MenuItem onClick={() => navigate('/weather')} className={isActive('weather') ? "active-route" : "non-active-route"}>
                            <CloudQueue />&nbsp;<Typography variant="body1">Weather</Typography>
                        </MenuItem>
                        <MenuItem onClick={() => navigate('/password')} className={isActive('password') ? "active-route" : "non-active-route"}>
                            <Https />&nbsp;<Typography variant="body1">Password</Typography>
                        </MenuItem>
                        <MenuItem onClick={() => navigate('/calculator')} className={isActive('calculator') ? "active-route" : "non-active-route"}>
                            <Calculate />&nbsp;<Typography variant="body1">Calculator</Typography>
                        </MenuItem>
                        <MenuItem onClick={() => navigate('/bmi')} className={isActive('bmi') ? "active-route" : "non-active-route"}>
                            <DirectionsRun />&nbsp;<Typography variant="body1">BMI</Typography>
                        </MenuItem>
                        <MenuItem onClick={() => navigate('/notes')} className={isActive('notes') ? "active-route" : "non-active-route"}>
                            <Description />&nbsp;<Typography variant="body1">Notes</Typography>
                        </MenuItem>
                    </Box>



                    {/* SMALL SCREEN VIEW */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            color="inherit"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            keepMounted
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            <MenuItem onClick={() => handleOpen('home')} className={isActive('home') ? "pop-active" : "pop-non-active"}>
                                <Home />&nbsp;<Typography variant="body1" fontWeight={800}>Home</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => handleOpen('weather')} className={isActive('weather') ? "pop-active" : "pop-non-active"}>
                                <CloudQueue />&nbsp;<Typography variant="body1" fontWeight={800}>Weather</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => handleOpen('password')} className={isActive('password') ? "pop-active" : "pop-non-active"}>
                                <Https />&nbsp;<Typography variant="body1" fontWeight={800}>Password</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => handleOpen('calculator')} className={isActive('calculator') ? "pop-active" : "pop-non-active"}>
                                <Calculate />&nbsp;<Typography variant="body1" fontWeight={800}>Calculator</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => handleOpen('bmi')} className={isActive('bmi') ? "pop-active" : "pop-non-active"}>
                                <DirectionsRun />&nbsp;<Typography variant="body1" fontWeight={800}>BMI</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => handleOpen('notes')} className={isActive('notes') ? "pop-active" : "pop-non-active"}>
                                <Description />&nbsp;<Typography variant="body1" fontWeight={800}>Notes</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Avatar
                        variant="square"
                        alt="header-icon"
                        src="/navbar.png"
                        onClick={() => { window.location.reload() }}
                        sx={{ display: { xs: 'flex', md: 'none', cursor: 'pointer' } }}
                    />
                    <Typography noWrap variant="h6" fontWeight={800} sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 2 }}>
                        &nbsp;Reactify Hub
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
