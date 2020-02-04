import React from 'react';
import {Link} from "react-router-dom";
import RegistrationForm from "../forms/RegistrationForm";
import axios from 'axios';
import {Button } from 'semantic-ui-react';

class RegistrationPage extends React.Component{

//Gets the data and sumbits it for a post request
submit = data => {
  axios.post('http://localhost:3333/register',{
    name:data.username,
    email:data.email,
    password:data.password,
    admin:data.admin
  })
  .then(function(response){

    //This is responsible for the page navigation.
    response.data.success
    ? (alert("Registration Successfull. \n\n You are being redirected to the Login Page."), window.location.replace('/login'))
    : alert("Registration failed. Please contact administrator");
  });
};



render(){
  //alert("Response is : " + this.state.response);
  return(
    <div align="top">
      <h1>Registration Page</h1>
      <RegistrationForm  submit={this.submit}/>

        <Link to="/" className="button">Back to Home</Link>

    </div>

  );

}

}

export default RegistrationPage;
