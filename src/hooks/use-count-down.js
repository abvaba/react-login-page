import {useEffect, useState} from "react";

const useCountDown = (time) => {
  const [count, setCount] = useState(time);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    if (count === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [count])
  function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  const timeCount = formatTime(count);
  return {timeCount};
}

export {useCountDown};