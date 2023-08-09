import { Component } from "react";
import {Link} from "react-router-dom"
import axios from "axios";

class Login extends Component {

    state = {
        email:"",
        password:""
    }

    onChangeEmail = event => {
        this.setState({email: event.target.value})
      }
    
    onChangePassword = event => {
        this.setState({password: event.target.value})
    }

    

    onSubmitForm = (event) => {
        event.preventDefault()
        const {password,email} = this.state
        const userDetails = { password, email}
        const {history} = this.props
        axios.post("http://localhost:4003/login", userDetails)
        .then(res => {
            if (res.data.Status==="success"){
                history.replace("/")
            }else{
                alert(res.data.Error)
            }
           
        })
        .catch(err => console.log(err))

    }

    render() {
      
    
        return (
            <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form onSubmit={this.onSubmitForm}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              className="form-control rounded-0"
              onChange={this.onChangeEmial}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={this.onChangePassword}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
          </form>
          <p>Already Have an Account</p>
          <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Sign Up
          </Link>
        
      </div>
    </div>
    )
        }
}

export default Login;
        
    
