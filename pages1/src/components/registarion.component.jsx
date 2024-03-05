import React, { useRef } from "react";
import axios from "axios";
export function Registarion(){
    const unameref=useRef();
    const pwdref=useRef();
    const fnameref=useRef();
    const emailref=useRef();
    const lnameref=useRef();
    const phoneref=useRef();
    function saveData(){
        let obj={
            username:unameref.current.value,
            password:pwdref.current.value,
            firstname:fnameref.current.value,
            emailid:emailref.current.value,
            lastname:lnameref.current.value,
            phonenumber:phoneref.current.value
        }
        axios({
            method:"Post",
            url:"http://ec2-3-109-214-63.ap-south-1.compute.amazonaws.com:4000/api/v1/user/create",
            data:obj
        }).then(()=>{
            alert("data saved successfully.....")
        })
    }
    return(
        <div className="container">
            <form onsubmit={()=>{saveData()}}>
                <div>
                <label for="username" className="form-label">User Name</label>
                <input type="text" className="form-control" placeholder="Enter the username" ref={unameref}></input>
                </div>
                <div>
                <label for="password" className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="********" ref={pwdref}></input>
                </div>
                
                <div>
                <label for="firstname" className="form-label">First Name</label>
                <input type="text" className="form-control" placeholder="Enter the Firstname" ref={fnameref}></input>
                </div>

                <div>
                <label for="email" className="form-label">Email id</label>
                <input type="email" className="form-control" placeholder="Enter the Email Id" ref={emailref}></input>
                </div>

                <div>
                <label for="lastname" className="form-label">Last Name</label>
                <input type="text" className="form-control" placeholder="Enter the Lastname" ref={lnameref}></input>
                </div>
                <div>
                <label for="phonenumber" className="form-label">Phone number</label>
                <input type="number" className="form-control" placeholder="Enter the Phonenumber" ref={phoneref}></input>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary mt-3 " value="Submit"> Submit </button>
                </div>
            </form>
        </div>
    )
}