const React = require('react');
const { Component } = React;

function getNumbers() {

}

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: ['apple']
    };

    onSubmitForm = () => {

    };

    onChangeInput = () => {

    };

    render() {
        return(
            <>
                <h1>{this.state.result}</h1>
                <form onSumbit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {this.state.tries.map((v) => {
                        return (
                            <li>{v}</li>
                        )
                    })}
                    <li />
                </ul>
            </>
        );
    }
}

module.exports = NumberBaseball;