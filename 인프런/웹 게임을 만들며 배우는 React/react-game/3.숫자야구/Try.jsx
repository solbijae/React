const React = require('react');
const { memo } = React

const Try = memo((props) => { 
    return(
        <li>{props.tryCount}차 시도 : {props.tryInfo.result}</li>
    );
});
Try.displayName = 'Try';

module.exports = Try;