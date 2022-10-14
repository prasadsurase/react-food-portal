import React from "react";
import classes from './MealsSummary.module.css';

type MealsSummaryProps = {
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

const MealsSummary = (props: MealsSummaryProps) => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default React.memo(MealsSummary);