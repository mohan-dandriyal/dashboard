import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

export default function FormBox({FormTile, Form}) {
  return (
   
    <Box sx = {{
        width : '100%'
    }}>
        <Paper
            elevation={0}
            sx={{
                // p: 4,
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                border: '1px solid #eee',
                borderRadius: 2
            }}
        >
            <Box>
                <Typography variant='h5' align='start' sx={{
                    px: 4,
                    py: 2,
                    borderBottom: '1px solid #eeeeee',
                    fontSize: 16,
                    fontWeight: 500,
                }}>
                    {FormTile}
                </Typography>
            </Box>

            <Box sx={{
                px: 4,
                py: 4
            }}>
                {Form}
            </Box>
        </Paper>


    </Box>
  )
}
