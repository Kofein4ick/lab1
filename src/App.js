import { useState } from 'react';
import './App.css';
import Lab1 from './lab1';
import Lab2 from './lab2';
import Lab5 from './lab5';


function App() {
  const [lab,setLab]=useState('lr1');

  const labChange=(e)=>{
    setLab( e.target.value);
  }

  const otr= lab==='lr1' ? <Lab1/> : lab==='lr2' ? <Lab2/>: <Lab5/>;
  return (
    <div className="main">
    <h3 className='child'>Выберите ЛР</h3>
    <div className='child'>
      <input type="radio" id="lr1" value="lr1" name='laba' onChange={labChange} defaultChecked/>
      <label htmlFor="lr1"> ЛР 1</label>
    </div>
    <div className='child'>
      <input type="radio" id="lr2" value="lr2" name='laba' onChange={labChange}/>
      <label htmlFor="lr2"> ЛР 2</label>
    </div>
    <div className='child'>
      <input type="radio" id="lr5" value="lr5" name='laba' onChange={labChange}/>
      <label htmlFor="lr5"> ЛР 5</label>
    </div>
      {otr}
    </div>
  );
}

export default App;
