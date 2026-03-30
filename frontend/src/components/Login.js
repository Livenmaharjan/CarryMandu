import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');


        try{ // Simulate login logic
            const response = await fetch('http://localhost:9000/auth/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if(data.success){
                navigate('/'); // Redirect to home page on successful login
            } else {
                setError(data.message || 'Login failed. Please try again.');
            }
        }catch (err) {
            setError('An error occurred. Please try again later.');
        }   
        // Handle login logic here
    };

    return(
        <form onSubmit={handleSubmit}>
        <div className="login-container mt-4">  
        <h4 className='text-center logs-txt'>Login</h4></div>
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="login-form ">
            {error && <div className="alert alert-danger">{error}</div>}
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </div>

        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </div>

        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="remember-me"></input>
            <label className="form-check-label" htmlFor="remember-me">Remember me</label>
            <Link to="/forgot-password" className="form-text"><p>Forgot your password?</p></Link>
        </div>
        <button type="submit" className="btn login-btn w-100">Login</button>
        <p className="form-text mt-2">Don't have an account? <Link to="/signup">Sign up</Link></p>
        <button className="btn btn-primary ">
        <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" width="20" /> Continue with Google
        </button>
        </div>
        </form>
    )
}

export default Login;