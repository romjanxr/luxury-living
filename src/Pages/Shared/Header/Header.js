import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from './../../../Images/Group 33069.png'
import { FaBars } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const [isCollapse, setCollapse] = useState(false);
    const [isSticky, setSticky] = useState(false);
    let navigate = useNavigate();
    const { user, logOut } = useAuth();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);

    return (
        <header className={(isSticky || isCollapse) ? "bg-white w-full z-50 fixed shadow-md py-4" : "bg-transparent fixed w-full py-4"}>
            <div className="w-3/4 mx-auto flex justify-between items-center">
                <div>
                    <img style={{ width: '125px', height: '50px' }} src={logo} alt="" />
                </div>
                <div className="hidden md:flex items-center">
                    <NavLink
                        className="px-3 font-semibold text-lg"
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className="px-3 font-semibold text-lg"
                        to="/about"
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        className="px-3 font-semibold text-lg"
                        to="/about"
                    >
                        Projects
                    </NavLink>
                    {
                        !user?.email ?
                            <button
                                onClick={() => navigate('/login')}
                                className="bg-primary px-5 py-2 mx-2 rounded text-white"
                            >
                                Login
                            </button>
                            :
                            <>
                                <NavLink
                                    className="px-3 font-semibold text-lg"
                                    to="/dashboard"
                                >
                                    Dashboard
                                </NavLink>
                                <button
                                    onClick={logOut}
                                    className="bg-primary px-5 py-2 mx-2 rounded text-white"
                                >
                                    Logout
                                </button>
                            </>
                    }
                </div>
                <button
                    className="md:hidden text-3xl"
                    onClick={() => setCollapse(!isCollapse)}
                >
                    <FaBars />
                </button>
            </div >
            {isCollapse && mobileMenu()}
        </header >
    );
};

const mobileMenu = () => {
    return (
        <div className="px-3 py-3">
            <div className="flex flex-col">
                <NavLink
                    className="my-3 font-semibold text-lg"
                    to="/"
                >
                    Home
                </NavLink>
                <NavLink
                    className="mb-3 font-semibold text-lg"
                    to="/about"
                >
                    About Us
                </NavLink>
                <NavLink
                    className="mb-3 font-semibold text-lg"
                    to="/about"
                >
                    Projects
                </NavLink>
                <NavLink
                    className="mb-3 font-semibold text-lg"
                    to="/about"
                >
                    Dashboard
                </NavLink>
                <button className="bg-primary px-3 py-2 mb-3 rounded text-white">Login</button>
                <button className="bg-primary px-3 py-2 mb-3 rounded text-white">Logout</button>
            </div>
        </div>
    )
}

export default Header;