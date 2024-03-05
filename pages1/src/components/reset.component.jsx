import axios from "axios";
import React, { useRef } from "react";
export function Reset(){
    const otpref=useRef();
    const pwdref=useRef();
    const cpwdref=useRef();
    function saveData(){
        let obj={
            otp:otpref.current.value,
            password:pwdref.current.value,
            confirmpassword:cpwdref.current.value
        }
        axios({
            method:"POST",
            url:"http://ec2-3-109-214-63.ap-south-1.compute.amazonaws.com:4000/api/v1/reset/password",
            data:obj
        }).then(()=>{
            alert("succesfully change password")
        })
    }
    return(
        <div>
            <form onSubmit={()=>{saveData()}}>
                <div className="form-group">
                <label for="otp" className="form-label">OTP</label>
                <input type="number" className="form-control" ref={otpref}></input>
                </div>
                <div className="form-group">
                <label for="password" className="form-label">Password</label>
                <input type="password" className="form-control" ref={pwdref}></input>
                </div>
                <div className="form-group">
                <label for="Cpassword" className="form-label">Confirm-Password</label>
                <input type="password" className="form-control" ref={cpwdref}></input>
                </div>
            </form>
        </div>
    )
}