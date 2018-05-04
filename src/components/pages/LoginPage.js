import React from 'react';
import {Link} from "react-router-dom";
import LoginForm from "../forms/LoginForm";


class LoginPage extends React.Component{
submit = data => {
  alert("Email: " + data.email);
};

render(){
  return(
    <div>
      <h1>Login Page</h1><br/><br/>
      <LoginForm submit={this.submit}/>
    </div>

  );

}

}





export default LoginPage;
