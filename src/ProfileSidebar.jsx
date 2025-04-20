import React from 'react';
import { Avatar, Box, Button, Divider, IconButton, Typography, List, ListItem, ListItemIcon, ListItemText, Badge } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SecurityIcon from '@mui/icons-material/Security';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';

const ProfileSidebar = () => {
  return (
    <Box
      sx={{
        width: 300,
        height: '100vh',
        bgcolor: '#fff',
        boxShadow: '0 4px 95px 0px rgba(0,0,0,0.05)',
        p: 2,
        position: 'relative'
      }}
    >
      {/* Close Button */}
      <IconButton sx={{ position: 'absolute', top: 8, left: 8 }}>
        <CloseIcon />
      </IconButton>

      {/* Profile Section */}
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Avatar
          src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_25.jpg"
          sx={{ width: 80, height: 80, mx: 'auto' }}
        />
        <Typography variant="subtitle1" sx={{ mt: 1 }}>
          Jaydon Frankie
        </Typography>
        <Typography variant="body2" color="text.secondary">
          demo@minimals.cc
        </Typography>

        {/* Mini avatars */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, gap: 1 }}>
          {['avatar_11', 'avatar_12', 'avatar_13'].map((img, i) => (
            <Avatar
              key={i}
              src={`https://minimal-assets-api.vercel.app/assets/images/avatars/${img}.jpg`}
              sx={{ width: 32, height: 32 }}
            />
          ))}
          <Avatar sx={{ width: 32, height: 32, bgcolor: '#f4f6f8', color: '#637381' }}>+</Avatar>
        </Box>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* Menu */}
      <List>
        <ListItem button>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button selected>
          <ListItemIcon><AccountCircleIcon /></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <Badge badgeContent={3} color="error">
              <AssignmentIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>

        <ListItem button>
          <ListItemIcon><MonetizationOnIcon /></ListItemIcon>
          <ListItemText primary="Subscription" />
        </ListItem>

        <ListItem button>
          <ListItemIcon><SecurityIcon /></ListItemIcon>
          <ListItemText primary="Security" />
        </ListItem>

        <ListItem button>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Account settings" />
        </ListItem>
      </List>

      {/* Logout */}
      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 3, bgcolor: '#FFEAEA', color: '#D32F2F', '&:hover': { bgcolor: '#FFCDD2' } }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default ProfileSidebar;
