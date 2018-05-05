import React from 'react';
import {Link} from "react-router-dom";
import LoginForm from "../forms/LoginForm";
import axios from 'axios';
import {Button } from 'semantic-ui-react';


class LoginPage extends React.Component{

submit = data => {

    //alert("username: " + data.username);
    axios.post('http://localhost:3333/api/login',{
      email:data.email,
      password:data.password
    })
    .then(function(response){

      var email = response.data.email;
      response.data.success
      ? (alert("Login Successfull. \n\n You are being redirected to the home page."), window.location.replace('/landing?name='+ email))
      : alert(response.data.message);

    });
  };

render(){
  return(
    <div className="ui container">
      <h1>Login Page</h1><br/><br/>
      <LoginForm submit={this.submit}/>
      <br/><br/><p>Make a new account? Right here.</p><br/>
      <Button>
        <Link to="/registration">Registration</Link>
      </Button>
    </div>

  );

}

}




export default LoginPage;
