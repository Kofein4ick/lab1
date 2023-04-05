import { useState } from 'react';
import rozenbruh from './rozenbruh';

function Lab2(){
    const [func,setFunc]=useState('func1');
    const [alpha,setAlpha]=useState(0);
    const [beta,setBeta]=useState(0);
    const [x11,setX11]=useState(0);
    const [x12,setX12]=useState(0);
    const [x13,setX13]=useState(0);
    const [delta1,setD1]=useState(0);
    const [delta2,setD2]=useState(0);
    const [delta3,setD3]=useState(0);
    const [epsilon,setEpsilon]=useState(0);
    const [table,setTable]=useState(null);
    const funcChange=(e)=>{
      setFunc( e.target.value);
    }
    const alphaChange=(e)=>{
        setAlpha( e.target.value);
    }
    const betaChange=(e)=>{
        setBeta( e.target.value);
    }
    const epsilonChange=(e)=>{
        setEpsilon( e.target.value);
    }
    const x11Change=(e)=>{
        setX11( e.target.value);
    }
    const x12Change=(e)=>{
        setX12( e.target.value);
    }
    const x13Change=(e)=>{
        setX13( e.target.value);
    }
    const D1Change=(e)=>{
        setD1( e.target.value);
    }
    const D2Change=(e)=>{
        setD2( e.target.value);
    }
    const D3Change=(e)=>{
        setD3( e.target.value);
    }

    const buttonPush=()=>{
          let teble=rozenbruh(func,alpha,beta,epsilon,x11,x12,x13,delta1,delta2,delta3);
          setTable(
            <div className='child'>
            <table border="1" cellPadding="4" cellSpacing="0">
              <tr>
                <th>k</th>
                <th>x</th>
                <th>FuncX</th>
                <th>i</th>
                <th>y</th>
                <th>FuncY</th>
                <th>delta</th>
                <th>d</th>
                <th>y+delta*d</th>
                <th>FuncS</th>
              </tr>
              {teble.table}
            </table>
            <div>Оптимальный Х = {teble.optium}</div>
            <div>Оптимальный f(Х) = {teble.func_optium}</div>
            </div>)
        }
    
    const typeInp=
    <span>
    <div className='child-p'>
      <span>
        <label htmlFor="alpha"> alpha</label>
        <input className='params' type="number" id="alpha" value={alpha} onChange={alphaChange}/>
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
        <label htmlFor="x11"> x11</label>
        <input className='params' type="number" id="x11" value={x11} onChange={x11Change}/>
      </span>
      <span>
        <label htmlFor="x12"> x12</label>
        <input className='params' type="number" id="x12" value={x12} onChange={x12Change}/>
      </span>
    </span>
    </span>
    
    
    const inputs= func==='func2' ? 
    <div>
      {typeInp}
      <span>
        <label htmlFor="x13"> x13</label>
        <input className='params' type="number" id="x13" value={x13} onChange={x13Change}/>
      </span>
      <div className='child'>
      <span>
        <label htmlFor="delta1"> delta1</label>
        <input className='params' type="number" id="delta1" value={delta1} onChange={D1Change}/>
      </span>
      <span>
        <label htmlFor="delta2"> delta2</label>
        <input className='params' type="number" id="delta2" value={delta2} onChange={D2Change}/>
      </span>
      <span>
        <label htmlFor="delta3"> delta3</label>
        <input className='params' type="number" id="delta3" value={delta3} onChange={D3Change}/>
      </span>
      </div>
    </div> : 
    <div>
      {typeInp}
      <div className='child'>
      <span>
        <label htmlFor="delta1"> delta1</label>
        <input className='params' type="number" id="delta1" value={delta1} onChange={D1Change}/>
      </span>
      <span>
        <label htmlFor="delta2"> delta2</label>
        <input className='params' type="number" id="delta2" value={delta2} onChange={D2Change}/>
      </span>
      </div>
    </div>;

    return (
    <div className='main'>

    <h3 className='child'>Выберите функцию</h3>
    <div className='child'>
      <input type="radio" id="func1" value='func1' name='func' onChange={funcChange} defaultChecked/>
      <label htmlFor="func1"> Функция 1</label>
    </div>
    <div className='child'>
      <input type="radio" id="func2" value='func2' name='func' onChange={funcChange}/>
      <label htmlFor="func2"> Функция 2</label>
    </div>
    <p className='child'>Выбранная Функция {func}</p>
    {inputs}
    <p className='child'>Выбранные параметры:
        <div>alpha = {alpha}, beta = {beta}, epsilon = {epsilon}</div>
        <div>x11 = {x11}, x12 = {x12}, x13 = {x13}</div>
        <div>delta1 = {delta1}, delta2 = {delta2}, delta3 = {delta3}</div>
    </p>
    <button onClick={buttonPush}>OK</button>
      {table}
    </div>)
}
export default Lab2;