import React from 'react';
import ReactDOM from 'react-dom';
import Home from './app/home/Home.js';
import './style/main.scss';


class Index extends React.Component {
    render() {
        return <Home />;
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('reactApp')
);

