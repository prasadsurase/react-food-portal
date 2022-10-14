import React from "react";
import classes from './AvailableMeals.module.css';

type AvailableMealsProps = {
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

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = (props: AvailableMealsProps) => {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  return (
    <section className={classes.meals}>
      <ul>
        {mealsList}
      </ul>
    </section>
  );
};

export default React.memo(AvailableMeals);