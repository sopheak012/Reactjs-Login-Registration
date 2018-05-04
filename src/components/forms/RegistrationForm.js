import React from 'react';
import propTypes from 'prop-types';


 class RegistrationForm extends React.Component {
   state = {
     data: {
       username: '',
       email: '',
       password: ''
     },
     loading: false,
     errors: {}
   };

   onChange = e => this.setState({data: {...this.state.data, [e.target.name]: e.target.value}});

   onSubmit = () => {
     //this.setState({errors});
     //const username = this.state;
     this.props.submit(this.state.data);
     //alert('Username is: ' + username.data.username);
   };

   render() {
     const {data} = this.state;

     return(

      <div>
      <form onSubmit = {this.onSubmit} >

          <label htmlFor="username"><b>Username</b></label><br/>
          <input type="username" placeholder="Enter Username" id="username" name="username" value={data.username} onChange = {this.onChange} required/>

          <br/><br/>

          <label htmlFor="email"><b>Email</b></label><br/>
          <input type="email" placeholder="Enter Email" id="email" name="email" value={data.email} onChange = {this.onChange} required/>

          <br/><br/>

          <label htmlFor="password"><b>Password</b></label><br/>
          <input type="password" placeholder="Enter Password" id="password" name="password" required/>
          <br/><br/>



          <button type="submit">Register</button>
      </form>
    </div>

     );
    }
}

 RegistrationForm.propTypes = {
   submit: propTypes.func.isRequired
 };

 export default RegistrationForm;
