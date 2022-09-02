import React, {Fragment} from 'react';
//import './App.css';

//components
import InputToDo from "./components/inputTodo"

function App() {
  return (
    <Fragment> 
      <div className="container">
        <InputToDo/>
      </div>
    </Fragment>
  );
}

export default App;
