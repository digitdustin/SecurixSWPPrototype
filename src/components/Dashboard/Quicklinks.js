import * as React from 'react';
import Clock from 'react-live-clock';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import IconButton from '@mui/material/IconButton';

function Quicklinks() {
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
          <IconButton aria-label="settings">
            <CalendarTodayIcon />
          </IconButton>
        </Typography>
        <Typography variant="h4" component="div" style={{paddingTop: 5}}>
          <Clock format={'dddd, MMMM Mo, YYYY'} timezone={'US/Eastern'} />
          <br />
        </Typography>
        <Typography variant="h5" component="div" style={{paddingTop: 5}}>
          <Clock format={'h:mm:ss A'} ticking={true} timezone={'US/Eastern'} />
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Quicklinks;
