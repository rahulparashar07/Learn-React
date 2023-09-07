import React, { useContext, useState, useEffect } from "react";
import Child from './Child'
import NoteContext from './Context'
export default function App() {
  const [code, setCode] = useState('testCode');
  useEffect(()=>{
    console.log(code)
  }, [code])
  const changeCode = ()=>{
    console.log('iii')
  }
  return (
    <div>
      <Child changeCode={changeCode} />
      <button onClick={()=>{setCode(code+'changed')}}>test</button>
    </div>
  );
}
