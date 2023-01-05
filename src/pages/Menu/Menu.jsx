import React from 'react';
import Card from "../../components/Card/Card";
import LargeSpinner from '../../components/Spinner/LargeSpinner/LargeSpinner';
import SmallSpinner from '../../components/Spinner/SmallSpinner/SmallSpinner';
import "./Menu.css"

const Menu = () => {
        return (
          <div className="container">
            <h1>This is Home page</h1>
            <div className="card-div">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <SmallSpinner />
            <LargeSpinner />
          </div>
        );
};

export default Menu;