import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
export function Forgot(){
    const Navigate=useNavigate();
    const emailref=useRef()
    function saveData(){
        let obj={
            emailid:emailref.current.value
        }
        axios({
            method:"POST",
            url:"http://ec2-3-109-214-63.ap-south-1.compute.amazonaws.com:4000/api/v1/forgot/password",
            data:obj
        }).then(()=>{
            alert("resent link has been sent your email address")
        })
    }
    return(
        
            <div className="container">
            <form onSubmit={()=>{saveData()}}>
                <div className="form-group">
                    <label for="form-label"className="form-label">Email id</label>
                    <input type="email" className="form-control" placeholder="Enter the Email" ref={emailref}></input>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                <Navigate></Navigate>
            </form>
        </div>
    )
}