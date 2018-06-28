import React from 'react';
import ReactDOM from 'react-dom';

const sty = style;

class Home extends React.Component {
    render() {
        return (
            <div className={sty.home}>
                <p>1. webpack-dev-server --hot --inline</p>
                <p>hot会影响编译速度</p>
                <p>修改成webpack-dev-server --inline</p>
            </div>
        );
    }
}

export default Home;

