import React from 'react';
import {Link} from "react-router-dom";
import RegistrationForm from "../forms/RegistrationForm";


class RegistrationPage extends React.Component{
submit = data => {
  alert("username: " + data.username);
};

render(){
  return(
    <div>
      <h1>Registration Page</h1><br/><br/>
      <RegistrationForm submit={this.submit}/>
    </div>

  );

}

}





export default RegistrationPage;
