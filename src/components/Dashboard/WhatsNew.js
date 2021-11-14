import React from "react";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@mui/material';
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import {
    Bullhorn24,
    Script24,
    RequestQuote24,
    Idea24,
    Basketball24,
    DocumentTasks24,
    DocumentUnknown24
} from '@carbon/icons-react';
import { green, blue, warmGray, yellow, red, purple, gray } from '@carbon/colors';

function WhatsNew() {
  const items = [
  {
    id: 1,
    title: 'Announcement',
    date: 'November 16, 2021',
    content: 'Notice the new look? SWIS is now Atlas!',
    link: '/',
    icon: <Bullhorn24 />,
    backgroundColor: red[50]
  },
  {
    id: 2,
    title: 'MS Word Patch',
    date: 'November 1, 2021',
    content: 'New patch for Microsoft Word available!',
    link: '/patches',
    icon: <Script24 />,
    backgroundColor: blue[50]
  },
  {
    id: 3,
    title: '1080 Form',
    date: 'October 29, 2021',
    content: 'The 1080 Form has now been added to SWIS to the Forms.',
    link: "https://www.rd.com/article/common-hand-gestures-rude-in-other-countries/",
    icon: <RequestQuote24 />,
    backgroundColor: green[30]
  },
  {
    id: 4,
    title: 'Did You Know?',
    date: 'October 19, 2021',
    content: 'Some common hand gestures are offensive in other countries.',
    icon: <Idea24 />,
    backgroundColor: yellow
  },
  {
    id: 5,
    title: 'Announcement',
    date: 'October 15, 2021',
    content: 'Keep a look out. SWIS will be rebranding very soon!',
    link: '/',
    icon: <Bullhorn24 />,
    backgroundColor: red[50]
  },
  {
    id: 6,
    title: 'Rebranding Contest',
    date: 'October 10, 2021',
    content: 'Submit your new portal name idea and a logo to match.',
    link: '/',
    icon:<Basketball24 />,
    backgroundColor: purple[50]
  },
  {
    id: 7,
    title: 'SWIS Survey',
    date: 'September 18, 2021',
    content: 'Survey out. Let us know your thoughts on the SWIS portal.',
    link: '/',
    icon: <DocumentTasks24 />,
    backgroundColor: blue[40]
  },
  {
    id: 8,
    title: 'Zoom How-To',
    date: 'September 3, 2021',
    content: 'New how-to on sharing screen Zoom in the "How-Tos" tab.',
    link: '/how-tos',
    icon: <DocumentUnknown24 />,
    backgroundColor: purple[20]
  },
  {
    id: 9,
    title: 'Did You Know?',
    date: 'August 23, 2021',
    content: '40 percent of human jobs could be replaced by AI in the future.',
    link: "https://www.rd.com/list/cool-future-jobs/",
    icon: <Idea24 />,
    backgroundColor: yellow
  },
  ];

  return (
      <div>
        <ScrollMenu>
          {items.map((card) => (
            <Card sx={{ minWidth: 275}} variant="outlined" id={card.id}
              style={{
                display: 'block',
                width: '10%',
                transitionDuration: '0.3s',
                height: '100%',
                marginRight: 15,
                backgroundColor: gray[10]
              }}>
              <CardHeader
              action={
                <IconButton aria-label="icon" size="small" sx={{
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
      </div>
  );
};

export default WhatsNew;
