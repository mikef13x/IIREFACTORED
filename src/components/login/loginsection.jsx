export default function LoginSection() {
    return (
        <div className="container" id="container">
            <div className="form-container sign-up">
                <form className="signup-form">
                    <h1>Create Account</h1>
                    <span> Use your email for registration</span>
                    <input type="text" placeholder="Username" id="username-signup" />
                    <input type="email" placeholder="Email" id="email-signup" />
                    <input type="password" placeholder="Password" id="password-signup" />
                    <input type="password" placeholder="Confirm Password" id="password-confirm" />
                    <span className="sign-up-toggle-icon"><i className="fas fa-eye"></i></span>
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in">
                <form className="login-form">
                    <h1>Sign In</h1>
                    <span>or use email and password</span>
                    <input type="email" placeholder="Email" id="email-login" />
                    <input type="password" placeholder="Password" id="password-login" />
                    <span className="password-toggle-icon"><i className="fas fa-eye"></i></span>
                    <a href="#">Forget Your Password?</a>
                    <button type="submit">Sign In</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

                        
                        