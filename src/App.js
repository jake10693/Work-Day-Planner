import './App.css';
import React, {useState} from 'react';


function App() {
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
   
     const remove = () => {
      localStorage.removeItem('Todo');
      // localStorage.removeItem('Password');
   };
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
       <p id="9" className="time-align">  9AM</p><textarea placeholder={localStorage.getItem("Todo9")} value={todo9} onChange={(e) => setTodo9(e.target.value)} className="time-block" id="9a" type="text" /><button onClick={handle9} className="saveBtn">Save</button>
          </div>

        <div className="row">
          <p id="10"className="time-align">10AM</p><textarea placeholder={localStorage.getItem("Todo10")} value={todo10} onChange={(e) => setTodo10(e.target.value)} className="time-block" id="10a" type="text" /><button onClick={handle10} className="saveBtn">Save</button>
          </div>
        <div className="row">
          <p id="11"className="time-align">11AM</p><textarea placeholder={localStorage.getItem("Todo11")} value={todo11} onChange={(e) => setTodo11(e.target.value)} className="time-block" id="11a" type="text" /><button onClick={handle11} className="saveBtn">Save</button>
          </div>
        <div className="row">
          <p id="12"className="time-align">12PM</p><textarea placeholder={localStorage.getItem("Todo12")} value={todo12} onChange={(e) => setTodo12(e.target.value)} className="time-block" id="12p" type="text" /><button onClick={handle12} className="saveBtn">Save</button>
          </div>
        <div className="row">
          <p id="13"className="time-align">  1PM</p><textarea placeholder={localStorage.getItem("Todo1")} value={todo1} onChange={(e) => setTodo1(e.target.value)} className="time-block" id="1p" type="text" /><button onClick={handle1} className="saveBtn">Save</button>
          </div>
        <div className="row">
          <p id="14"className="time-align">  2PM</p><textarea placeholder={localStorage.getItem("Todo2")} value={todo2} onChange={(e) => setTodo2(e.target.value)} className="time-block" id="2p" type="text" /><button onClick={handle2} className="saveBtn">Save</button>
          </div>
        <div className="row">
          <p id="15"className="time-align">  3PM</p><textarea placeholder={localStorage.getItem("Todo3")} value={todo3} onChange={(e) => setTodo3(e.target.value)} className="time-block" id="3p" type="text" /><button onClick={handle3} className="saveBtn">Save</button>
          </div>
        <div className="row">
          <p id="16"className="time-align">  4PM</p><textarea placeholder={localStorage.getItem("Todo4")} value={todo4} onChange={(e) => setTodo4(e.target.value)} className="time-block" id="4p" type="text" /><button onClick={handle4} className="saveBtn">Save</button>
          </div>
 
      </form>
    </div>

    </div>
  );
}

export default App;
