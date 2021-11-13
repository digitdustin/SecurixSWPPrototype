import * as React from 'react';
import Card from "@material-ui/core/Card";
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

/* This example requires Tailwind CSS v2.0+ */
const Dashboard = () => {
  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="dashboard text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
      {/* Replace with your content */}

      <div class="bx--grid">
        <div class="bx--row">
          <div class="bx--col-max">
            <div class="whatsnew">
              <Tile>
                <h1 className="text-3xl font-bold text-gray-900" style={{paddingBottom: '4%', fontSize: 20, fontWeight: 'bold'}}>What's New?</h1>
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
                    <h1 className="text-3xl font-bold text-gray-900" style={{paddingBottom: '8%', fontSize: 20, fontWeight: 'bold'}}>Quick Links</h1>
                    <Quicklinks />
                  </Card>
                </div>
                <Help />
              </div>
            </div>
          </div>
          <div class="bx--row">

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
