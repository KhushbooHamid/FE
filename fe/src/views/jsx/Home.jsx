import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import '../css/Home.css';

const Home = () => {
  const navigate = useNavigate();


  const handleContinue = (user) => {
    navigate(`/${user}/login`);
  };

  const handleSignUp = (userType) => {
    navigate(`/signup/${userType}`);
  };

  return (
    <div className="home">
      <h1>CareBridge</h1>
      <h2>Clinical Decision Support System</h2>
      <Login handleContinue={handleContinue} />
      <Signup handleSignUp={handleSignUp} />
    </div>
  );
};

export default Home;
