

import React, { useEffect, useState } from 'react';
import { BsFillHandbagFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import ThemeToggler from './ThemeToggelr';
import { Avatar } from 'antd';
import user from '../../assets/images/user.jpeg';
import { RxCross2 } from "react-icons/rx";



const Links = [
    { title: "MEN", link: "/men" },
    { title: "WOMEN", link: "/women" },
    { title: "COLLECTION", link: "/collections" },
    { title: "LOOKBOOK", link: "/lookbook" },
    { title: "SALE", link: "/sale" },
];

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState("");
    const location = useLocation();

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    useEffect(() => {
        const path = location.pathname;
        setCurrentPath(path);
    }, [location]);

    return (
        <>
            {/* Navbar */}
            <nav className="bg-navbar-bg">
                <div className="mx-auto flex justify-between items-center py-8 px-8">

                    {/* Hamburger Icon (Visible on Mobile) */}
                    <button
                        className="block md:hidden focus:outline-none"
                        onClick={toggleDrawer}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="var(--icon-color)"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-16 6h16"
                            />
                        </svg>
                    </button>

                    <div className='flex items-center space-x-10'>
                        {/* Left Side - Logo */}
                        <div className="flex items-center ">
                            <Link to="/" className="text-2xl font-semibold tracking-widest text-text-primary">
                                PLASHOE
                            </Link>
                        </div>

                        {/* Center - Menu Items (Hidden on Mobile) */}
                        <div className="hidden md:flex space-x-6">
                            {
                                Links.map((link, index) => (
                                    <Link key={index} to={link.link} className={`text-sm ${currentPath === link.link ? 'text-text-primary ' : 'text-text-ternary'} hover:text-hover-link`}>
                                        {link.title}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>

                    {/* Right Side - Cart and User Icons */}
                    <div className="flex items-center space-x-8">
                        <Link to="/" className="text-sm text-text-ternary hidden md:block hover:text-hover-link">
                            OUR STORY
                        </Link>
                        <Link to="/" className="text-sm text-text-ternary hidden md:block hover:text-hover-link">
                            CONTACT
                        </Link>
                        <ThemeToggler />

                        {/* Cart Icon */}
                        <div className="relative hover:text-hover-link">
                            <BsFillHandbagFill className="h-6 w-6" style={{ color: 'var(--icon-color)' }} />
                            <span className="absolute -top-3 -right-3 bg-black dark:bg-white text-white dark:text-black text-xs w-[17px] h-[17px] rounded-full flex items-center justify-center">
                                2
                            </span>
                        </div>

                        {/* User Icon */}
                        <FaUser className="h-5 w-5 hidden md:block" style={{ color: 'var(--icon-color)' }} />
                    </div>
                </div>
            </nav>

            {/* Drawer Menu (for Mobile/Tablet) */}
            <div
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-bg-primary shadow-lg transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out`}
            >
                <div className="p-4">
                   <div className='w-full flex items-center justify-between py-6'>
                   <Avatar size={50} src={user} />
                    {/* Close Button */}
                    <button
                        className="focus:outline-none"
                        onClick={toggleDrawer}
                    >
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="var(--icon-color)"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg> */}
                        <RxCross2 className='h-7 w-7' style={{color: 'var(--icon-color)'}} />
                    </button>
                   </div>

                    {/* Drawer Links */}
                    <ul className="space-y-8">
                        {Links.map((link, index) => (
                            <li key={index} className='w-full border-b border-text-ternary pb-1'>
                                <Link to={link.link} className={`w-full text-sm font-semibold ${currentPath === link.link ? 'text-text-primary' : 'text-text-ternary'} hover:text-text-primary`}  onClick={toggleDrawer}>
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Overlay (visible when the drawer is open) */}
            {isDrawerOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40"
                    onClick={toggleDrawer}
                />
            )}
        </>
    );
};

export default Navbar;
