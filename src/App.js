import './App.css';
import React, {useState} from 'react';

function App() {

const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0))
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
const time = new Date();
const currentHour = time.getHours();

    const [todo9, setTodo9] = useState('');
    const [todo10, setTodo10] = useState('');
    const [todo11, setTodo11] = useState('');
    const [todo12, setTodo12] = useState('');
    const [todo1, setTodo1] = useState('');
    const [todo2, setTodo2] = useState('');
    const [todo3, setTodo3] = useState('');
    const [todo4, setTodo4] = useState('');

     const handle9 = () => {
      localStorage.setItem('Todo9', todo9);
   };
     const handle10 = () => {
         localStorage.setItem('Todo10', todo10);
   };
     const handle11 = () => {
      localStorage.setItem('Todo11', todo11);
   };
     const handle12 = () => {
    localStorage.setItem('Todo12', todo12);
   };
     const handle1 = () => {
     localStorage.setItem('Todo1', todo1);
   };
     const handle2 = () => {
            localStorage.setItem('Todo2', todo2);
   };
     const handle3 = () => {
      localStorage.setItem('Todo3', todo3);
   };
     const handle4 = () => {
      localStorage.setItem('Todo4', todo4);
   };
   
function is9(){
  return currentHour > 9 ? "time-block past"
        : currentHour === 9 ? "time-block present"
        : "time-block future";
}
function is10(){
  return currentHour > 10 ? "time-block past"
        : currentHour === 10 ? "time-block present"
        : "time-block future";
}
function is11(){
  return currentHour > 11 ? "time-block past"
        : currentHour === 11 ? "time-block present"
        : "time-block future";
}
function is12(){
  return currentHour > 12 ? "time-block past"
        : currentHour === 12 ? "time-block present"
        : "time-block future";
}
function is13(){
  return currentHour > 13 ? "time-block past"
        : currentHour === 13 ? "time-block present"
        : "time-block future";
}
function is14(){
  return currentHour > 14 ? "time-block past"
        : currentHour === 14 ? "time-block present"
        : "time-block future";
}
function is15(){
  return currentHour > 15 ? "time-block past"
        : currentHour === 15 ? "time-block present"
        : "time-block future";
}
function is16(){
  return currentHour > 16 ? "time-block past"
        : currentHour === 16 ? "time-block present"
        : "time-block future";
}

  return (
    <div className="App">
      <header>
      <h1 className="display-3">Work Day Scheduler</h1>
      <p className="lead">A simple calendar app for scheduling your work day</p>
      <p className="lead">{date.toLocaleDateString('en-US', options)}</p>
      </header>
      <div className="container">

      <form action="">
        <div className="row">
       <p id="9" className="time-align">  9AM</p><textarea  placeholder={localStorage.getItem("Todo9")} value={todo9} onChange={(e) => setTodo9(e.target.value)} className={is9()} id="9a" type="text" /><button onClick={handle9} className="saveBtn">Save</button>
          </div>
        <div className="row">
          <p id="10"className="time-align">10AM</p><textarea  placeholder={localStorage.getItem("Todo10")} value={todo10} onChange={(e) => setTodo10(e.target.value)} className={is10()} id="10a" type="text" /><button onClick={handle10} className="saveBtn">Save</button>
          </div>
        <div className="row">
          <p id="11"className="time-align">11AM</p><textarea  placeholder={localStorage.getItem("Todo11")} value={todo11} onChange={(e) => setTodo11(e.target.value)} className={is11()} id="11a" type="text" /><button onClick={handle11} className="saveBtn">Save</button>
          </div>
        <div className="row">
          <p id="12"className="time-align">12PM</p><textarea  placeholder={localStorage.getItem("Todo12")} value={todo12} onChange={(e) => setTodo12(e.target.value)} className={is12()} id="12p" type="text" /><button onClick={handle12} className="saveBtn">Save</button>
          </div>
        <div className="row">
          <p id="13"className="time-align">  1PM</p><textarea  placeholder={localStorage.getItem("Todo1")} value={todo1} onChange={(e) => setTodo1(e.target.value)} className={is13()} id="1p" type="text" /><button onClick={handle1} className="saveBtn">Save</button>
          </div>
        <div className="row">
          <p id="14"className="time-align">  2PM</p><textarea  placeholder={localStorage.getItem("Todo2")} value={todo2} onChange={(e) => setTodo2(e.target.value)} className={is14()} id="2p" type="text" /><button onClick={handle2} className="saveBtn">Save</button>
          </div>
        <div className="row">
          <p id="15"className="time-align">  3PM</p><textarea  placeholder={localStorage.getItem("Todo3")} value={todo3} onChange={(e) => setTodo3(e.target.value)} className={is15()} id="3p" type="text" /><button onClick={handle3} className="saveBtn">Save</button>
          </div>
        <div className="row">
          <p id="16"className="time-align">  4PM</p><textarea  placeholder={localStorage.getItem("Todo4")} value={todo4} onChange={(e) => setTodo4(e.target.value)} className={is16()} id="4p" type="text" /><button onClick={handle4} className="saveBtn">Save</button>
          </div>
 
      </form>
    </div>

    </div>
  );
}

export default App;
