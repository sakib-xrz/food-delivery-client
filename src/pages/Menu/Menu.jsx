import React from 'react';
import Card from "../../components/Card/Card";
import "./Menu.css"

const Menu = () => {
        return (
          <div className="container">
            <h1 className='home-title'>Don’t starve, just order</h1>
            <div className="card-div">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        );
};

export default Menu;