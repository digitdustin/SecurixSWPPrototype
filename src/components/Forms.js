import MainScreen from "./MainScreen.js";
import '../assets/css/Forms.css';
import { Button } from "carbon-components-react";
import FormHolder from "./FormHolder.js";

const Forms = () => {
  return (
    <div class="bx--grid">
      <h1>FORMS</h1>
      <div style={{backgroundColor: 'white', width: '80%', padding: 30}}>
      <FormHolder />
        </div>
        <Button>
          New Form Request
        </Button>
    </div>
  );
}

export default Forms;
