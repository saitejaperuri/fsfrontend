import {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom"

class Home extends Component{

    state = {
        auth:false
    }

    componentDidMount() {
        axios.get("/")
        .then(res => {
           if (res.Data.Status = "success"){
             this.setState({auth:tru})
           }else{
             this.setState({auth:tru})
          }
        })
    }

    onLogin = () => {
        const {history} = this.props
        history.replace("/login")

    }

    renderHome= () => {
        <div >
            <h1>You are Authorised</h1>
            <button className="btn btn-danger">Logout</button>
            </div>
    }

    renderFail = () => {
        <>
        <h1>Login Now</h1>
        <Link to="/login" className="btn btn-primary" onClick ={this.onLogin}>Login</Link>
        </>
    }
    
   

    render() {
        const {auth} = this.state
        return (
            <div className="d-flex flex-direction-column align-items-center justify-content-center">
                {auth ? this.renderHome() : this.renderFail()}
            </div>
        )

    }
    
}

export default Home