import React, { useState, useEffect } from 'react';
// import React from 'react';
import Persons from './Persons';
import Users from './Users';
import Posts from './Posts';
// import Counter from './Counter';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  // const countNumber = () => {
  //   setCount(count + 1);
  // };

  // useEffect();

  // const bla = fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then(data => {
  //     return data;
  //   });
  // console.log(bla);
  // const [persons] = useState(bla);

  const [users, getUsers] = useState([]);
  const [posts, getPosts] = useState([]);

  useEffect(() => {
    takeUsers();
    takePosts();
  }, []);

  const takeUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    getUsers(data);
  };

  const takePosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    getPosts(data);
  };

  const [persons] = useState([
    {
      name: 'senthil',
      id: 1,
      age: 21,
      work: 'developer',
      message: 'you can boy'
    },
    {
      name: 'kannan',
      id: 2,
      age: 23,
      work: 'creator',
      message: 'create your own'
    },
    {
      name: 'techkanna',
      id: 3,
      age: 14,
      work: 'love worker',
      message: 'all is well'
    }
  ]);

  // const [user] = useState(

  // );
  // const arr = [];
  // .then(data => console.log(data));

  // console.log(arr);
  // const getupdate = () => {
  //   updatePersons((persons[1] = 'bla'));
  // };

  return (
    <div className="app">
      {/* {console.log(typeof persons)} */}
      {/* {console.log(persons)} */}
      {persons.map(person => (
        <Persons
          key={person.id}
          name={person.name}
          age={person.age}
          work={person.work}
          message={person.message}
        />
      ))}

      {/* <button onClick={getupdate}>click me</button> */}

      {/* {console.log(updatePersons)} */}

      {users.map(user => (
        <Users
          key={user.id}
          id={user.id}
          name={user.name}
          phone={user.phone}
          email={user.email}
        />
      ))}

      {posts.map(posts => (
        <Posts
          key={posts.id}
          id={posts.id}
          title={posts.title}
          body={posts.body}
        />
      ))}
    </div>
  );
}

export default App;
