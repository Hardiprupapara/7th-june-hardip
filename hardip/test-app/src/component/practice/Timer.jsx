import React, { useEffect, useState } from 'react'

const Timer = () => {


    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false)
    const [isReset, setReset] = useState(true)
    const [count, setCount] = useState(0)


    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => setTime(prevTime => prevTime + 1), 10);
            setReset(false)
        }
        return () => clearInterval(intervalId);
    }, [isRunning]);

    useEffect(() => {
        let timerid;
        if (count === 1) {
            console.log(count, "1")
            timerid = setInterval(() => {
                setCount(0)
                handelclick()
                setReset(true)
            }, 10)
        } else if (count === 2) {
            console.log(count, "2")
            setCount(0)
            reset()
        }
        return () => clearInterval(timerid)
    }, [count])

    const hh = Math.floor(time / 360000)
    const min = Math.floor((time % 360000) / 6000)
    const sec = Math.floor((time % 6000) / 100)
    const milsec = Math.floor(time % 100)

    const reset = () => {
        setTime(0)
        setIsRunning(false)
    }

    const handelclick = () => {
        setIsRunning(!isRunning)
    }

    const handleButtonClick = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <span>
                {hh}
                :{min.toString().padStart(2, '0')}
                :{sec.toString().padStart(2, '0')}
                :{milsec.toString().padStart(2, '0')}
            </span>
            <button onClick={(e) => handleButtonClick()}>
                {isRunning ? 'stop' : "start" && isReset ? "reset" : "stop"}
            </button>
        </div>
    )
}

export default Timer;