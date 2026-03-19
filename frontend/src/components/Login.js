import React from 'react';
import { Link } from 'react-router-dom';

function Login(){
    return(
        <form>
        <div className="login-container mt-4">
        <h4 className='text-center logs-txt'>Login</h4></div>
        <div className="login-form ">
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email"></input>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password"></input>
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="remember-me"></input>
            <label className="form-check-label" htmlFor="remember-me">Remember me</label>
            <Link to="/forgot-password" className="form-text"><p>Forgot your password?</p></Link>
        </div>
        <button type="submit" className="btn login-btn w-100">Login</button>
        <p className="form-text mt-2">Don't have an account? <Link to="/signup">Sign up</Link></p>

        <div className="text-form mt-4">
            <p className="text-muted">Or login with:</p>
            <button className="btn btn-primary ">
            <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" width="20" /> Continue with Google
            </button>
        </div>
        </div>
        </form>
    )
}

export default Login;