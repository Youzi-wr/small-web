import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'antd';
import style from './home.scss';

const sty = style;
const { Meta } = Card;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardData: [{
                url: 'src/images/home/blu.jpg',
                title: 'wujin1',
                description: 'http://localhost:8081/'
            }, {
                url: 'src/images/home/moon.jpg',
                title: 'wujin2',
                description: 'http://localhost:8081/'
            }, {
                url: 'src/images/home/dull.jpg',
                title: 'wujin3',
                description: 'http://localhost:8081/'
            }, {
                url: 'src/images/home/digita.jpg',
                title: 'wujin4',
                description: 'http://localhost:8081/'
            }, {
                url: 'src/images/home/hydrogen.jpg',
                title: 'wujin5',
                description: 'http://localhost:8081/'
            }, {
                url: 'src/images/home/zinc.jpg',
                title: 'wujin6',
                description: 'http://localhost:8081/'
            }] 
        }
    }
    render() {
        const { cardData } = this.state;

        return (
            <div className={sty.home}>
                <div className={sty.headWrap}>
                    <div className={sty.headTopWrap}>
                        <div className={sty.headTop}>
                            <span className={sty.left}>Welcome to Kangyuan</span>
                            {/* <span className={sty.right}>
                                <a href="javascript:;">换肤</a>
                            </span> */}
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
                <div className={sty.cardWrap}>
                    { cardData.map((item, i) => {
                        return (
                            <Card
                                key = {i}
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src={item.url}/>}
                            >
                                <Meta
                                title={item.title}
                                description={item.description}
                                />
                            </Card>
                        )
                    }) }
                </div>
            </div>
        );
    }
}

export default Home;