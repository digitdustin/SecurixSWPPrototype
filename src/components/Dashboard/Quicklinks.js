import * as React from 'react';
import Clock from 'react-live-clock';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  IconButton,
  Chip,
  Stack
} from '@mui/material';
import { Tile } from "carbon-components-react";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {
    RequestQuote20,
    Script20,
    DocumentUnknown20,
    UserAvatar20,
    Notification20
} from '@carbon/icons-react';

function Quicklinks() {
  return (
    <Tile>
        <Stack spacing={1} alignItems="left">
          <Stack direction="row" spacing={1}>
            <Chip icon={<RequestQuote20/>} label="Forms" color="primary" component="a" href='/forms' clickable/>
            <Chip icon={<Script20 />} label="Patches" color="primary" variant="outlined" component="a" href='/patches' clickable/>
            <Chip icon={<DocumentUnknown20 />} label="How-Tos" component="a" href='/how-tos' clickable/>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Chip icon={<UserAvatar20 />} label="Profile" component="a" href='/' clickable/>
            <Chip icon={<Notification20 />} label="Notifications" variant="outlined" component="a" href='/forms' clickable/>
          </Stack>
        </Stack>
      </Tile>
  );
}

export default Quicklinks;
