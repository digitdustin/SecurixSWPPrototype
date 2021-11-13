import * as React from 'react';
import Clock from 'react-live-clock';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import IconButton from '@mui/material/IconButton';
import { TextField } from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { Tile } from "carbon-components-react";

function DigitalClock() {
  const [value, setValue] = React.useState(new Date());

  return (
    <Card sx={{ minWidth: 650}} variant="outlined"
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
        <Card> <br />
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
