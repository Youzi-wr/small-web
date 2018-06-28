import React from 'react';
import ReactDOM from 'react-dom';
import style from './home.scss';

const sty = style;
console.log(sty);

class Home extends React.Component {
    render() {
        return (
            <div className={sty.home}>
                <div className={sty.head}>
                    this is headthis is headthis is head
                </div>
            </div>
        );
    }
}

export default Home;

