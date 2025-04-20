import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    Grid,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    // Switch,
    // FormControlLabel,
    // InputAdornment,
    // IconButton,
    Breadcrumbs,
    Link,
    Container,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const CreateUserForm = () => {
    // const [emailVerified, setEmailVerified] = useState(true);

    // // Handle toggle switch change
    // const handleToggleChange = (event) => {
    //     setEmailVerified(event.target.checked);
    // };



    return (
        
        <from className="d-flex flex-column gap-2">

        <Box className="d-flex gap-4">
            {/* Full name */}
            <Grid className='w-100'>
                <TextField
                    label="Full name"
                    variant="outlined"
                    fullWidth
                    placeholder="Full name"
                />
                <FormFaildError ID={'FullName'} />
            </Grid>

            {/* Email address */}
            <Grid className='w-100'>
                <TextField
                    label="Email address"
                    variant="outlined"
                    fullWidth
                    placeholder="Email address"
                />
                <FormFaildError ID={'Email'} />
            </Grid>
        </Box>

        <Box className="d-flex gap-4">
            {/* Full name */}
            <Grid className='w-100'>
                <FormControl fullWidth>
                    <InputLabel id="country-label">Country</InputLabel>
                    <Select
                        labelId="country-label"
                        value="Select a country"
                        label="Country"
                        displayEmpty
                        IconComponent={KeyboardArrowDownIcon}
                    >
                        <MenuItem value="">Select a country</MenuItem>
                        <MenuItem value="Germany">Germany</MenuItem>
                        <MenuItem value="United States">United States</MenuItem>
                        <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                        <MenuItem value="France">France</MenuItem>
                    </Select>
                </FormControl>
                <FormFaildError ID={'FullName'} />
            </Grid>

            {/* Email address */}
            <Grid className='w-100'>
                <TextField
                    label="State/region"
                    variant="outlined"
                    fullWidth
                    placeholder="State/region"
                />
                <FormFaildError ID={'Email'} />
            </Grid>
        </Box>

        <Box className="d-flex gap-4">
            {/* Full name */}
            <Grid className='w-100'>
                <TextField
                    label="City"
                    variant="outlined"
                    fullWidth
                    placeholder="City"
                />
                <FormFaildError ID={'FullName'} />
            </Grid>

            {/* Email address */}
            <Grid className='w-100'>
                <TextField
                    label="Address"
                    variant="outlined"
                    fullWidth
                    placeholder="Address"
                />
                <FormFaildError ID={'Email'} />
            </Grid>
        </Box>

        <Box className="d-flex gap-4">
            {/* Full name */}
            <Grid className='w-100'>
                <TextField
                    label="Zip/code"
                    variant="outlined"
                    fullWidth
                    placeholder="Zip/code"
                />
                <FormFaildError ID={'FullName'} />
            </Grid>

            {/* Email address */}
            <Grid className='w-100'>
                <TextField
                    label="Company"
                    variant="outlined"
                    fullWidth
                    placeholder="Company"
                />
                <FormFaildError ID={'Email'} />
            </Grid>
        </Box>

        {/* Submit button */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Button
                variant="contained"
                sx={{
                    bgcolor: '#8f8f8f',
                    '&:hover': { bgcolor: '#1a232c' },
                    borderRadius: 2,
                    textTransform: 'none',
                    py: 1.5,
                    px: 3
                }}
            >
                Cancel
            </Button>

            <Button
                variant="contained"
                sx={{
                    bgcolor: '#212B36',
                    '&:hover': { bgcolor: '#1a232c' },
                    borderRadius: 2,
                    textTransform: 'none',
                    py: 1.5,
                    px: 3
                }}
            >
                Create user
            </Button>
        </Box>

    </from>
    );
};

export { CreateUserForm };

const FormFaildError = ({ ID }) => {
    return (
        <Typography
            id={`${ID}Error`}
            sx={{ fontSize: 13, px: 1, color: 'red', height: 20 }}
            align='start'></Typography>
    )
}

//   {/* Photo upload section */}
//                 {/* <Grid item xs={12} md={4}>
//                     <Paper
//                         elevation={0}
//                         sx={{
//                             p: 4,
//                             border: '1px solid #eee',
//                             borderRadius: 2,
//                             height: '100%'
//                         }}
//                     >
//                         <Box
//                             sx={{
//                                 display: 'flex',
//                                 flexDirection: 'column',
//                                 alignItems: 'center',
//                                 justifyContent: 'center',
//                                 height: '100%'
//                             }}
//                         >
//                             <Box
//                                 sx={{
//                                     width: 140,
//                                     height: 140,
//                                     borderRadius: '50%',
//                                     bgcolor: '#f5f5f5',
//                                     display: 'flex',
//                                     flexDirection: 'column',
//                                     alignItems: 'center',
//                                     justifyContent: 'center',
//                                     mb: 2,
//                                     cursor: 'pointer'
//                                 }}
//                             >
//                                 <AddAPhotoIcon sx={{ color: '#8e9aab', fontSize: 40, mb: 1 }} />
//                                 <Typography
//                                     variant="body2"
//                                     color="text.secondary"
//                                 >
//                                     Upload photo
//                                 </Typography>
//                             </Box>

//                             <Typography
//                                 variant="caption"
//                                 align="center"
//                                 color="text.secondary"
//                                 sx={{ mb: 1 }}
//                             >
//                                 Allowed *.jpeg, *.jpg, *.png, *.gif
//                             </Typography>
//                             <Typography
//                                 variant="caption"
//                                 align="center"
//                                 color="text.secondary"
//                             >
//                                 max size of 3 Mb
//                             </Typography>

//                             <Box sx={{ mt: 5, width: '100%' }}>
//                                 <Typography
//                                     variant="subtitle1"
//                                     fontWeight="medium"
//                                     sx={{ mb: 1 }}
//                                 >
//                                     Email verified
//                                 </Typography>
//                                 <Box sx={{
//                                     display: 'flex',
//                                     justifyContent: 'space-between',
//                                     alignItems: 'center'
//                                 }}>
//                                     <Typography
//                                         variant="body2"
//                                         color="text.secondary"
//                                         sx={{ flex: 1 }}
//                                     >
//                                         Disabling this will automatically send the user a verification email
//                                     </Typography>
//                                     <Switch
//                                         checked={emailVerified}
//                                         onChange={handleToggleChange}
//                                         color="success"
//                                     />
//                                 </Box>
//                             </Box>
//                         </Box>
//                     </Paper>
//                 </Grid> */}