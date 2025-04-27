import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function Datepiker({ setDates, dates }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        
        {/* From Date Picker */}
        <DatePicker 
          label="From Date"
          value={dates?.FormDate}
          onChange={(newValue) => {
            setDates(prev => ({
              ...prev,
              FormDate: newValue
            }));
          }}
          format='DD/MM/YYYY'
        />

        {/* To Date Picker */}
        <DatePicker 
          label="To Date"
          value={dates?.ToDate}
          onChange={(newValue) => {
            setDates(prev => ({
              ...prev,
              ToDate: newValue
            }));
          }}
          format='DD/MM/YYYY'
        />
        
      </DemoContainer>
    </LocalizationProvider>
  );
}

export { Datepiker };
