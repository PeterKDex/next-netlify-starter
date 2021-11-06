import { useState, useEffect } from 'react';

export default function Clock(props) {
   const timer = useNewTimer(new Date());

   return (
        <h2>{timer.toLocaleTimeString()}</h2>
    );
}

function useNewTimer(currentDate) {
    const [date, setDate] = useState(currentDate);
    
    useEffect(() => {
      var timerID = setInterval( () => tick(), 1000 );
      return function cleanup() {
          clearInterval(timerID);
        };
    });
    
    function tick() {
      setDate(new Date());
    }
    
    return date;
}