import React, { useContext } from 'react';
import myImage from '../../../../assets/Untitled design (17).jpg';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthContext';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    // console.log(user);

    const handleSignOutUser = () => {
        signOutUser()
            .then(() => {
                console.log('successfully logOut user');
            })
            .catch(error => {
                console.log('successfully logOut user', error);
            })


    }
    return (
        <div className="navbar shadow-sm bg-slate-300 text-black ">
            <div className="navbar-start">
                <div className="dropdown">
                    <button tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>

                    {/* after responsive  */}
                    <ul tabIndex={0} className="menu menu-sm dropdown-content  rounded-box z-10 mt-3 w-52 p-2 shadow font-semibold bg-slate-300">
                        <Link to='/'><a>Home</a></Link>

                        <li><a>Item 3</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost bg-white text-xl text-black">Jobs Portals</a>
            </div>


            {/* full screen  */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 font-semibold text-xl">
                    <NavLink to='/'> Home</NavLink>
                    <NavLink to='/'> blog</NavLink>
                    <NavLink to='/'> connect</NavLink>






                </ul>
            </div>



            <div className="navbar-end">
                <div className="flex gap-3">

                    {
                        user ? <>

                            {/* user profile  */}

                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">


                                    <div className="w-10 rounded-full">

                                        <img src={myImage} alt="Tailwind CSS Navbar component" />;

                                    </div>
                                </div>

                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">



                                    <section className=''>
                                        <div className='flex mx-auto'>
                                            <div tabIndex={0} role="button" className="  btn-circle avatar my-3 flex-1 bg-white text-xl ">


                                                <div className="w-10 rounded-full bg-white">

                                                    <img src={myImage} alt="Tailwind CSS Navbar component" />



                                                </div>

                                            </div>
                                            <h1 className='text-black font-bold text-xl ml-1'>sagor chowdhury</h1>
                                        </div>


                                        <hr />
                                        {/* user  */}
                                        {/* <li>{ users}</li> */}
                                        <li className='text-xl hover:bg-gray-400 font-bold'> <Link to='/MyApplication'><a>My Application</a></Link></li>
                                        <hr />
                                        <li className='text-xl font-semibold hover:bg-gray-400  '><a>Settings</a></li>


                                        {/* logOut btn  */}
                                        <li className="flex !justify-center mx-auto " onClick={handleSignOutUser}>
                                            <button className="my-4 w-full max-w-[200px] text-black font-semibold bg-red-500 text-xl py-2 text-center ">
                                                Logout
                                            </button>
                                        </li>


                                    </section>

                                </ul>
                            </div>

                        </> :


                            <>
                                <Link to='/LoginPages'><button className="btn btn-soft bg-blue-600  text-white text-xl ">

                                    Login
                                </button> </Link>
                                <hr />
                                {/* <ul><Link to='/Register'>Register</Link> </ul>  */}


                            </>
                    }





                </div>
            </div>
        </div>
    );
};

export default Navbar;