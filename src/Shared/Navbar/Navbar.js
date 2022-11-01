import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag, FaSearch } from 'react-icons/fa';
import logo from "../../Assets/Image/Logo/logo.jpg";
import noUser from "../../Assets/Image/Authentication-Image/user.png"
import darkMode from "../../Assets/Image/Authentication-Image/dark-mode.png";
import lightMode from "../../Assets/Image/Authentication-Image/light-mode.png";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, theme, setTheme } = useContext(AuthContext);
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme(true)
        }
        else if (!e.target.checked) {
            setTheme(false)
        }
    }
    return (
        <div className="navbar bg-base-100 px-10 font-semibold mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Services</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>Contact</Link></li>
                        <li>
                            <div className='lg:hidden flex'>
                                <FaShoppingBag></FaShoppingBag>
                                <FaSearch></FaSearch>
                            </div>
                            <div className=" lg:mr-3 m-0 lg:hidden flex">
                                <label className="label cursor-pointer">
                                    {
                                        theme ? <img src={darkMode} className="label-text w-7 mr-1" alt='/mode'></img>
                                            : <img src={lightMode} className="label-text w-7 mr-1" alt='/mode'></img>
                                    }
                                    <input onChange={handleToggle} type="checkbox" className="toggle toggle-accent" />
                                </label>
                            </div>
                        </li>
                        <li>
                            {user ? <Link to="/user" className="lg:hidden flex">
                                {
                                    user.photoURL ? <div>
                                        <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                            <img className='w-14 rounded-full p-1 bg-accent' src={user.photoURL} alt="User" />
                                        </div>
                                    </div>

                                        : <img className='w-14' src={noUser} alt="User" />
                                }
                            </Link>
                                : <Link to="/login" className="btn btn-outline btn-accent rounded-none btn-sm lg:hidden flex">Appointment</Link>
                            }
                        </li>
                    </ul>
                </div>
                <Link className='flex items-center' to="/">
                    <img className='lg:w-24 w-32 rounded-full' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/">Home</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Services</Link></li>
                    <li><Link>Blog</Link></li>
                    <li><Link>Contact</Link></li>
                </ul>
                <div className="navbar-end lg:hidden">
                    <div className="form-control lg:mr-3">
                        <label className="label cursor-pointer">
                            {
                                theme ? <img src={darkMode} className="label-text w-7 mr-1" alt='/mode'></img>
                                    : <img src={lightMode} className="label-text w-7 mr-1" alt='/mode'></img>
                            }
                            <input onChange={handleToggle} type="checkbox" className="toggle toggle-secondary" />
                        </label>
                    </div>
                </div>
            </div>
            <div className="navbar-end gap-x-3">
                <div className='lg:flex gap-x-4 hidden'>
                    <div className='flex items-center gap-x-4'>
                        <FaShoppingBag></FaShoppingBag>
                        <FaSearch></FaSearch>
                    </div>
                    <div className="form-control lg:mr-3 lg:block hidden">
                        <label className="label cursor-pointer">
                            {
                                theme ? <img src={darkMode} className="label-text w-7 mr-1" alt='/mode'></img>
                                    : <img src={lightMode} className="label-text w-7 mr-1" alt='/mode'></img>
                            }
                            <input onChange={handleToggle} type="checkbox" className="toggle toggle-accent" />
                        </label>
                    </div>
                </div>
                {
                    user ? <Link to="/user" className="lg:block hidden">
                        {
                            user.photoURL ? <div>
                                <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                    <img className='w-14 rounded-full p-1 bg-accent' src={user.photoURL} alt="User" />
                                </div>
                            </div>

                                : <img className='w-14' src={noUser} alt="User" />
                        }
                    </Link>
                        : <Link to="/login" className="btn btn-outline btn-accent rounded-none btn-sm hidden lg:flex ">Appointment</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;