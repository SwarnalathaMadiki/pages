import React, { useRef } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
export function Login(){
    const emailref=useRef();
    const pwdref=useRef();
    function saveData(){
        let obj={
            emailid:emailref.current.value,
            password:pwdref.current.value
        }
        axios({
            method:"POST",
            url:"http://ec2-3-109-214-63.ap-south-1.compute.amazonaws.com:4000/api/v1/user/login",
            data:obj,
        }).then(()=>{
            alert("login successfull")
        })
    }
    return(
        <div className="container">
            <form onSubmit={()=>{saveData()}}>
                <div className="form-group">
                    <label for="form-label"className="form-label">Email id</label>
                    <input type="email" className="form-control" placeholder="Enter the Email" ref={emailref}></input>
                </div>
                <div className="form-group">
                    <label for="form-label"className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="********" ref={pwdref}></input>
                </div>
                <div>
                    <button type="Submit" className="btn btn-primary">Submit</button>
                </div>
                <div><h3>or</h3></div>
                <div>
                    <Link to="/forgot">Forgot password</Link>
                </div>
            </form>
        </div>
    )
}