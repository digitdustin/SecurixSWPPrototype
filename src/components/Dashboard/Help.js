import * as React from 'react';
import { styled, makeStyles } from '@mui/material/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Collapse,
  Button
  Divider
} from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Phone20,
    Email20,
    Time20
} from '@carbon/icons-react';
import { TaskContext } from '../../contexts/task-context';
import { HelpContext } from '../../contexts/help-context';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Help() {
  const [expanded, setExpanded] = React.useState(false);
  const { changeTask } = React.useContext(TaskContext);
  const { setHelpOpen } = React.useContext(HelpContext);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCall = () => {
    changeTask(2 * 1);  //Try to complete task 2
  }

  const openHelp = () => {
    setHelpOpen(true)
  }

  return (
    <Card sx={{}}>
      <CardHeader
        title='Need Help?'
        action=
          <IconButton aria-label="help">
            <HelpIcon />
          </IconButton>
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Contact the help desk
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <IconButton aria-label="phone">
              <Phone20 />
            </IconButton>
            <Button onClick={handleCall}>
              Call the Help Desk
            </Button>
          </Typography>
          <Typography paragraph>
            <IconButton aria-label="email">
              <Email20 />
            </IconButton>
            <Button onClick={openHelp}>
              Submit Help Request Form
            </Button>
          </Typography>
          <Typography>
            <pre class="tab4">
              <IconButton aria-label="hours">
                <Time20 />
              </IconButton>
              monday - friday   |   8am - 5pm</pre>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Help;
