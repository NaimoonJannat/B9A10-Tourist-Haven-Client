import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
    const[loginError, setLoginError]=useState('');
    const[loginSuccess, setLoginSuccess]=useState('');
    const[showPass, setShowPass]=useState(false);
    const emailRef= useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    const {signIn, signInGoogle, signInGithub} = useContext(AuthContext);

    const handleGithubSignin = () =>{
        signInGithub()
        .then(result =>{
            const user = result.user;
            toast.success("Logged In Successfully!")
            console.log(user);
            // navigate after login 
            navigate(location?.state ? location.state : '/');
            // console.log(user.photoURL);

        })
        .catch(error =>{
            console.log(error);
            toast.error("Error logging in. Please try again later.");
        })
    }

    const handleGoogleSignIn = () =>{
        signInGoogle()
        .then(result =>{
            const user = result.user;
            toast.success("Logged In Successfully!")
            console.log(user);
             // navigate after login 
             navigate(location?.state ? location.state : '/')
            // console.log(user.photoURL);

        })
        .catch(error =>{
            console.log(error);
            toast.error("Error logging in. Please try again later.");
        })
    }
  
    const handleLogin = e =>{
        e.preventDefault();
            const email=e.target.email.value;
            const password=e.target.password.value;
            console.log(email, password);

            // reset error 
            setLoginError('');
            setLoginSuccess('');

            signIn(email, password)
            .then(result =>{
                console.log(result.user);
                 // navigate after login 
            navigate(location?.state ? location.state : '/')
            
                {setLoginSuccess('Logged in successfully!');
                
        }
            })
            .catch(error =>{
                console.error(error);
                setLoginError(error.message);
            })

            
    }
    return (
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto text-center space-y-8">
            <h1 className="text-2xl font-bold">Please Login</h1>
            <form className="space-y-8" onSubmit={handleLogin}>
            <label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" ref={emailRef} name="email" className="grow" placeholder="Email" required />
</label>

<label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
  <input type={showPass ? "text":"password"} required className="grow" name="password" />
  <span onClick={() => setShowPass(!showPass)} className="text-base">
    {
        showPass ? <IoEyeOffOutline /> : <IoEyeOutline />
    }
    </span>
</label>
<label>
<input type="submit" className="btn w-full bg-[#ed8d34] mt-8" value="Login"></input>
</label>
<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
		<p className="px-3 text-sm text-gray-600">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
	</div>
	<div className="flex justify-center space-x-4">
		<button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm text-red-700 btn">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
		</button>
		<button aria-label="Log in with GitHub" className="p-3 btn  rounded-sm" onClick={handleGithubSignin}> 
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
			</svg>
		</button>
	</div>
            </form>
            {
                loginError && <p className="text-red-600">{loginError}</p>
            }
            {
                loginSuccess && <p className="text-green-600">{loginSuccess}</p>
            }
        <p>New Here? Please <Link to="/register">Register</Link> </p>
        </div>
    );
};

export default Login;