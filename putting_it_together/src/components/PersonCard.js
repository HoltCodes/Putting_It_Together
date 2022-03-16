import React, { useState } from 'react';

const PersonCard = (props) => {
  const { firstName, lastName, age, hairColor } = props;
  const [ SetAge, SetAddAge ] = useState(age);

  return (
    <div>
      <h2> {lastName}, {firstName}</h2>
      <p>Age: {SetAge} </p>
      <p>Hair Color: {hairColor} </p>
      <button onClick = { (event) => SetAddAge(SetAge + 1)}>
        Birthday Button for {firstName}
      </button>
    </div>
  );
};

export default PersonCard;