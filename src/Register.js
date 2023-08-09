import {Component} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Register extends Component{

    state = {
        name:"",
        email:"",
        password:""
    }

    onChangename = event => {
        this.setState({name: event.target.value})
      }
    
    onChangePassword = event => {
        this.setState({password: event.target.value})
    }

    onChangeEmial = event => {
        this.setState({email: event.target.value})
    }

    onSubmitForm = (event) => {
        event.preventDefault()
        const {name, password,email} = this.state
        const userDetails = {name, password, email}
        const {history} = this.props
        axios.post("http://localhost:4003/register", userDetails)
        .then(res => {
            if (res.data.Status==="success"){
                history.replace("/login")
            }else{
                alert("Error")
            }
           
        })
        .catch(err => console.log(err))

    }

    render() {
        return (
            <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
                <div className="bg-white p-3 w-25">
                    <h1>Signup</h1>
                    <form onSubmit={this.onSubmitForm}>
                        <div className="md-3">
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder="Enter Name" id="" className="from-control" onChange={this.onChangename} />
                        </div>
                        <div className="md-3">
                            <label htmlFor="email">Emial</label>
                            <input type="emial" placeholder="Enter email" id="email" className="from-control" onChange={this.onChangePassword} />
                        </div>
                        <div className="md-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Enter password" id="password" className="from-control" onChange={this.onChangeEmail} />
                        </div>
                        <button type = "submit" className="btn btn-success w-100">Sign Up</button>
                        <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Login
                        </Link>
                    </form>
                    </div>Register</div>
        )

    }
    
}

export default Register