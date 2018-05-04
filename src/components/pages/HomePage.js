import React from 'react';
import {Link} from "react-router-dom";

const HomePage = () => (
<div>
  <h1>Home Page</h1>
  <Link to="/login">Login</Link><br/><br/>
  <Link to="/registration">Registration</Link>
</div>

);

export default HomePage;
