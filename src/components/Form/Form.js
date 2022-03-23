import React, {useState, useEffect} from 'react';
import './form.css'
export default function Form() {
    const [userDetails, setUserDetails] = useState({
        email: '',
        password: ''
    });

    const formSubmit = (e) =>{
        e.preventDefault();
        console.log(userDetails);
        
    }

    const changeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setUserDetails({...userDetails, [name]: value})
    }

    return (
        <div className="form-box p-5 col-5 m-auto">
            <form onSubmit = {formSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" onChange={changeHandler} aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control"  onChange={changeHandler} id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
