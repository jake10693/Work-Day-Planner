import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      <h1 className="display-3">Work Day Scheduler</h1>
      <p className="lead">A simple calendar app for scheduling your work day</p>
      <p id="currentDay" className="lead"></p>
      </header>
      <div className="container">

      <form action="">
        <div className="row">
       <p id="9" className="time-align">  9AM</p><textarea className="time-block" id="9a" type="text" /><button className="saveBtn">Save</button>
          </div>
          {}
        <div className="row">
          <p id="10"className="time-align">10AM</p><textarea className="time-block" id="10a" type="text" /><button className="saveBtn">Save</button>
          </div>
        <div className="row">
          <p id="11"className="time-align">11AM</p><textarea className="time-block" id="11a" type="text" /><button className="saveBtn">Save</button>
          </div>
        <div className="row">
          <p id="12"className="time-align">12PM</p><textarea className="time-block" id="12p" type="text" /><button className="saveBtn">Save</button>
          </div>
        <div className="row">
          <p id="13"className="time-align">  1PM</p><textarea className="time-block" id="1p" type="text" /><button className="saveBtn">Save</button>
          </div>
        <div className="row">
          <p id="14"className="time-align">  2PM</p><textarea className="time-block" id="2p" type="text" /><button className="saveBtn">Save</button>
          </div>
        <div className="row">
          <p id="15"className="time-align">  3PM</p><textarea className="time-block" id="3p" type="text" /><button className="saveBtn">Save</button>
          </div>
        <div className="row">
          <p id="16"className="time-align">  4PM</p><textarea className="time-block" id="4p" type="text" /><button className="saveBtn">Save</button>
          </div>
 
      </form>
    </div>

    </div>
  );
}

export default App;
