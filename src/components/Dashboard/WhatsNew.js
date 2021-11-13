import React from "react";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

function WhatsNew() {
  const items = [
  {
    title: 'Announcement',
    date: 'November 16, 2021',
    content: 'Notice the new look? SWIS is now Atlas!',
    link: '/'
  },
  {
    title: 'MS Word Patch',
    date: 'November 1, 2021',
    content: 'New patch for Microsoft Word available!',
    link: '/patches'
  },
  {
    title: '1080 Form',
    date: 'October 29, 2021',
    content: 'The 1080 Form has now been added to SWIS to the Forms.',
    link: "https://www.rd.com/article/common-hand-gestures-rude-in-other-countries/"
  },
  {
    title: 'Did You Know?',
    date: 'October 19, 2021',
    content: 'Some common hand gestures are offensive in other countries.'
  },
  {
    title: 'Announcement',
    date: 'October 15, 2021',
    content: 'Keep a look out. SWIS will be rebranding very soon!',
    link: '/'
  },
  {
    title: 'Rebranding Contest',
    date: 'October 10, 2021',
    content: 'Submit your new portal name idea and a logo to match.',
    link: '/'
  },
  {
    title: 'SWIS Survey',
    date: 'September 18, 2021',
    content: 'Survey out. Let us know your thoughts on the SWIS portal.',
    link: '/'
  },
  {
    title: 'Zoom How-To',
    date: 'September 3, 2021',
    content: 'New how-to on sharing screen Zoom!',
    link: '/how-tos'
  },
  {
    title: 'Did You Know?',
    date: 'August 23, 2021',
    content: '40 percent of human jobs could be replaced by AI in the future.',
    link: "https://www.rd.com/list/cool-future-jobs/"
  },
  ];

  return (
        <ScrollMenu>
          {items.map((card) => (
            <Card sx={{ minWidth: 275}} variant="outlined"
              style={{
                display: 'block',
                width: '10%',
                transitionDuration: '0.3s',
                height: '150%',
                marginRight: 15
              }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {card.date}
                </Typography>
                <Typography variant="h5" component="div" style={{paddingTop: 5}}>
                  {card.title}
                </Typography>
                <Typography variant="body2" style={{paddingTop: 20}}>
                  {card.content}
                  <br />
                </Typography>
              </CardContent>
              <CardActions style={{ display: "flex", marginBottom: 10}}>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <a href={card.link} style={{textDecoration: "none", marginLeft: "auto"}}>
                  <Button size="medium">View</Button>
                </a>
              </CardActions>
            </Card>
          )
          )}

        </ScrollMenu>
  );
}

export default WhatsNew;
