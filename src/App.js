import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addLog, clearLogs} from './store/logReducer/logsReducer';
import Button from "./components/Button";
import LogList from "./components/LogList";
import "./scss/index.scss";
import styles from "./styles.module.scss";


const App = () => {
    const dispatch = useDispatch();
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [queue, setQueue] = useState([]);
    const logs = useSelector(state => state.logsReducer.logs);


    const handleQueue = useCallback(() => {
        if (queue.length > 0 && !isTimerRunning) {
            setIsTimerRunning(true);

            const timerData = queue.shift();

            setTimeout(() => {
                timerData.cb();
                setIsTimerRunning(false);
                handleQueue();
            }, timerData.seconds * 1000);
        }
    }, [queue, isTimerRunning]);


    const handleButtonClick = (seconds) => {
        const clickTime = new Date().toLocaleTimeString();
        const startTimestamp = Date.now();

        const timerData = {
            seconds,
            clickTime,
            cb: () => {
                const log = new Date()
                const logTime = log.toLocaleTimeString();
                const passed = Math.floor((log - startTimestamp) / 1000);
                dispatch(addLog({seconds, logTime, clickTime, passed}));
            },
        }

        setQueue((prevQueue) => [...prevQueue, timerData]);
    };

    const handleClearLogs = () => {
        dispatch(clearLogs());
        setQueue([]);
    };

    useEffect(() => {
        handleQueue();
    }, [handleQueue, queue]);


    return (
        <div className={styles['wrapper']}>
            <div className={styles['container']}>
                <h1 className={styles['title']}>React Timer App</h1>
                <Button label="1 sec" onClick={() => handleButtonClick(1)}/>
                <Button label="2 sec" onClick={() => handleButtonClick(2)}/>
                <Button label="3 sec" onClick={() => handleButtonClick(3)}/>
                <button onClick={handleClearLogs} className='timer-btn btn btn btn-primary'>Clear Logs
                </button>
                <LogList logs={logs}/>

                {isTimerRunning &&
                    <div className={styles['loader']}>
                        <div className={styles['bar1']}></div>
                        <div className={styles['bar2']}></div>
                        <div className={styles['bar3']}></div>
                        <div className={styles['bar4']}></div>
                        <div className={styles['bar5']}></div>
                        <div className={styles['bar6']}></div>
                    </div>
                }

            </div>
        </div>
    );
};

export default App;
