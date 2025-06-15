import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <img src={props.image} alt={"title"} className={classes.image} />
    </li>
  );
};

export default Movie;
