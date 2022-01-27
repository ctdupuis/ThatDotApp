import React from 'react';

export default function Login({ setCurrentUser, history }) {
  const handleClick = () => {
    setCurrentUser({ id:1, name: "Cody"})
  }
  return(
  <div>
        <button onClick={handleClick}>
            Sign In
        </button>
  </div>);
}
