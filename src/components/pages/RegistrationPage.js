import React from 'react';
import {Link} from "react-router-dom";
import RegistrationForm from "../forms/RegistrationForm";
import axios from 'axios';

class RegistrationPage extends React.Component{

submit = data => {
  //alert("username: " + data.username);
  axios.post('http://localhost:3333/register',{
    name:data.username,
    email:data.email,
    password:data.password,
    admin:false
  })
  .then(function(response){
    console.log(response)
    alert(response.status)
  });
};

render(){
  //alert("Response is : " + this.state.response);
  return(
    <div>
      <h1>Registration Page</h1><br/><br/>
      <RegistrationForm  submit={this.submit}/>
    </div>

  );

}

}


export default RegistrationPage;
