import React, { useState } from 'react';
import {
  Box,
  Typography,
  Chip,
  IconButton,
  Avatar,
  Breadcrumbs,
  Link,
  Container,
  Button,
  ListItemButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Sidebar from './Sidebar';
import { InvoiceTable } from './Table';
import { CreateUserForm } from './CreateUserForm';
import FormBox from './FormBox';
import ProfileSidebar from './ProfileSidebar';

import dayjs from 'dayjs';
import { Datepiker } from './Datepiker';

const Dashboard = () => {

  

async function checkPrimiis () {
    await new Promise((resolve) => setTimeout( resolve, 3000))
    console.log("mohan");
    
}


  

  const [dates, setDates] = useState({
    FormDate: dayjs(new Date()),
    ToDate: dayjs(new Date())
  })

  function handleDate(actionType) {
    if (actionType === 'to Date') {
      setDates({
        ...dates,
        FormDate: dayjs(new Date()),
        ToDate: dayjs(new Date())
      });
    }
    else if (actionType === 'this Week') {
      const startOfWeek = dayjs().startOf('week'); // Sunday
      const endOfWeek = dayjs().endOf('week');     // Saturday
      setDates({
        ...dates,
        FormDate: startOfWeek,
        ToDate: endOfWeek
      });
    }
    else if (actionType === 'this Month') {
      const startOfMonth = dayjs().startOf('month');
      const endOfMonth = dayjs().endOf('month');
      setDates({
        ...dates,
        FormDate: startOfMonth,
        ToDate: endOfMonth
      });
    }
  }

  let btnStyle = {
    bgcolor: '#5048e5',
    color: '#ffff',
    fontSize : 12,
    height : 38,
    mt : 1,
    px : 2,
    '&:hover': {
      bgcolor: 'black'
    }
  }

  return (
    <Box sx={{ display: 'flex', height: '100vh', }}>
      <Sidebar />

      {/* Main content */}
      <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
        {/* Top navigation */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 3,
          py: 1,
          borderBottom: '1px solid #eee',
          bgcolor: 'white'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ width: 24, height: 24, bgcolor: '#5048E5', fontSize: '0.75rem', mr: 1 }}>T</Avatar>
            <Typography variant="subtitle2">Team 1</Typography>
            <Chip
              label="Free"
              size="small"
              sx={{
                ml: 1,
                fontSize: '0.625rem',
                height: 20,
                borderRadius: 1,
                bgcolor: '#f5f5f5',
                color: '#637381'
              }}
            />
          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}>
            <IconButton size="small">
              <SearchIcon fontSize="small" />
            </IconButton>
            <Box>🇬🇧</Box>
            <IconButton size="small" sx={{ bgcolor: '#f5f5f5' }}>
              <NotificationsIcon fontSize="small" />
            </IconButton>
            <IconButton size="small">
              <Avatar sx={{ width: 24, height: 24 }} />
            </IconButton>
          </Box>
        </Box>

        {/* Dashboard content */}
        <Box sx={{ p: 3, px: 8 }}>

          <Box sx={{
            mb: 4,
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            gap: 2
          }} >
            <Button sx={btnStyle} onClick={() => handleDate('to Date')}>To Day</Button>
            <Button sx={btnStyle} onClick={() => handleDate('this Week')}>This Week</Button>
            <Button sx={btnStyle} onClick={() => handleDate('this Month')}>This Month</Button>
            <Datepiker dates={dates} setDates={setDates} />
          </Box>



          {/* Invoice and Applications sections */}
          <InvoiceTable />
          {/* <CreateUserForm /> */}
          <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* Page title */}
            <Typography
              variant="h6"
              component="h6"
              align='start'
              sx={{
                mb: 1,
                color: 'text.secondary',
                fontWeight: '500'
              }}
            >
              Create a new user
            </Typography>

            {/* Breadcrumb navigation */}
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              sx={{ mb: 3 }}
            >
              <Link href="#" underline="hover" color="inherit"
                sx={{
                  fontSize: 14
                }}>
                Dashboard
              </Link>
              <Link href="#" underline="hover" color="inherit"
                sx={{
                  fontSize: 14
                }}>
                User
              </Link>
              <Typography color="text.primary"
                sx={{
                  fontSize: 14
                }}>New user</Typography>
            </Breadcrumbs>

            <FormBox
              FormTile={'User'}
              Form={<CreateUserForm />}
            />

          </Container>

          <ProfileSidebar />
        </Box>

      </Box>
    </Box>
  );
};

// Missing StarIcon import
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
  </svg>
);

export { Dashboard };