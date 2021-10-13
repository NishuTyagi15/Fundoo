import React from 'react'
import '../Dashboard/Home.css'
import Box from '@mui/material/Box';
import keep from '../Dashboard/keep.png'
import { styled, useTheme, alpha } from '@material-ui/core/styles'
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@mui/material/Divider';
import ChevronRight from '@material-ui/icons/ChevronRight'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import { Drawer as SideNav,
        ListItem, 
        ListItemIcon, 
        ListItemText  
} from "@material-ui/core";
import MuiAppBar from '@mui/material/AppBar';
import ModeEditOutlineOutlinedIcon from '@material-ui/icons/EditOutlined';
import LightbulbOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@mui/material/InputBase';
import Clear from '@material-ui/icons/Clear';
import Badge from '@material-ui/core/Badge';
import Refresh from '@material-ui/icons/Refresh';
import ViewStreamSharp from '@material-ui/icons/ViewStreamSharp';
import SettingsOutlined from '@material-ui/icons/SettingsOutlined';


    
const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});
  
const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(9)} + 1px)`,
    },
});
  
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
}));
  
  const Drawer = styled(SideNav, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .SideNav-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .SideNav-paper': closedMixin(theme),
      }),
    }),
  );

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  

const Home = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                  <IconButton
                    color="inherit"
                      aria-label="open drawer"
                      onClick={handleDrawerOpen} 
                      edge="start"
                      sx={{
                        marginRight: '36px',
                        ...(open && { display: 'none' }),
                      }}
                  >
                  <MenuIcon/>
                  </IconButton>
                  <img src={keep} className='keep_logo' alt="keep image" />
                  <Typography variant="h5" noWrap component="div" className="keep">
                    Keep
                  </Typography>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                    />
                    <SearchIconWrapper className="clear">
                      <Clear />
                    </SearchIconWrapper>

                  </Search>
                  <Box sx={{ flexGrow: 1 }} />
                  <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <IconButton size="large" color="inherit">
                      <Badge className="refresh">
                        <Refresh />
                      </Badge>
                    </IconButton>
                    <IconButton
                      size="large"
                      color="inherit"
                    >
                      <Badge className="view">
                        <ViewStreamSharp />
                      </Badge>
                    </IconButton>
                    <IconButton
                      size="large"
                      edge="end"
                      color="inherit"
                      className="settings"
                    >
                      <SettingsOutlined />
                    </IconButton>
                  </Box>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                {['Notes', 'Reminders', 'Edit Labels', 'Archive', 'Trash'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>
                      {index <= 0 ? <LightbulbOutlinedIcon/>: <InboxIcon/> && index <=1 ? <NotificationsNoneIcon/> : <InboxIcon/>
                      && index <=2 ? <ModeEditOutlineOutlinedIcon/> : <InboxIcon/>
                      && index <=3 ? <ArchiveOutlinedIcon/> : <InboxIcon/>
                      && index <=4 ? <DeleteOutlineOutlinedIcon/> : <InboxIcon/>}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <DrawerHeader />
       
            </Box>
        </Box>
    );
};

export default Home
