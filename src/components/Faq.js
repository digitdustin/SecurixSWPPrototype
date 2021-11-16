import * as React from 'react';
import {
  Accordion,
  AccordionItem,
  Tile,
  Button
} from "carbon-components-react";
import '../assets/css/Faq.css';
import { gray, warmGray, white } from '@carbon/colors';
import {
    Phone20,
    Email20,
    Time20
} from '@carbon/icons-react';
import {
  IconButton,
  Divider,
  Card
} from '@mui/material';
import { TaskContext } from '../contexts/task-context';

/* This example requires Tailwind CSS v2.0+ */
const Faq = () => {
  const { changeTask } = React.useContext(TaskContext);

  const handleCall = () => {
    changeTask(2 * 1);  //Try to complete task 2
  }

  const items = [
    {
      question: "Why was the SWIS portal changed to Atlas?",
      answer: "The most important thing to us is making sure our users have a smooth experience when using the portal. SWIS did not provide this, so we decided to build a new portal from scratch. We hope you like it!"
    },
    {
      question: "Where can I find a form?",
      answer: "Head to the 'Forms' tab in the navigatin bar on the left side of the screen. Use the search button to search for a particular form."
    },
    {
      question: "What do I do if I don't know how to use a certain software?",
      answer: "That's no problem! Head over to the 'How-Tos' page and search for whatever you need."
    },
    {
      question: "How do I submit a form request?",
      answer: "Head to the 'Forms' apge in the navigatin bar on the left side of the screen. Click the 'New Form Request' button. Then fill out and submit the form."
    },
    {
      question: "How to switch to Admin View/User View?",
      answer: "At the top of the page, there is a button for switching views. Click it to access the opposite view."
    },
    {
      question: "Can I access the portal on Firefox?",
      answer: "Yes, Atlas is compatible with all popular web browsers."
    },
    {
      question: "I need the latest patch of Microsoft Word.  Where can I find this?",
      answer: "Go to the 'Patches' page.  Use the search bar or filter by software to find the patch you're looking for."
    },
    {
      question: "How do I change my profile name?",
      answer: "Click the user icon at the top and edit your profile there."
    },
    {
      question: "As an admin, how do I see submitted form requests?",
      answer: "On the forms page, there is a tab called 'Awaiting Action'. Your submitted forms will stay there until they have been resolved."
    },
    {
      question: "Where do I access my quick links?",
      answer: "Your dashboard is customized to fit you. Once you create a quick link, they will appear in the 'Quick Links' section on the Home tab."
    },
  ];

  return (
    <div class="faq">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900" id="dashboard" style={{marginBottom: 10}}>FAQ</h1>
          <p style={{marginBottom: 20}}>Get the answers to frequently asked questions.</p>
        </div>
      </header>
      <main style={{paddingBottom: "6%", paddingRight: '5%'}}>
      <Tile style={{backgroundColor: white}}>
        <div class="bx--grid">
          <div class="bx--row" style={{paddingTop: '5%', paddingBottom: '5%'}}>
            <div class="bx--col-sm-1">
              <Card sx={{ minWidth: 225}}
                style={{
                  display: 'block',
                  width: '15%',
                  transitionDuration: '0.3s',
                  marginRight: 15,
                  backgroundColor: gray[10],
                  padding: '10%',
                }}>
                <h1 className="contact-title text-2xl font-bold text-gray-300" style={{
                  paddingBottom: '3%',
                  fontSize: 15,
                  color: gray[80],
                  paddingBottom: '10%',
                  paddingLeft: '5%'
                  }}>
                  NEED MORE HELP?
                </h1>
                <Divider/>
                <p style={{paddingTop: '10%', paddingBottom: '8%', fontSize: 13}}>
                  <IconButton aria-label="phone">
                    <Phone20 />
                  </IconButton>
                  <Button onClick={handleCall}>
                    Call the Help Desk
                  </Button>
                </p>
                <div className='phone-hours' style={{paddingTop: '5%', paddingBottom: '10%'}}>
                  <Tile style={{backgroundColor: white}}>
                    <p style={{fontWeight: 'bold', textAlign: 'center'}}>Monday - Friday</p>
                    <p style={{color: gray[70], paddingTop: '5%', paddingBottom: '8%'}}>
                      <IconButton aria-label="hours">
                        <Time20 />
                      </IconButton>
                      8am - 5pm EST
                    </p>
                    <p style={{fontWeight: 'bold', textAlign: 'center'}}>Saturday - Sunday</p>
                    <p style={{color: gray[70], paddingTop: '5%'}}>
                      <IconButton aria-label="hours">
                        <Time20 />
                      </IconButton>
                      Closed
                    </p>
                  </Tile>
                </div>
                <p style={{paddingBottom: '10%', fontSize: 13}}>
                  <IconButton aria-label="email">
                    <Email20 />
                  </IconButton>
                  helpdesk@atlas.com
                </p>
              </Card>
            </div>
            <div class="bx--col-md">
              <Accordion>
              {items.map((faq) => (
                <AccordionItem title={faq.question}><p>{faq.answer}</p></AccordionItem>
              ))}
              </Accordion>
            </div>
          </div>
        </div>
        </Tile>
      </main>
    </div>
  )
}

export default Faq;

//Dashboard
//contact help desk
//whats new
//quick links
