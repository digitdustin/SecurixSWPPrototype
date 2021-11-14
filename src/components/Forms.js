import MainScreen from "./MainScreen.js";
import { useContext } from "react";
import '../assets/css/Forms.css';
import { Button, ContentSwitcher, Switch } from "carbon-components-react";
import FormHolder from "./FormHolder.js";
import {RoleContext, roles} from '../contexts/role-context'

const Forms = () => {
  const {role, toggleRole} = useContext(RoleContext);

  return (
    <div className="bx--grid" style={{height: 'calc(100vh - 30px)', paddingTop: 50, paddingBottom: 80, overflow: 'scroll'}}>
            <div className="bx--row ">
              <div className="bx--offset-lg-2 bx--col-lg-10">
                <h1 style={{marginBottom: 10}}>
                  Forms
                </h1>
                <p style={{marginBottom: 20}}>View, fill out, and download all Atlas forms.</p>
                <div style={{backgroundColor: 'white', padding : 20, marginBottom: 20}}>
                  {role === roles.admin ? 
                  <ContentSwitcher light style={{marginBottom: 20}}>
                    <Switch name="allforms" text="All Forms (24)"></Switch>
                    <Switch name="action" text="Awaiting Action (1)"></Switch>
                  </ContentSwitcher>
                  : <h4 style={{marginBottom: 20}}>All Forms (24)</h4>}
                  <FormHolder />
                </div>
                {role === roles.admin ? <></> : <p>Don't see what you need? <a>Request a form.</a></p>}
            </div>
        </div>
    </div>
  );
}

export default Forms;
