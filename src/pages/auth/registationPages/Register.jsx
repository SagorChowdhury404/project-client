import Lottie from "lottie-react";
import { useContext, useState } from "react";
import signInAnimittion from '../../../assets/AnimationSignIn.json';
import { FaUser, FaPhone, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import SocialLogin from "../socialLogin/SocialLogin";

export default function RegisterPage() {

    const { createUser, } = useContext(AuthContext);


    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            return false;
        }
        const domainPart = email.split('@')[1];
        if (!domainPart.includes('.')) {
            return false;
        }
        return true;
    };

    const isValidPhone = (phone) => {
        const phoneRegex = /^\+?\d{10,15}$/;
        return phoneRegex.test(phone);
    };

    const isValidFullName = (name) => {
        return name.trim().length > 2;
    };

    const isValidPassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        return passwordRegex.test(password);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        let errors = {};

        if (!fullName) {
            errors.fullName = "Full Name is required!";
        } else if (!isValidFullName(fullName)) {
            errors.fullName = "Full Name must be at least 3 characters long!";
        }
        if (!phone) {
            errors.phone = "Phone number is required!";
        } else if (!isValidPhone(phone)) {
            errors.phone = "Invalid phone number!";
        }
        if (!email) {
            errors.email = "Email is required!";
        } else if (!isValidEmail(email)) {
            errors.email = "Invalid email format!";
        }
        if (!password) {
            errors.password = "Password is required!";
        } else if (!isValidPassword(password)) {
            errors.password = "Password must be at least 8 characters, include one uppercase letter and one number!";
        }
        if (password !== confirmPassword) {
            errors.confirmPassword = "Passwords do not match!";
        }

        setError(errors);
        if (Object.keys(errors).length === 0) {
            // console.log("New Account Created:", { fullName, phone, email, password });

            // --- createUser for firebase authentication 
            createUser(email, password)
                .then(result => {
                    console.log(result.user)
                    alert("Account created successfully!");

                })
                .catch(error => {
                    console.log(error.message)
                })

        }

    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100  ">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 ">
                <div className="card-body card w-96  shadow-xl p-6 rounded-2xl !mt-0 !pt-0 ">

                    <form onSubmit={handleRegister}>
                        <h2 className="text-2xl font-semibold text-center ">Create Account</h2>
                        {/* Full Name Section */}
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Full Name</label>
                            <div className="flex items-center border rounded-lg px-3 bg-gray-50">
                                <FaUser className="text-gray-500 mr-2" />
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className="input input-bordered w-full bg-transparent focus:outline-none"
                                />
                            </div>
                            {error.fullName && <p className="text-red-500 text-sm mt-1">{error.fullName}</p>}
                        </div>

                        {/* Phone Section */}
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Phone Number</label>
                            <div className="flex items-center border rounded-lg px-3 bg-gray-50">
                                <FaPhone className="text-gray-500 mr-2" />
                                <input
                                    type="text"
                                    placeholder="Enter your phone number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="input input-bordered w-full bg-transparent focus:outline-none"
                                />
                            </div>
                            {error.phone && <p className="text-red-500 text-sm mt-1">{error.phone}</p>}
                        </div>

                        {/* Email Section */}
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Email</label>
                            <div className="flex items-center border rounded-lg px-3 bg-gray-50">
                                <FaEnvelope className="text-gray-500 mr-2" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="input input-bordered w-full bg-transparent focus:outline-none"
                                />
                            </div>
                            {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
                        </div>

                        {/* Password Section */}
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Password</label>
                            <div className="flex items-center border rounded-lg px-3 bg-gray-50">
                                <FaLock className="text-gray-500 mr-2" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="input input-bordered w-full bg-transparent focus:outline-none"
                                />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="ml-2">
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            {error.password && <p className="text-red-500 text-sm mt-1">{error.password}</p>}
                        </div>

                        {/* Confirm Password Section */}
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Re-enter Password</label>
                            <div className="flex items-center border rounded-lg px-3 bg-gray-50">
                                <FaLock className="text-gray-500 mr-2" />
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Re-enter your password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="input input-bordered w-full bg-transparent focus:outline-none"
                                />
                                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="ml-2">
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            {error.confirmPassword && <p className="text-red-500 text-sm mt-1">{error.confirmPassword}</p>}
                        </div>

                        <button type="submit" className="w-full px-4 py-2 rounded-lg text-white font-semibold !bg-blue-700 hover:bg-blue-800 transition duration-300 my-3">
                            Create Account
                        </button>


                        <h1 className="my-22" ><hr /></h1>

                        <Link to='/LoginPages'> <button type="submit" className="w-full px-4 py-2 rounded-lg text-white font-semibold !bg-green-700 hover:bg-blue-800 transition duration-300">

                            have an account? login


                        </button>
                        </Link>
                    </form>
                    <h1> <hr /></h1>
                    <SocialLogin></SocialLogin>
                </div>
                <div className="hidden md:block lg:block w-80 mx-5">
                    <Lottie animationData={signInAnimittion}></Lottie>
                </div>
            </div>
        </div>
    );
}
