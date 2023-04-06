import React from "react";

const typeColors = {
  normal: "lightgray",
  fire: "orange",
  grass: "green",
  water: "cornflowerblue",
  electric: "yellow",
  flying: "mediumpurple",
  ground: "bisque",
  rock: "burlywood",
  psychic: "palevioletred",
  fighting: "darkred",
  bug: "greenyellow",
  poison: "purple",
  steel: "grey",
  ghost: "darkslateblue",
  ice: "aquamarine",
  dark: "black",
  fairy: "salmon",
  dragon: "mediumblue",
};

const Type = ({ pType, sType }) => {
  const primaryType = pType ? (
    <p style={{ backgroundColor: typeColors[pType], padding: "5px" }}>
      {pType}
    </p>
  ) : null;
  const secondaryType = sType ? (
    <p style={{ backgroundColor: typeColors[sType], padding: "5px" }}>
      {sType}
    </p>
  ) : null;

  return (
    <div className="type">
      {primaryType}
      {secondaryType}
    </div>
  );
};

export default Type;
