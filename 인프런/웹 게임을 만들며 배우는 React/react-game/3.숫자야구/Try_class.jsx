const React = require('react');
const { Component } =  React;

class Try extends Component {
    render(){
        return (
            <ul>
                <li>{this.props.tryCount}차 시도 : {this.props.v.try}</li>
            </ul>
        )
    }
}

module.exports = Try;