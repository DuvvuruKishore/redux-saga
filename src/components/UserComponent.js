// App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


const UserComponent = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const error = useSelector((state) => state.error);

  const fetchUser = () => {
    dispatch({ type: 'FETCH_USER', payload: 1 });
  };

  return (
    <div>
      <button onClick={fetchUser}>Fetch User</button>
      {user && <div>{user.name}</div>}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default UserComponent;