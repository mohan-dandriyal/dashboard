import React from 'react';
import { 
  Box, 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Chip, 
  IconButton
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const InvoiceTable = () => {
  // Sample invoice data
  const invoices = [
    { id: 'INV-1990', category: 'Android', price: '$83.74', status: 'Paid' },
    { id: 'INV-1991', category: 'Mac', price: '$97.14', status: 'Out of date' },
    { id: 'INV-1992', category: 'Windows', price: '$68.71', status: 'Progress' },
    { id: 'INV-1993', category: 'Android', price: '$85.21', status: 'Paid' },
    { id: 'INV-1994', category: 'Mac', price: '$52.17', status: 'Paid' },
  ];

  // Status chip styling based on status value
  const getStatusChipProps = (status) => {
    switch(status) {
      case 'Paid':
        return { 
          label: status, 
          sx: { backgroundColor: '#e6f7ed', color: '#2e7d32', fontWeight: 'medium' } 
        };
      case 'Out of date':
        return { 
          label: status, 
          sx: { backgroundColor: '#ffebee', color: '#d32f2f', fontWeight: 'medium' } 
        };
      case 'Progress':
        return { 
          label: status, 
          sx: { backgroundColor: '#fff8e1', color: '#f57c00', fontWeight: 'medium' } 
        };
      default:
        return { label: status };
    }
  };

  return (
    <Box sx={{ 
      width: '100%',
      margin: '0 auto', 
      backgroundColor: 'white', 
      borderRadius: 2,
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      overflow: 'hidden'
    }}>
      <Box sx={{ p: 3, pb: 2 }}>
        <Typography variant="h6" fontWeight='500' align='start'
        sx ={{
            fontSize: 16
        }}
        >New invoice</Typography>
      </Box>
      
      <TableContainer component={Paper} elevation={0}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f9fafb' }}>
              <TableCell sx={{ color: '#6b7280', fontWeight: 'medium' }}>Invoice ID</TableCell>
              <TableCell sx={{ color: '#6b7280', fontWeight: 'medium' }}>Category</TableCell>
              <TableCell sx={{ color: '#6b7280', fontWeight: 'medium' }}>Price</TableCell>
              <TableCell sx={{ color: '#6b7280', fontWeight: 'medium' }}>Status</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">{invoice.id}</TableCell>
                <TableCell>{invoice.category}</TableCell>
                <TableCell>{invoice.price}</TableCell>
                <TableCell>
                  <Chip size="small" {...getStatusChipProps(invoice.status)} />
                </TableCell>
                <TableCell align="right">
                  <IconButton size="small">
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <Typography 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            color: '#4b5563', 
            cursor: 'pointer',
            fontSize: '0.875rem',
            fontWeight: 'medium'
          }}
        >
          View all <ChevronRightIcon fontSize="small" />
        </Typography>
      </Box>
    </Box>
  );
};

export {InvoiceTable};