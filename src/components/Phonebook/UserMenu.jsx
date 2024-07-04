import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/userSlice';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.user.email);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <p>{email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
