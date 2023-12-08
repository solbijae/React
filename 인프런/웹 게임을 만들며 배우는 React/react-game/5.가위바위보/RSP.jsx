const React = require('react');
const { Component } = React;

const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px',
};

const scores = {
    가위: 1,
    바위: 0,
    보: -1,
};
  

class RSP extends Component {
    state = {
        result: '',
        imgCoord: rspCoords.바위,
        score: 0,
    };

    interval;

    componentDidMount () { // 컴포넌트 첫 렌더링 후 실행. 이후 rerendering될 때는 실행되지 않음. 비동기 요청을 많이 함
        this.interval = setInterval(() => {
            const {imgCoord} = this.state;
            if (imgCoord === rspCoords.바위) {
                this.setState({
                  imgCoord: rspCoords.가위,
                });
              } else if (imgCoord === rspCoords.가위) {
                this.setState({
                  imgCoord: rspCoords.보,
                });
              } else if (imgCoord === rspCoords.보) {
                this.setState({
                  imgCoord: rspCoords.바위,
                });
              }
        }, 1000);
    };

    componentDidMount () { // 리렌더링 후 실행

    }

    componentWillUnmount () { // 컴포넌트가 제거되기 직전 실행. 비동기 요청 정리를 많이 함

    }

    onClickBtn () {

    }

    render() {
        const { result, score, imgCoord } = this.state;
        return (
          <>
            <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
            <div>
              <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>바위</button>
              <button id="scissor" className="btn" onClick={this.onClickBtn('가위')}>가위</button>
              <button id="paper" className="btn" onClick={this.onClickBtn('보')}>보</button>
            </div>
            <div>{result}</div>
            <div>현재 {score}점</div>
          </>
        );
      };
};

module.exports = RSP;