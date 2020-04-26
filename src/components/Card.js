import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className="card tc gray dib br3 pa3 ma2 grow ba b--light-silver bw1 shadow-5">
      <img
        className="bg-black ba b--light-silver bw1 shadow-1"
        alt="robots"
        src={`https://robohash.org/${id}?200x200"`}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;