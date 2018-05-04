import React from 'react';
import {Link} from "react-router-dom";
import LoginForm from "../forms/LoginForm";
import axios from 'axios';
import {withRouter} from 'react-router-dom';




class LoginPage extends React.Component{

submit = data => {

    //alert("username: " + data.username);
    axios.post('http://localhost:3333/api/login',{
      email:data.email,
      password:data.password
    })
    .then(function(response){
      //response.status == 200 ? changePage(): alert("Failed transition:")
    });
  };

render(){
  return(
    <div className="ui container">
      <h1>Login Page</h1><br/><br/>
      <LoginForm submit={this.submit}/>
    </div>

  );

}

}




export default LoginPage;
