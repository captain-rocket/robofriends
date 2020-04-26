import React from 'react';
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user, robotId) => {
        return (
          <Card
            key={robotId}
            id={robots[robotId].id}
            name={robots[robotId].name}
            email={robots[robotId].email}
          />
          );
        })
      }
    </div>
  );
}

export default CardList;