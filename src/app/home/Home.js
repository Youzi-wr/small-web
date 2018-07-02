import React from 'react';
import ReactDOM from 'react-dom';
import style from './home.scss';

const sty = style;
console.log(style);

class Home extends React.Component {
    render() {
        return (
            <div className={sty.home}>
                <div className={sty.headWrap}>
                    <div className={sty.headTopWrap}>
                        <div className={sty.headTop}>
                            <span className={sty.left}>Welcome to Kangyuan</span>
                            <span className={sty.right}>
                                <a href="javascript:;">换肤</a>
                            </span>
                        </div>
                    </div>
                    <div className={sty.head}>
                        KangYuan
                    </div>
                    <div className={sty.navWrap}>
                        <ul className={sty.nav}>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Products</li>
                            <li>Factory</li>
                            <li>Testing Equipment</li>
                            <li>Common Questions</li>
                            <li>Contact US</li>
                        </ul>
                    </div>
                </div>
                <div className={sty.bannerWrap}>
                    <div className={sty.banner}>

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;