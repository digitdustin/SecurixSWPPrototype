import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import HelpIcon from '@mui/icons-material/Help';
import { red, yellow } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Need Help?"
        action={
          <IconButton aria-label="settings">
            <HelpIcon />
          </IconButton>
        }
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
            phone: (305)298-7311
          </Typography>
          <Typography paragraph>
            email: helpdesk@atlas.com
          </Typography>
          <Typography>
            hours:
          </Typography>
          <Typography>
            <pre class="tab4">monday - friday                  8am - 5pm</pre>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Help;
