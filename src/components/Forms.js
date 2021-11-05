import MainScreen from "./MainScreen.js";
import '../assets/css/Forms.css';

const Forms = () => {
  return (
    <MainScreen title="FORMS">
      <div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" id="form-request-button">
          New Form Request
        </button>
      </div>
    </MainScreen>
  );
}

export default Forms;
