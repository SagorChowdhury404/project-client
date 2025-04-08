import { useContext, useState } from "react";
import { FaUser, FaLock, FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginAnimittion from '../../../assets/Animation login2.json';
import Lottie from "lottie-react";
import { AuthContext } from "../../../context/AuthContext";
import SocialLogin from "../socialLogin/SocialLogin";

export default function LoginPage() {
    const { signInUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    // Email validation function
    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        let errors = {};

        if (!email) {
            errors.email = "Email is required!";
        } else if (!isValidEmail(email)) {
            errors.email = "Invalid email format!";
        }

        if (!password) {
            errors.password = "Password is required!";
        } else if (password.length < 8) {
            errors.password = "Password must be at least 8 characters!";
        }

        setError(errors);

        if (Object.keys(errors).length === 0) {
            // console.log("Login Attempt:", { email, password });
            alert("Login successful!");

            // firebase authentication login  
            signInUser(email, password)
                .then(result => {
                    console.log("signIn", result.user)
                    // alert("signIn successfully!");
                    navigate(from);
                })
                .catch(error => {
                    console.log(error)
                })

        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">

                {/* Login Card */}
                <div className="card-body card w-96  shadow-xl p-6 rounded-2xl">
                    <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

                    <form onSubmit={handleLogin}>
                        {/* Email */}
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Email</label>
                            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                                <FaUser className="text-gray-500 mr-2" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="input input-bordered w-full bg-transparent focus:outline-none"
                                />
                            </div>
                            {error.email && <small className="text-red-500">{error.email}</small>}
                        </div>

                        {/* Password */}
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Password</label>

                            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                                <FaLock className="text-gray-500 mr-2" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="input input-bordered w-full bg-transparent focus:outline-none"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="ml-2 text-gray-600"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>

                            {error.password && <small className="text-red-500">{error.password}</small>}
                        </div>


                        {/* Login Button */}
                        <button type="submit" className="w-full px-4 py-2 rounded-lg text-white font-semibold !bg-blue-700 hover:bg-blue-800 transition duration-300">
                            Login
                        </button>

                        <Link to='/forgePassword'><div className="text-center my-2 "><a className="link link-hover text-blue-600 ">Forgot password?</a></div> </Link>

                    </form>
                    <h1 className="bg-black text-black"><hr /></h1>
                    <Link to='/register'> <button type="submit" className="w-full px-4 py-2 rounded-lg text-white font-semibold !bg-green-700 hover:bg-blue-800 transition duration-300">
                      don't have an account ? sign IN
                    </button>
                    </Link>




                    <hr />
                    <SocialLogin></SocialLogin>
                </div>

                {/* Image (Visible only on md+ screens) */}
                <div className="hidden md:block lg:block w-80 mx-5 gap-4">
                    <Lottie animationData={loginAnimittion}></Lottie>


                </div>
            </div>
        </div>
    );
}
