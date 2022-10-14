import React from "react";
import classes from './Header.module.css';
import mealsImage from '../../assets/images/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

type HeaderProps = {
  // /** CSS class(es) to apply to the badge container element */
  // className?: string | Array<string>;
  // /** Color to apply to the badge element */
  // color?: "gray" | "blue" | "green" | "yellow" | "pink" | "purple";
  // /** Size of badge component to use */
  // size?: "small" | "medium";
  // /** Content that should be displayed inside the Badge component */
  // value?: any;
  // /** Content of the badge component */
  // children?: any;
};

const Header = (props: HeaderProps) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Meals Portal</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="some description goes here"/>
      </div>
    </React.Fragment>
  );
};

export default React.memo(Header);