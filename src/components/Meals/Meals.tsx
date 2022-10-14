import React from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

type MealsProps = {
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

const Meals = (props: MealsProps) => {
  return(
    <React.Fragment>
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
};

export default React.memo(Meals);