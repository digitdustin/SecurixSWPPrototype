import * as React from 'react';
import Clock from 'react-live-clock';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {
  TextField,
  Card,
  CardHeader,
  CardContent,
  Typography,
  IconButton
 } from '@mui/material';
import {
  LocalizationProvider,
  StaticDatePicker
} from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Tile } from "carbon-components-react";

function DigitalClock() {
  const [value, setValue] = React.useState(new Date());

  return (
    <Card sx={{minWidth: 650}}
      style={{
        display: 'block',
        width: '70%',
        transitionDuration: '0.3s',
        height: '100%',
        marginRight: 15,
      }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Today is
        </Typography>
        <br />
        <Card variant="outlined"> <br />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
              displayStaticWrapperAs="desktop"
              openTo="day"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
            <Typography variant="h7" component="div" style={{padding: 10}}>
              <Clock format={'h:mm:ss A'} ticking={true} timezone={'US/Eastern'} />
            </Typography>
          </LocalizationProvider>
        </Card>
      </CardContent>
    </Card>
  );
}

export default DigitalClock;
