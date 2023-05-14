import React, { useEffect, useState, useRef } from 'react'
import './Timer.css'


function Timer() {
    const normalTime = document.getElementById('normal-duration')
    const circleDashArray = useRef(0+'px')
    const [ time, setTime ] = useState(0)
    const [ timerOn, setTimerOn ] = useState(false)
    const [settingsDisplayed , setSettingsDisplayed ] = useState(false)


    useEffect(()=>{
      let counter = 0;
        if(timerOn){
        setInterval(()=>{
          counter++;
          if(counter > 9){
            counter = 0;
          }
        }, 1000)
      }
    },[timerOn])
    
    useEffect(()=>{
          let interval = null
          if(timerOn){
              interval = setInterval(() => {
                  setTime(prevTime=>prevTime+10)
              }, 10)
          }else{
              clearInterval(interval)
          }
        return () => clearInterval(interval)
      }, [timerOn])
    
    const handleReset = () =>{
      setTimerOn(false)
      setTime(0)
      circleDashArray.current = 0 + 'px' + ' ' + 2000 + 'px'
    }

      React.useEffect(()=>{
        circleDashArray.current = (((time/6000)*79/normalTime.value)+ 'px')
      },[time,normalTime])

  return (
    <div className='timer-container'>
        <div>
          <h1>Timer</h1>  
          <div>
              <button  onClick={()=>setTimerOn(true)}>Start</button>
              <button  onClick={()=> handleReset()}>Reset</button>
          </div>
          <div className='time-and-circle'>
            <svg width='270px' height='270px'>
              <circle r='125' cx='135' cy='135'  id='progress'  strokeDasharray={circleDashArray.current +" "+ '2000px'}></circle>
            </svg>
                  <div className='time-container'>
                      <span>{ ('0' + Math.floor( (time/60000) % 60)).slice(-2) }:</span>
                      <span>{ ('0' + Math.floor( (time/1000) % 60)).slice(-2) }</span>
                  </div>
          </div>
                  <button  onClick={()=>setTimerOn(!timerOn)}>{timerOn ? "Pause" : "UnPause"}</button>
        </div>
        
        
        <button className='settings-button' onClick={() =>setSettingsDisplayed(!settingsDisplayed)}>Settings</button>

        <div className='break-inputs'>
          <div className={settingsDisplayed ? '' : 'settingsDontDisplay'}>
                                
                <div>
                  <label>Normal Duration</label>
                  <input id='normal-duration' type='number' min='0'  step={5} defaultValue={25}/>
                </div>


                <br></br>

                <div>
                  <label for="short-break">
                    Short Break Duration
                  </label>
                  <input type='number' min='0' step={5} defaultValue={5}/>

                </div>

                <br></br>
                
                
                <div>
                  <label>Long Break Duration</label>
                  <input type='number' min='0' step={5} defaultValue={15}/>
                </div>

          </div>
        </div>
    </div>
  )
}

export default Timer