import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './Friends/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import Counter from './Counter/Counter';
import Dropdown from './Dropdown/Dropdown';
import ColorPicker from './ColorPicker/ColorPicker';
import AppList from './AppList/AppList';
import Form from './Form/Form';
import Phonebook from './Phonebook/Phonebook';
import ModalComponent from './Modal/ModalWindow';
import SearchApp from './Searchbar/SearchApp';
import Cinemania from './Cinemania/Cinemania'; // Ensure this path is correct
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './Friends/friends.json';
import transactions from './TransactionHistory/transactions.json';
import colors from './ColorPicker/colors.json';
import './app.css';

const AllComponentsPage = () => {
  return (
    <div>
      <SearchApp />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <Counter />
      <Dropdown />
      <ColorPicker options={colors.colors} />
      <AppList />
      <Form />
      <Phonebook />
      <ModalComponent />
      <Cinemania />
    </div>
  );
};

const App = () => {
  const navigate = useNavigate(); // Hook to use for programmatic navigation

  return (
    <div className="app">
      <nav>
        <ul>
          <li><Link to="/search">SearchApp</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/statistics">Statistics</Link></li>
          <li><Link to="/friends">FriendList</Link></li>
          <li><Link to="/transactions">TransactionHistory</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/dropdown">Dropdown</Link></li>
          <li><Link to="/colorpicker">ColorPicker</Link></li>
          <li><Link to="/applist">AppList</Link></li>
          <li><Link to="/form">Form</Link></li>
          <li><Link to="/phonebook">Phonebook</Link></li>
          <li><Link to="/modal">ModalComponent</Link></li>
          {/* <li><Link to="/all">All Components</Link></li> */}
          <li><button onClick={() => navigate('/all')}>All</button></li>
          <li><button onClick={() => navigate('/cinemania')}>Cinemania</button></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/search" element={<SearchApp />} />
        <Route path="/profile" element={
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        } />
        <Route path="/statistics" element={<Statistics title="Upload stats" stats={data} />} />
        <Route path="/friends" element={<FriendList friends={friends} />} />
        <Route path="/transactions" element={<TransactionHistory items={transactions} />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/dropdown" element={<Dropdown />} />
        <Route path="/colorpicker" element={<ColorPicker options={colors.colors} />} />
        <Route path="/applist" element={<AppList />} />
        <Route path="/form" element={<Form />} />
        <Route path="/phonebook" element={<Phonebook />} />
        <Route path="/modal" element={<ModalComponent />} />
        <Route path="/all/*" element={<AllComponentsPage />} />
        <Route path="/cinemania/*" element={<Cinemania />} />
      </Routes>
    </div>
  );
};

export default App;



