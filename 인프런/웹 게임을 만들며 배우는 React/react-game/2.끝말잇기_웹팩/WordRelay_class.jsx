const React = require('react');
const { Component } =  React;

class WordRelay extends Component {
    state = {
        word: '쿼카',
        value: '',
        result: ''
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.word[this.state.word.length-1] === this.state.value[0]) {
            this.setState ({
                word: this.state.value,
                value: '',
                result: '딩동댕'
            });
        } else {
            this.setState({
                value: '',
                result: "땡: '" +  this.state.word[this.state.word.length-1] + "'로 시작하는 단어를 적어주세요"
            });
        }
        this.input.focus();
    };

    onChangeInput = (e) => {
        this.setState({ value: e.currentTarget.value });
    };

    input;

    onRefInput = (c) => { this.input = c; };

    
    render() {
        return(
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput}/>
                    <button>입력</button>
                </form>
                <div>{this.state.result}</div>
            </>
        )
    }
}

module.exports = WordRelay;