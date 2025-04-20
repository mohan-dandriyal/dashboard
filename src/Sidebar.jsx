import {
  Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography
} from '@mui/material';


import AppsIcon from '@mui/icons-material/Apps';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BookIcon from '@mui/icons-material/Book';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import SchoolIcon from '@mui/icons-material/School';

const Sidebar = () => {
  const overviewItems = [
    { text: 'App', icon: <AppsIcon fontSize="small" /> },
    { text: 'Ecommerce', icon: <ShoppingCartIcon fontSize="small" /> },
    { text: 'Analytics', icon: <BarChartIcon fontSize="small" /> },
    { text: 'Banking', icon: <AccountBalanceIcon fontSize="small" /> },
    { text: 'Booking', icon: <BookIcon fontSize="small" /> },
    { text: 'File', icon: <InsertDriveFileIcon fontSize="small" /> },
    { text: 'Course', icon: <SchoolIcon fontSize="small" /> },
  ];


  return (
    <Box sx={{
      width: 275,
      bgcolor: 'white',
      borderRight: '1px solid #eee',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Logo */}
      <Box sx={{ p: 3}}>
        <Typography component="div" sx={{ display: 'flex', alignItems: 'center' }}>
          <Box component="span" sx={{
            height: 28,
            width: 28,
            borderRadius: '8px',
            backgroundColor: '#00AB55',
            display: 'inline-block',
            mr: 1
          }} />
        </Typography>
      </Box>

      {/* Sidebar menu */}
      <Box >
        <Box sx={{ width: '90%', margin: '0px auto' }} >
          <Typography
            align='start'
            variant="caption"
            sx={{ py: 1, px: 1, fontWeight : 600, color: '#637381', display: 'block' }}>
            OVERVIEW
          </Typography>

          <List disablePadding
            style={{
              borderRadius: '10px'
            }}>
            {overviewItems.map((item, index) => (
              <ListItemButton
                key={item.text}
                sx={{
                  py: 1,
                  borderRadius: 1.5,
                  bgcolor: index === 0 ? '#f4f6f8' : 'transparent',
                  '&:hover': { bgcolor: '#f4f6f8' },
                }}
              >
                <ListItemIcon sx={{ minWidth: 36, color: index === 0 ? '#00AB55' : '#8f8f8f' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: index === 0 ? 500 : 500,
                    color: index === 0 ? '#00AB55' : '#637381'
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
