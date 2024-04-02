import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import DialogContent from '@mui/material/DialogContent';
import Autocomplete from '@mui/material/Autocomplete';
import "./Navbar.css"
import Dialog from '@mui/material/Dialog';
import LoginForm from "./LoginForm";
import Banner from '../assets/Capture.PNG';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import { useHistory } from "react-router-dom";

const pages = ['News', 'Videos'];
// const settings = ['MyProfile', 'Order', 'Whislit', 'Coupons', 'Gift Cards', 'Logout', 'Notification'];

const settings = [
    {
        id: 1,
        name: "My Profile",
        link: "/myprofile"
    },
    {
        id: 2,
        name: "Your Orders",
        link: "/yourorders"
    },
    {
        id: 3,
        name: "Whislit",
        link: "/whislit"
    },
    {
        id: 4,
        name: "Coupons",
        link: "/coupons"
    },
    {
        id: 5,
        name: "Gift Cards",
        link: "/giftcards"
    },
    {
        id: 6,
        name: "Logout",

    },
    // {
    //     id: 7,
    //     name: "Notification",
    //     link: "/notification"
    // },
]
function ResponsiveAppBar() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    // const [isLoginned, setisLoginned] = React.useState(true);

    const token = localStorage.getItem('access_token');
    const isLoginned = !!token;
    // const navigate = useNavigate();
    // const navigate = useHistory();

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleLogout = () => {
        localStorage.removeItem('access_token'); // Remove token from local storage
        // history.push('/login'); // Redirect the user to the login page after logout
        handleCloseUserMenu(); // Close the menu after logout
    };
    const handleOpen = () => {
        // localStorage.removeItem('access_token'); // Remove token from local storage
        // navigate("/UserProfile");
        // handleCloseUserMenu(); // Close the menu after logout
    };

    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
        {
            title: 'The Lord of the Rings: The Return of the King',
            year: 2003,
        },
        { title: 'The Good, the Bad and the Ugly', year: 1966 },
        { title: 'Fight Club', year: 1999 },
        {
            title: 'The Lord of the Rings: The Fellowship of the Ring',
            year: 2001,
        },
        {
            title: 'Star Wars: Episode V - The Empire Strikes Back',
            year: 1980,
        },
        { title: 'Forrest Gump', year: 1994 },
        { title: 'Inception', year: 2010 },
        {
            title: 'The Lord of the Rings: The Two Towers',
            year: 2002,
        },
        { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
        { title: 'Goodfellas', year: 1990 },
        { title: 'The Matrix', year: 1999 },
        { title: 'Seven Samurai', year: 1954 },
        {
            title: 'Star Wars: Episode IV - A New Hope',
            year: 1977,
        },
        { title: 'City of God', year: 2002 },
        { title: 'Se7en', year: 1995 },
        { title: 'The Silence of the Lambs', year: 1991 },
        { title: "It's a Wonderful Life", year: 1946 },
        { title: 'Life Is Beautiful', year: 1997 },
        { title: 'The Usual Suspects', year: 1995 },
        { title: 'Léon: The Professional', year: 1994 },
        { title: 'Spirited Away', year: 2001 },
        { title: 'Saving Private Ryan', year: 1998 },
        { title: 'Once Upon a Time in the West', year: 1968 },
        { title: 'American History X', year: 1998 },
        { title: 'Interstellar', year: 2014 },
        { title: 'Casablanca', year: 1942 },
        { title: 'City Lights', year: 1931 },
        { title: 'Psycho', year: 1960 },
        { title: 'The Green Mile', year: 1999 },
        { title: 'The Intouchables', year: 2011 },
        { title: 'Modern Times', year: 1936 },
        { title: 'Raiders of the Lost Ark', year: 1981 },
        { title: 'Rear Window', year: 1954 },
        { title: 'The Pianist', year: 2002 },
        { title: 'The Departed', year: 2006 },
        { title: 'Terminator 2: Judgment Day', year: 1991 },
        { title: 'Back to the Future', year: 1985 },
        { title: 'Whiplash', year: 2014 },
        { title: 'Gladiator', year: 2000 },
        { title: 'Memento', year: 2000 },
        { title: 'The Prestige', year: 2006 },
        { title: 'The Lion King', year: 1994 },
        { title: 'Apocalypse Now', year: 1979 },
        { title: 'Alien', year: 1979 },
        { title: 'Sunset Boulevard', year: 1950 },
        {
            title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
            year: 1964,
        },
        { title: 'The Great Dictator', year: 1940 },
        { title: 'Cinema Paradiso', year: 1988 },
        { title: 'The Lives of Others', year: 2006 },
        { title: 'Grave of the Fireflies', year: 1988 },
        { title: 'Paths of Glory', year: 1957 },
        { title: 'Django Unchained', year: 2012 },
        { title: 'The Shining', year: 1980 },
        { title: 'WALL·E', year: 2008 },
        { title: 'American Beauty', year: 1999 },
        { title: 'The Dark Knight Rises', year: 2012 },
        { title: 'Princess Mononoke', year: 1997 },
        { title: 'Aliens', year: 1986 },
        { title: 'Oldboy', year: 2003 },
        { title: 'Once Upon a Time in America', year: 1984 },
        { title: 'Witness for the Prosecution', year: 1957 },
        { title: 'Das Boot', year: 1981 },
        { title: 'Citizen Kane', year: 1941 },
        { title: 'North by Northwest', year: 1959 },
        { title: 'Vertigo', year: 1958 },
        {
            title: 'Star Wars: Episode VI - Return of the Jedi',
            year: 1983,
        },
        { title: 'Reservoir Dogs', year: 1992 },
        { title: 'Braveheart', year: 1995 },
        { title: 'M', year: 1931 },
        { title: 'Requiem for a Dream', year: 2000 },
        { title: 'Amélie', year: 2001 },
        { title: 'A Clockwork Orange', year: 1971 },
        { title: 'Like Stars on Earth', year: 2007 },
        { title: 'Taxi Driver', year: 1976 },
        { title: 'Lawrence of Arabia', year: 1962 },
        { title: 'Double Indemnity', year: 1944 },
        {
            title: 'Eternal Sunshine of the Spotless Mind',
            year: 2004,
        },
        { title: 'Amadeus', year: 1984 },
        { title: 'To Kill a Mockingbird', year: 1962 },
        { title: 'Toy Story 3', year: 2010 },
        { title: 'Logan', year: 2017 },
        { title: 'Full Metal Jacket', year: 1987 },
        { title: 'Dangal', year: 2016 },
        { title: 'The Sting', year: 1973 },
        { title: '2001: A Space Odyssey', year: 1968 },
        { title: "Singin' in the Rain", year: 1952 },
        { title: 'Toy Story', year: 1995 },
        { title: 'Bicycle Thieves', year: 1948 },
        { title: 'The Kid', year: 1921 },
        { title: 'Inglourious Basterds', year: 2009 },
        { title: 'Snatch', year: 2000 },
        { title: '3 Idiots', year: 2009 },
        { title: 'Monty Python and the Holy Grail', year: 1975 },
    ];
    return (
        <AppBar position="static" sx={{ background: 'none', color: 'black' }} >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }} >


                    <img
                        className="d-block "
                        src={Banner}
                        alt="First slide"
                    />
 
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: "3%" }}  >

                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block', fontWeight: '600' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Stack spacing={1} sx={{ width: 500 }} direction="row" alignItems="center" gap={3}>

                        <Autocomplete
                            fullWidth
                            freeSolo
                            size='small'
                            id="free-solo-2-demo"
                            disableClearable

                            sx={{ marginRight: '10px', display: { xs: "none", md: "block" } }}
                            options={top100Films.map((option) => option.title)}
                            renderInput={(params) => (
                                <TextField

                                    {...params}
                                    label="Search Products"
                                    InputProps={{
                                        ...params.InputProps,
                                        type: 'search',
                                    }}
                                />
                            )}
                        />
                        {isLoginned ? (
                          <ShoppingCartOutlinedIcon sx={{ display: { xs: 'flex', md: 'block', lg: 'block', xl: 'block' }, color: '#343a40', m: 1 }} />):(null)}
                            {isLoginned ? (
                        <NotificationsActiveOutlinedIcon sx={{ display: { xs: 'flex', md: 'block', lg: 'block', xl: 'block' }, color: '#343a40', m: 1 }} />):(null)}
                        {/* <SearchOutlinedIcon sx={{ display: { xs: 'flex', md: 'block', lg: 'block', xl: 'block' }, color: '#343a40', m: 1 }} /> */}
                        {/* <Stack direction="row">
                            <div>
                                {isLoginned ? (
                                    <Typography >My Account</Typography>
                                ) : (
                                    <Button variant="contained" onClick={handleClickOpen}>
                                        Login
                                    </Button>
                                )}

                            </div>

                        </Stack> */}
 
                        <Dialog
                            open={open}
                            onClose={handleClose}>

                            <DialogContent>
                                <LoginForm />
                            </DialogContent>
                        </Dialog>
                       
                        <Box sx={{ flexGrow: 0 }}>
                            
                            {isLoginned ? (
                                <><Tooltip title="Open settings" >
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}   >
                                       
                                      
                        <Avatar alt="Gemy Sharp" src="/static/images/avatar/2.jpg" sx={{margin:2}}/>
                                    </IconButton>
                                </Tooltip>

                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        {/* {settings.map((setting) => (
                                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                <Typography textAlign="center">{setting.name}</Typography>
                                            </MenuItem>
                                        ))} */}

                                        <MenuItem onClick={handleOpen}>
                                            <Button href='/profile'>My Profile</Button>
                                            {/* <LogoutIcon sx={{ ml: 1 }} /> */}
                                        </MenuItem>
                                        <MenuItem onClick={handleOpen}>
                                            <Button href='/yourorders'>Your Orders</Button>
                                            {/* <LogoutIcon sx={{ ml: 1 }} /> */}
                                        </MenuItem>
                                        <MenuItem onClick={handleOpen}>
                                            <Button href='/whislit'>Wishlist</Button>
                                            {/* <LogoutIcon sx={{ ml: 1 }} /> */}
                                        </MenuItem>
                                        <MenuItem onClick={handleOpen}>
                                            <Button href='/coupons'>Coupons</Button>
                                            {/* <LogoutIcon sx={{ ml: 1 }} /> */}
                                        </MenuItem>
                                        <MenuItem onClick={handleOpen}>
                                            <Button href='/giftcards'>Gift Cards</Button>
                                            {/* <LogoutIcon sx={{ ml: 1 }} /> */}
                                        </MenuItem>
                                        <MenuItem onClick={handleLogout}>
                                            <Button>Logout</Button>
                                            {/* <Typography textAlign="center"></Typography> */}
                                            {/* <LogoutIcon sx={{ ml: 1 }} /> */}
                                        </MenuItem>
                                        {/* <MenuItem onClick={handleOpen}>  
                                            <Button href='/notification'>Notification</Button>
                                            <LogoutIcon sx={{ ml: 1 }} />
                                        </MenuItem> */}
                                    </Menu></>
                            ) : (
                                <Button variant="contained" onClick={handleClickOpen}>
                                    SignUp/Login
                                </Button>
                            )}

                        </Box>

                    </Stack>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{ color: 'black', fontWeight: '600' }}>
                                    <Typography textAlign="center"  >{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
                <Toolbar sx={{ display: { xs: "block", md: "none" } }}>
                    <Autocomplete
                        fullWidth
                        freeSolo
                        size='small'
                        id="free-solo-2-demo"
                        disableClearable
                        sx={{ marginRight: '10px' }}
                        options={top100Films.map((option) => option.title)}
                        renderInput={(params) => (
                            <TextField

                                {...params}
                                label="Search Products"
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                }}
                            />
                        )}
                    />

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;