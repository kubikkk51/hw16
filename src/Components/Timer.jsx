import React from "react";


function Timer(props) {
  const { startTime, step } = props;
  const [time, setTime] = React.useState(startTime)
  const [timerOn, setTimeOn] = React.useState(true)

  React.useEffect( () => {
    let interval = null;
    let stepInProgress = 1000;
    if (timerOn) {
      interval = setInterval(() => {
        setTime( prevTime => {
          if (prevTime > 0) {
            console.log( `Залишилось часу: ${Math.floor(prevTime / stepInProgress)} sec` )
            return (prevTime - (stepInProgress * step));
          } else {
            setTimeOn(false);
            return prevTime = startTime;
          }
        } )
      }, 1000)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval);

  }, [timerOn])

  return (
    <div >
      <div >
        <span>{('0' + Math.floor( (time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor( (time / 1000) % 60) ).slice(-2)}</span>
      </div>
      <button  onClick={() => setTimeOn(true)}>Start</button>
      <button  onClick={() => setTimeOn(false)}>Stop</button>
      
    
    </div>
  );
}

export default Timer;