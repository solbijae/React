const React = require('react');
const { Component } = React;

class CheckResponse extends Component {
    state = {
        state: "waiting",
        message: "클릭해서 시작하세요.",
        result: [],
    };

    timeout;
    startTime;
    endTime;

    onClickScreen = () => {
        const { state, message, result } = this.state;
        if (state === 'waiting') {
            this.setState({
                state: 'ready',
                message: '초록색이 되면 클릭하세요'
            });
            this.timeout = setTimeout(() => {
                this.setState({
                    state: 'now',
                    message: '지금 클릭'
                });
                this.startTime = new Date();
            }, Math.floor(Math.random() * 1000) + 2000)
        } else if (state === 'ready') {
            clearTimeout(this.timeout);
            this.setState({
                state: 'waiting',
                message: '넘 빨리 클릭함'
            });
        } else if (state === 'now') {
            this.endTime = new Date();
            this.setState((prevState) => {
                return {
                    state: 'waiting',
                    message: '클릭해서 시작하세요.',
                    result: [...prevState.result, this.endTime - this.startTime]
                };
            });
        }
    };

    renderAverage = () => {
        const { result } = this.state;
        return (
            result.length === 0 
                ? null 
                : <div>평균시간: {result.reduce((a,c) => a+c) / result.length}ms</div>
        )
    }

    render () {
        return (
            <>
                <div
                    id="screen"
                    className={this.state.state}
                    onClick={this.onClickScreen}
                >
                    {this.state.message}
                </div>
                {this.renderAverage()}
            </>
        )
    }
};

module.exports = CheckResponse;