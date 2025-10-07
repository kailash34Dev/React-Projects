import { useState } from 'react'
import './Loginsignup.css'
import emailIcon from '../../assets/email.png'
import passwordIcon from '../../assets/password.png'
import personIcon from '../../assets/person.png'

export const Loginsignup = () => {

    const [isSignup, setIsSignup] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};

        if (isSignup && !name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Invalid email format";
        }

        if (!password.trim()) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const signup = () => {
        if (isSignup === false) {
            setName("");
            setEmail("");
            setPassword("");
            setErrors({});
            setIsSignup(!isSignup);
        } else {
            if (validate()) {
                setName("");
                setEmail("");
                setPassword("");
                alert("Form submitted successfully!");
                //Form submission logic goes here
            }
        }
    }

    const login = () => {
        if (isSignup === true) {
            setName("");
            setEmail("");
            setPassword("");
            setErrors({});
            setIsSignup(!isSignup);
        } else {
            if (validate()) {
                setEmail("");
                setPassword("");
                alert("Form submitted successfully!");
                //Form submission logic goes here
            }
        }
    }

    return (
        <div className='container'>
            <div className="header">
                <h2>{isSignup ? "Sign Up" : "Login"}</h2>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {isSignup ?
                    <div>
                        <div className="input">
                            <img src={personIcon} alt="person-name" />
                            <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        {errors.name && <div className='error'>{errors.name}</div>}
                    </div>
                    :
                    ""
                }
                <div>
                    <div className="input">
                        <img src={emailIcon} alt="person-email" />
                        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    {errors.email && <div className='error'>{errors.email}</div>}
                </div>
                <div>
                    <div className="input">
                        <img src={passwordIcon} alt="person-password" />
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {errors.password && <div className='error'>{errors.password}</div>}
                </div>
            </div>
            {!isSignup ? <div className="forget-password">Lost password? <span>Click Here!</span></div> : ""}
            <div className="submit-container">
                <div className={isSignup ? "submit" : "submit   grey"} onClick={signup}>Sign Up</div>
                <div className={isSignup ? "submit grey" : "submit"} onClick={login}>Login</div>
            </div>
        </div>
    )
}