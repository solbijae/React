const React = require('react');
const { useState, useRef } = React;
const Try = require('./Try');

function getNumbers() {
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9-i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

const NumberBaseball = () => {
    const inputRef = useRef(null);
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getNumbers); //lazy init 기법 : getNumbers()가 아니라 이렇게 적으면 한번 호출한 값을 여기에 넣고 그 이후에는 rerender될 때마다 다시 함수가 실행되지 않음!
    const [tries, setTries] = useState([]);

    console.log('답 : ', answer);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (value === answer.join('')) {
            setResult('홈런!');
            setTries((prevTries) => (
                [...prevTries, { try: value, result: '홈런!' }]
            ))
            alert('홈런! 게임을 다시 시작합니다!');
            setValue('');
            setAnswer(getNumbers());
            setTries([]);
            inputRef.current.focus();
        } else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) {
                setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`)
                alert('게임을 다시 시작합니다!');
                setValue('');
                setAnswer(getNumbers());
                setTries([]);
                inputRef.current.focus();
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }   
                setTries((prevState) => (
                    [...prevState, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다`}]
                ));
                setValue('');
                inputRef.current.focus();
            }
        }
    }

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    return(
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} maxLength={4} value={value} onChange={onChangeInput} />
            </form>
            <div>시도: {tries.length}</div>
            <ul>
                {tries.map((v,i) => {
                    return(
                        <Try key={i+1} tryInfo={v} tryCount={i+1}/>
                    )
                })}
            </ul>
        </>
    );
};

module.exports = NumberBaseball;