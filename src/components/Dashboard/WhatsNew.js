import React from "react";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@mui/material';
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import {
    Bullhorn32,
    Script32,
    RequestQuote32,
    Idea32,
    Basketball32,
    DocumentTasks32,
    DocumentUnknown32
} from '@carbon/icons-react';
import { green, blue, warmGray, yellow, red, purple } from '@carbon/colors';

function WhatsNew() {
  const items = [
  {
    title: 'Announcement',
    date: 'November 16, 2021',
    content: 'Notice the new look? SWIS is now Atlas!',
    link: '/',
    icon: <Bullhorn32 />,
    backgroundColor: red[50]
  },
  {
    title: 'MS Word Patch',
    date: 'November 1, 2021',
    content: 'New patch for Microsoft Word available!',
    link: '/patches',
    icon: <Script32 />,
    backgroundColor: blue[50]
  },
  {
    title: '1080 Form',
    date: 'October 29, 2021',
    content: 'The 1080 Form has now been added to SWIS to the Forms.',
    link: "https://www.rd.com/article/common-hand-gestures-rude-in-other-countries/",
    icon: <RequestQuote32 />,
    backgroundColor: green[30]
  },
  {
    title: 'Did You Know?',
    date: 'October 19, 2021',
    content: 'Some common hand gestures are offensive in other countries.',
    icon: <Idea32 />,
    backgroundColor: yellow
  },
  {
    title: 'Announcement',
    date: 'October 15, 2021',
    content: 'Keep a look out. SWIS will be rebranding very soon!',
    link: '/',
    icon: <Bullhorn32 />,
    backgroundColor: red[50]
  },
  {
    title: 'Rebranding Contest',
    date: 'October 10, 2021',
    content: 'Submit your new portal name idea and a logo to match.',
    link: '/',
    icon:<Basketball32 />,
    backgroundColor: purple[50]
  },
  {
    title: 'SWIS Survey',
    date: 'September 18, 2021',
    content: 'Survey out. Let us know your thoughts on the SWIS portal.',
    link: '/',
    icon: <DocumentTasks32 />,
    backgroundColor: blue[40]
  },
  {
    title: 'Zoom How-To',
    date: 'September 3, 2021',
    content: 'New how-to on sharing screen Zoom!',
    link: '/how-tos',
    icon: <DocumentUnknown32 />,
    backgroundColor: purple[20]
  },
  {
    title: 'Did You Know?',
    date: 'August 23, 2021',
    content: '40 percent of human jobs could be replaced by AI in the future.',
    link: "https://www.rd.com/list/cool-future-jobs/",
    icon: <Idea32 />,
    backgroundColor: yellow
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
              <CardHeader
              action={
                <IconButton aria-label="icon" sx={{
                    color: warmGray,
                    backgroundColor: `${card.backgroundColor}`
                  }}
                  >
                  {card.icon}
                </IconButton>
              }
              subheader={card.date}
              />
              <CardContent>
                <Typography variant="h5" component="div">
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
};

export default WhatsNew;
