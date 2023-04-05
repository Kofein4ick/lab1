import { useState } from 'react';
import seacrhExtremum from './methods';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

function Lab1(){
    const [method,setMethod]=useState('binary_search');
    const [func,setFunc]=useState('func1');
    const [right,setRight]=useState(0);
    const [left,setLeft]=useState(0);
    const [l,setL]=useState(0);
    const [epsilon,setEpsilon]=useState(0);
    const [table,setTable]=useState(null);
    const [n,setN]=useState(0);
    const methodChange=(e)=>{
      setMethod( e.target.value);
   }
    const funcChange=(e)=>{
      setFunc( e.target.value);
      }
    const rightChange=(e)=>{
      setRight( e.target.value);
    }
    const leftChange=(e)=>{
      setLeft( e.target.value);
    }
    const nChange=(e)=>{
      setN( e.target.value);
    }
    const lChange=(e)=>{
      setL( e.target.value);
    }
    const epsilonChange=(e)=>{
      setEpsilon( e.target.value);
    }


    const buttonPush=()=>{
        let teble = seacrhExtremum(method,func,right,left,l,epsilon,n);
        setTable(
        <div className='child'>
        <table border="1" cellPadding="4" cellSpacing="0">
          <tr>
            <th>K</th>
            <th>a(k)</th>
            <th>b(k)</th>
            <th>lambda</th>
            <th>mu</th>
            <th>func(lambda)</th>
            <th>func(mu)</th>
          </tr>
          {teble.table}
        </table>
        <div>Оптимальный Х = {teble.optium}</div>
        <div>Оптимальный f(Х) = {teble.func_optium}</div>
        <div id='bub'>Количество вычислений функции: {teble.count}</div>
        <LineChart width={window.innerWidth*0.8} height={window.innerHeight*0.8}
          data={teble.base}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" scale={'linear'}/>
          <YAxis  scale={'linear'} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="y" stroke="#8884d8" />
          <Line type="monotone" dataKey="y1" stroke="#32cd32" />
        </LineChart>
        </div>)
      }
    
    
    
    const typeInp=
    <span>
      <span>
        <label htmlFor="a"> a</label>
        <input className='params' type="number" id="a" value={right} onChange={rightChange}/>
      </span>
      <span>
        <label htmlFor="b"> b</label>
        <input className='params' type="number" id="b" value={left} onChange={leftChange}/>
      </span>
      <span>
        <label htmlFor="l"> l</label>
        <input className='params' type="number" id="l" value={l} onChange={lChange}/>
      </span>
      <span>
        <label htmlFor="epsilon"> epsilon</label>
        <input className='params' type="number" id="epsilon" value={epsilon} onChange={epsilonChange}/>
      </span>
    </span>
    
    
    const inputs= func==='func1' ? 
    <div className='child'>
      {typeInp}
      <span>
        <label htmlFor="n"> n</label>
        <input className='params' type="number" id="n" value={n} onChange={nChange}/>
      </span>
    </div> : 
    <div className='child'>
      {typeInp}
    </div>;

    return (
    <div className='main'>
    <h3 className='child'>Выберите метод</h3>
    <div className='child'>
      <input type="radio" id="binary_search" value="binary_search" name='method' onChange={methodChange} defaultChecked/>
      <label htmlFor="binary_search"> Метод дихотомии</label>
    </div>
    <div className='child'>
      <input type="radio" id="gold_search" value="gold_search" name='method' onChange={methodChange}/>
      <label htmlFor="gold_search"> Метод золотого сечения</label>
    </div>
    <div className='child'>
      <input type="radio" id="fibonacci" value="fibonacci" name='method' onChange={methodChange}/>
      <label htmlFor="fibonacci"> Метод Фибоначчи</label>
    </div>
    <p className='child'>Выбранный метод {method}</p>

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
    <p className='child'>Выбранные параметры {right}, {left}, {l}, {epsilon}, {n} </p>
    <button onClick={buttonPush}>OK</button>
      {table}
    </div>)
}
export default Lab1;