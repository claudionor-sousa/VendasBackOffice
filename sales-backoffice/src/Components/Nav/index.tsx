import * as React from 'react';
import {
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PeopleIcon from '@mui/icons-material/People';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';
import './styles.scss';


const navItems = [
  { label: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
  { label: 'Produtos', path: '/product', icon: <InventoryIcon /> },
  { label: 'Vendas', path: '/sales', icon: <PointOfSaleIcon /> },
  { label: 'Clientes', path: '/customers', icon: <PeopleIcon /> },
  { label: 'Financeiro', path: '/financial', icon: <AccountBalanceIcon /> },
  { label: 'Relatórios', path: '/reports', icon: <BarChartIcon /> },
  { label: 'Usuários', path: '/users', icon: <PersonIcon /> },

];

interface DrawerAppBarProps {
  children: React.ReactNode;
  title?:string;
}

export default function DrawerAppBar({ children,title }: DrawerAppBarProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box
      sx={{
        height: '100%',
        backgroundColor: '#254A73 ',
        color: '#fff',
        textAlign: 'center',
        p: 2,
        pt:10
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{
                textAlign: 'left',
                 borderRadius: '8px',
                '&:hover': {
                  backgroundColor: '#3B6FA1', 
                  '& .MuiListItemIcon-root': {
                    color: '#fff', 
                  },
                },
              }}
            >
              {item.icon && (
                <ListItemIcon sx={{ color: '#fff' }}>
                  {item.icon}
                </ListItemIcon>
              )}
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Toolbar
        sx={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1300,
          display: 'flex',
          alignItems: 'center',
          gap: 2, 
        }}
        className="ToolBar"
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ color: "#fff" }}
        >
          <MenuIcon />
        </IconButton> 

        <Typography variant="h6" component="div" sx={{ color: 'white' }}>
          {title}
        </Typography>
      </Toolbar>
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiPaper-root": {
            width: '15vw', 
            height: '100vh',
          },
        }}
      >
        {drawer}
      </Drawer>
      <Box
        component="main"
        sx={{
          p: 1,
          width: '100%',
          transition: 'margin-left 0.3s',
          marginLeft: mobileOpen ? '17vw' : 0,
        }}
      >
        <Toolbar /> 
        {children}
      </Box>
    </Box>
  );
}
