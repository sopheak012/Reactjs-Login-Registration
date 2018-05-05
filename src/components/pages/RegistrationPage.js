import React from 'react';
import {Link} from "react-router-dom";
import RegistrationForm from "../forms/RegistrationForm";
import axios from 'axios';
import {Button } from 'semantic-ui-react';

class RegistrationPage extends React.Component{

submit = data => {
  alert("Admin: " + data.admin);
  axios.post('http://localhost:3333/register',{
    name:data.username,
    email:data.email,
    password:data.password,
    admin:data.admin
  })
  .then(function(response){
    response.data.success
    ? (alert("Registration Successfull. \n\n You are being redirected to the Login Page."), window.location.replace('/login'))
    : alert("Registration failed. Please contact administrator");
  });
};



render(){
  //alert("Response is : " + this.state.response);
  return(
    <div className="ui container">
      <h1>Registration Page</h1><br/><br/>
      <RegistrationForm  submit={this.submit}/><br/><br/>
      <Button>
        <Link to="/">Back to Home</Link>
      </Button>
    </div>

  );

}

}

export default RegistrationPage;
