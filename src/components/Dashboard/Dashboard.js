import * as React from 'react';
import { Card, Fab } from "@mui/material";
import {
  Tile,
  ExpandableTile,
  TileAboveTheFoldContent,
  TileBelowTheFoldContent,
  Accordion,
  AccordionItem
} from "carbon-components-react";
import ReactDOM from 'react-dom';
import Clock from 'react-live-clock';
import WhatsNew from './WhatsNew';
import Help from './Help';
import DigitalClock from './DigitalClock';
import Quicklinks from './Quicklinks';
import '../../assets/css/Dashboard.css';
import { white } from '@carbon/colors';
import {
    ChevronUp32
} from '@carbon/icons-react';

/* This example requires Tailwind CSS v2.0+ */
const Dashboard = () => {
  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="dashboard text-3xl font-bold text-gray-900" id="dashboard">Dashboard</h1>
        </div>
      </header>
      <main>
      {/* Replace with your content */}

      <div class="bx--grid">
        <div class="bx--row">
          <div class="bx--col-max">
            <div class="whatsnew">
              <Tile style={{
                  backgroundColor: white
                }}>
                <h1 className="text-3xl font-bold text-gray-900" style={{paddingBottom: '3%', fontSize: 20}}>What's New?</h1>
                <WhatsNew />
              </Tile>
            </div>
          </div>
          </div>
          <div class="bx--row">
            <div class="bx--col-sm-2">
              <div class="time" style={{paddingTop: "5%", paddingBottom: "5%"}}>
                <DigitalClock />
              </div>
            </div>
            <div class="bx--col-sm-2">
              <div class="helpdesk" style={{paddingTop: "3.5%", paddingBottom: "3%"}}>
                <div class="quicklinks" style={{paddingBottom: '10%'}}>
                  <Card style={{padding: '5%'}}>
                    <h1 className="text-3xl font-bold text-gray-900" style={{paddingBottom: '8%', fontSize: 20}}>Quick Links</h1>
                    <Quicklinks />
                  </Card>
                </div>
                <Help />
              </div>
            </div>
          </div>
          <div>
          <Fab color="primary" aria-label="top" href='#dashboard' style={{
            margin: 0,
            top: 'auto',
            right: 20,
            bottom: 20,
            left: 'auto',
            position: 'fixed',
            }}>
            <ChevronUp32 />
          </Fab>
          </div>
        </div>
        {/* /End replace */}
      </main>
    </div>
  )
}

export default Dashboard;

//Dashboard
//contact help desk
//whats new
//quick links
