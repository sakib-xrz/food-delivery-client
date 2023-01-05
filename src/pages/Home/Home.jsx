import React from 'react';
import "./Home.css"
import Card from '../../components/Card/Card';

const Home = () => {
    return (
        <div className='container'>
            <h1>This is Home page</h1>
            <div className='card-div'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default Home;