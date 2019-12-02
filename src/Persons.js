import React, { useState } from 'react';

function Persons({ name, age, work, message }) {
  // const testObj = {};
  // const getPersonsBla = persons => {
  //   console.log(persons);
  //   console.log('senthil');
  // };
  const [count, setCount] = useState(age);

  const getCount = () => {
    setCount(count + 1);
  };
  // const updateMessage = e => {
  //   console.log(orig);

  //   update(
  //     orig.map(person => {
  //       console.log(person);
  //     })
  //   );
  // };

  return (
    <div className="persons">
      <h2>{name}</h2>
      <h3>{count}</h3>
      <h4>{work}</h4>
      <p>{message}</p>
      <button onClick={getCount}>inc age</button>
      {/* <button onClick={getPersonsBla(personsBla)}>click me</button> */}
      {/* <h2>{perosn.name}</h2>
          <h3>{perosn.age}</h3>
          <h4>{perosn.work}</h4>
          <p>{perosn.message}</p>  */}

      {/* {personsBla.map(person => (
        <div>
          <h2>{person.name}</h2>
          <h3>{person.age}</h3>
          <h4>{person.work}</h4>
          <p>{person.message}</p>
        </div>
      ))} */}
      {/* <button onClick={updateMessage}>click me</button> */}
    </div>
  );
}

export default Persons;
