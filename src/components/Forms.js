import MainScreen from "./MainScreen.js";
import '../assets/css/Forms.css';
import { Button, ContentSwitcher, Switch } from "carbon-components-react";
import FormHolder from "./FormHolder.js";

const Forms = () => {
  return (
    <div className="bx--grid" style={{height: 'calc(100vh - 30px)', paddingTop: 50, paddingBottom: 80, overflow: 'scroll'}}>
            <div className="bx--row ">
              <div className="bx--offset-lg-2 bx--col-lg-10">
                <h1 style={{marginBottom: 10}}>
                  Forms
                </h1>
                <p style={{marginBottom: 20}}>View, fill out, and download all Atlas forms.</p>
                <div style={{backgroundColor: 'white', padding : 20}}>
                  <ContentSwitcher light style={{marginBottom: 20}}>
                    <Switch name="allforms" text="All Forms"></Switch>
                    <Switch name="action" text="Awaiting Action (1)"></Switch>
                  </ContentSwitcher>
                  <FormHolder />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Forms;
