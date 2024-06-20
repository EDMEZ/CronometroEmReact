import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Button } from './button';
import { Cron } from './Interval';



function App() {
  const[time, setTime] = useState(0); 
  const[running,setrunning] = useState(false)
  const[Paused ,setPaused] = useState(false)

  const Start = () =>{
    setrunning(true);
    setPaused(false);
  }
  const Pause = ()=>{
    setrunning(false);
    setPaused(true);
  }

  useEffect(()=>{
    let Interval;
    
    if(running && !Paused) {
      Interval = setInterval(()=>{
        setTime((time)=> time + 10)
      },10)
    }else{
      clearInterval(Interval)
    };
    return () => {
      clearInterval(Interval);
    }
  },[running,Paused]);
  
  const Reset = () =>{
    Pause();
    setTime(0);
  }
  return (
    <div className="App">

      <div className='Cron-App'>
        <Cron time={time} />
        
        <div className='Actions'>
          <Button text = {'Iniciar'} onClickou={Start} disabled={running} className="Btn Btn-Start"/>
          <Button text = {'Pausar'} onClickou={Pause} className="Btn Btn-Pause"/> 
          <Button text = {'Resetar'} onClickou={Reset} disabled={time === 0 } className='Btn Btn-Reset'/> 
        </div>
      </div>
      
    </div>
  );
}

export default App;
