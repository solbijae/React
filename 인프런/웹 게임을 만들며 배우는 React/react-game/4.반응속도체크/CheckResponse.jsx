const React = require('react');
const { useState, useRef } = React;

const CheckResponse = () => {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('클릭해서 시작');
    const [result, setResult] = useState([]);
    const timeOut = useRef();
    const startTime = useRef();
    const endTime = useRef();

    const onClickScreen = () => {
        if (state === 'waiting') {
            setState('ready');
            setMessage('초록색이 되면 클릭하세요')
            timeOut.current = setTimeout(() => {
                setState('now');
                setMessage('지금 클릭');
                startTime.current = new Date();
            }, Math.floor(Math.random() * 1000) + 2000)
        } else if (state === 'ready') {
            clearTimeout(timeOut.current);
            setState('waiting');
            setMessage('Too fast');
        } else if (state === 'now') {
            endTime.current = new Date();
            setState('waiting');
            setMessage('Click to start');
            setResult((prevResult) => (
                [...prevResult, endTime.current - startTime.current]
            ));
        }
    };

    const onReset = () => {
        setResult([]);
    };

    const renderAverage = () => {
        return (
            result.length === 0 
            ? null 
            : <>
                <div>평균시간: {result.reduce((a,c) => a+c) / result.length}ms</div>
                <button onClick={onReset}>Reset</button>
            </>
        );
    };

    return (
        <>
            <div
                id="screen"
                className={state}
                onClick={onClickScreen}
            >
                {message}
            </div>
            {renderAverage()}
        </>
    )
};
module.exports = CheckResponse;