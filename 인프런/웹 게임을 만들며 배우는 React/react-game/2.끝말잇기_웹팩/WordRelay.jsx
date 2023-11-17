const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
    const [word, setWord] = useState('쿼카');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (word[word.length-1] === value[0]) {
            setWord(value);
            setValue('');
            setResult('딩동댕');
        } else {
            setValue('');
            setResult("땡: '" +  word[word.length-1] + "'로 시작하는 단어를 적어주세요");
        }
        inputRef.current.focus();
    };

    const onChangeInput = (e) => {
        setValue(e.currentTarget.value)
    };

    return(
        <>
            <div>{word}</div>
                <form onSubmit={onSubmitForm}>
                    <label htmlFor="wordInput">글자를 입력하세요</label>
                    <input ref={inputRef} value={value} onChange={onChangeInput} className="wordInput"/>
                    <button>입력</button>
                </form>
            <div>{result}</div>
        </>
    )
};

module.exports = WordRelay;