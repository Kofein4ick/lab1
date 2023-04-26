import { useState } from 'react';
import shtraf from './shtraf';

function Lab5(){
    const [beta,setBeta]=useState(0);
    const [x1,setX1]=useState(0);
    const [x2,setX2]=useState(0);
    const [mu,setMu]=useState(0);
    const [epsilon,setEpsilon]=useState(0);
    const [table,setTable]=useState(null);
    const betaChange=(e)=>{
        setBeta( e.target.value);
    }
    const epsilonChange=(e)=>{
        setEpsilon( e.target.value);
    }
    const muChange=(e)=>{
      setMu( e.target.value);
  }
    const x1Change=(e)=>{
        setX1( e.target.value);
    }
    const x2Change=(e)=>{
        setX2( e.target.value);
    }

    const buttonPush=()=>{
          let teble=shtraf(beta,epsilon,x1,x2,mu);
           setTable(
            <div className='child'>
            <table border="1" cellPadding="4" cellSpacing="0">
              <tr>
                <th>k</th>
                <th>mu</th>
                <th>x</th>
                <th>f_x</th>
                <th>alfa_x</th>
                <th>Sigma_x</th>
                <th>alfa_x*mu</th>
              </tr>
              {teble}
            </table>
            </div>)
        }
    
    const typeInp=
    <span>
    <div className='child-p'>
      <span>
        <label htmlFor="mu"> mu</label>
        <input className='params' type="number" id="mu" value={mu} onChange={muChange}/>
      </span>
      <span>
        <label htmlFor="beta"> beta</label>
        <input className='params' type="number" id="beta" value={beta} onChange={betaChange}/>
      </span>
      <span>
        <label htmlFor="epsilon"> epsilon</label>
        <input className='params' type="number" id="epsilon" value={epsilon} onChange={epsilonChange}/>
      </span>
    </div>
    <span className='child'>
      <span>
        <label htmlFor="x1"> x1</label>
        <input className='params' type="number" id="x1" value={x1} onChange={x1Change}/>
      </span>
      <span>
        <label htmlFor="x2"> x2</label>
        <input className='params' type="number" id="x2" value={x2} onChange={x2Change}/>
      </span>
    </span>
    </span>
    
    

    return (
    <div className='main'>
    {typeInp}
    <p className='child'>Выбранные параметры:
        <div>mu = {mu}, beta = {beta}, epsilon = {epsilon}</div>
        <div>x1 = {x1}, x2 = {x2}</div>
    </p>
    <button onClick={buttonPush}>OK</button>
      {table}
    </div>)
}
export default Lab5;