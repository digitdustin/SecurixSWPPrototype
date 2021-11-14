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
    <div className="bx--grid" style={{height: 'calc(100vh - 30px)', paddingTop: 50, paddingBottom: 80, overflow: 'scroll'}}>
        <div class="bx--row">
        <div className="bx--offset-lg-2 bx--col-lg-10">
                <h1 style={{marginBottom: 10}}>
                  Dashboard
                </h1>
                <p style={{marginBottom: 20}}>Stay up to date with announcements about Atlas.</p>
              <Tile style={{
                  backgroundColor: white,
                  marginBottom: 20
                }}>
                <h1 className="text-3xl font-bold text-gray-900" style={{marginBottom: 10, fontSize: 20}}>What's New?</h1>
                <WhatsNew />
              </Tile>
              <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'flex-start'}}>
                <DigitalClock />
              <div>
                <Card style={{padding: 20, width: 500, marginBottom: 20}}>
                  <h1 className="text-3xl font-bold text-gray-900" style={{paddingBottom: '8%', fontSize: 20}}>Quick Links</h1>
                  <Quicklinks />
                </Card>
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
    </div>
  )
}

export default Dashboard;

//Dashboard
//contact help desk
//whats new
//quick links
