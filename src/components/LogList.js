import React from 'react';
import styles from "./LogList.module.scss";

const LogList = ({ logs }) => (
    <div className={styles['logs-container']}>
        <h2 className={styles['logs-title']}>Logs</h2>
        <ul>
            {logs.map((log, index) => (
                <li key={index} className={styles['logs-text']}>
                    Button №{log.seconds}: {log.logTime} - {log.clickTime} ({log.passed}sec)
                </li>
            ))}
        </ul>
    </div>
);

export default LogList;
