import React from "react";
import classes from './Header.module.css';
import mealsImage from '../../assets/images/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

type HeaderProps = {
  onShowCart?: () => void;
};

const Header = ({onShowCart}: HeaderProps) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Meals Portal</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="some description goes here"/>
      </div>
    </React.Fragment>
  );
};

export default React.memo(Header);