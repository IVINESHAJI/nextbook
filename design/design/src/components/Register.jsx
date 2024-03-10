import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import FacebookIcon from '@mui/icons-material/Facebook';
import logo_1 from '../images/logo_1.jpg';


const Register = () => {

    const theme = createTheme({
        palette: {
            primary: {
            main: '#dc2626',
            },
            secondary: {
            main: '#dc2626', 
            },
        },
    });

    const [ value, setValue ] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className='container d-flex justify-content-between ' style={{ height: '500px' }}>

            <div className='d-flex align-items-center'>
                <a href='/' className='h4 text-decoration-none'>
                    <img src={logo_1} alt="Logo" width="50"/>
                    <blockquote className='blockquote'>
                        <p>NextBook.</p>
                    </blockquote>
                </a>
            </div>

            <Box sx={{ width: '70%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Register" value="1" />
                        <Tab label="Sign In" value="2" />
                    </TabList>
            </Box>

                    <TabPanel value="1">
                        <TextField id='outlined-basic' label="Full Name" variant='outlined' sx={{ width: '100%', mb: '2rem' }}/><br/>
                        <TextField id='outlined-basic' label="Email" type='email' variant='outlined' sx={{ width: '100%', mb: '2rem' }}/><br/>
                        <TextField id='outlined-basic' label="Username" variant='outlined' sx={{ width: '100%', mb: '2rem' }}/><br/>
                        
                        <FormControl sx={{ width: '100%', mb:'2rem' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Password"
                        />
                        </FormControl> <br/>    
                        
                        <ThemeProvider theme={theme}>
                            <Button variant='contained' color='primary' sx={{ height:'3rem', mb:'2rem' }}>Register Now</Button> <br/>
                        </ThemeProvider>

                        <Box sx={{ fontSize: '1.5rem', fontWeight : 'bold' }}>
                            Or register with :
                        </Box>
                        
                        <Box sx= {{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                            <Button><GoogleIcon/></Button>
                            <Button><FacebookIcon/></Button>
                            <Button><AppleIcon/></Button>
                            <Button><MicrosoftIcon/></Button>
                        </Box>

                    </TabPanel>


                    <TabPanel value="2">
                        <TextField id='outlined-basic' label="Username or email" variant='outlined' sx={{ width: '100%', mb: '2rem' }}/><br/>

                        <FormControl sx={{ width: '100%', mb:'2rem' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Password"
                        />
                        </FormControl> <br/>    
                        
                        <ThemeProvider theme={theme}>
                            <Button variant='contained' color='primary' sx={{ height:'3rem', mb: '2rem' }}>Sign In</Button>
                        </ThemeProvider> 

                        <Box sx={{ fontSize: '1.5rem', fontWeight : 'bold' }}>
                            Or sign in with :
                        </Box>
                        
                        <Box sx= {{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                            <Button><GoogleIcon/></Button>
                            <Button><FacebookIcon/></Button>
                            <Button><AppleIcon/></Button>
                            <Button><MicrosoftIcon/></Button>
                        </Box>         
                    </TabPanel>

                </TabContext>
            </Box>


        </div>
    );
}

export default Register;