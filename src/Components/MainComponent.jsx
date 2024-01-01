import React from "react";
import CardComp from "./CardComp";

const MainComponent = ({ modifiedCocktails }) => {


  return (
    <>
      <div className="main-content">
        {modifiedCocktails.map((item) => {
          return (
            <CardComp
              id={item.id}
              name={item.name}
              image={item.image}
              description={item.description}
              key={item.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default MainComponent;
