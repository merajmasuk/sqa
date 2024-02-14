import { FaBars, FaBell, FaCog, FaExpand, FaHouseDamage } from "react-icons/fa";
// import logo from "../assets/img/logo-main/logo.png"
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
    FaAddressCard, FaAngular, FaArtstation, FaBriefcase, FaDollarSign, FaExternalLinkAlt, FaLock, FaQrcode, FaRegClone,
} from "react-icons/fa";
// import useNotification from "../hooks/useNotification";
import { useState } from "react";
import { useEffect } from "react";

const Dashboard = () => {
    const [user, setUser] = useState({});
    const [status, setStatus] = useState(false);
    const [adminStatus, setAdminStatus] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('userInfo')));
    }, []);
    if (status) {
        localStorage.removeItem('set-token-for-user');
        setStatus(false);
        navigate('/login')
    }
    // const [notification] = useNotification()
    // if(isLoading){
    //     return <progress className="progress w-56"></progress>
    // }
    // const [isAdmin,loading]=useAdmin();
    // console.log(email,isAdmin,loading);


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-black  flex flex-col items-center justify-center">
                {/* lg navbar */}

                <Outlet className="h-screen overflow-y-scroll"></Outlet>
                <div className="h-20 lg:hidden bg-black opacity-50%  top-0 left-0 right-0 absolute border-b-[1px] border-gray-700"></div>
                <div className="h-20 md:h-24 flex items-center  gap-5 justify-center invisible lg:visible bg-gradient-to-r from-black via-black to-[#F99F24] top-0 left-0 right-0 absolute">
                    <div className="flex items-center gap-7 justify-center absolute right-5">
                        <Link to="/"><FaHouseDamage className="text-center text-3xl text-white" /></Link>
                        <Link to="/dashboard/notifications">
                            <button className="flex">
                                <FaBell className="text-center text-3xl text-white" />
                                <div className="badge">+{ 0}</div>
                            </button>
                        </Link>
                        <div className="avatar">
                            <div className="w-12 cursor-pointer rounded-full" title={name}>
                                <img src={""} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="md:w-64 w-40 absolute z-30 top-5 md:top-2 md:left-5 left-4 lg:hidden md:hidden block">
                        <Link to="/"><img src={""} alt="" /></Link>
                    </div>

                    <label
                        htmlFor="my-drawer-2"
                        className="btn border-[#f99F24] bg-black rounded-lg text-white absolute right-5 top-5 drawer-button lg:hidden"
                    >
                        <FaBars />
                    </label>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="bg-gradient-to-r from-black via-black to-[#F99F24]  text-white overflow-y-scroll menu p-4 w-80 h-full ">
                    {/* Sidebar content here */}
                    <img src={""} className="w-52 ml-8" alt="" />

                    {/* Sidebar content here */}


                    <div className="mt-10 ml-5 text-xl">
                        <li className="mt-3">
                            <div className="flex flex-row bg-gray-400">
                                {/* <img className="w-4 h-4" src={dashboard} alt="" /> */}
                                <FaQrcode></FaQrcode>
                                <Link className="rounded-none m-0" to="/dashboard">
                                    Dashboard
                                </Link>
                            </div>
                        </li>
                        {
                            user ? <>
                                <li className="mt-3">
                                    <div className="flex flex-row hover:bg-gray-400">
                                        <FaDollarSign className="border rounded-full"></FaDollarSign>
                                        <Link to="/dashboard/revenue" className=" w-full rounded-none m-0" >
                                            Revenue
                                        </Link>
                                    </div>
                                </li>
                                <li className="mt-3">
                                    <div className="flex flex-row hover:bg-gray-400">
                                        <FaArtstation></FaArtstation>
                                        <Link className=" w-full rounded-none m-0" to="/dashboard/allProject">
                                            All Projects
                                        </Link>
                                    </div>
                                </li>
                                <li className="mt-3">
                                    <div className="flex flex-row hover:bg-gray-400">
                                        <FaAddressCard></FaAddressCard>
                                        <Link className=" w-full rounded-none m-0" to="/dashboard/allUser">
                                            All Users
                                        </Link>
                                    </div>
                                </li>
                                <li className="mt-3">
                                    <div className="flex flex-row hover:bg-gray-400">
                                        {/* <img className="w-4 h-4" src={products} alt="" /> */}
                                        <FaRegClone></FaRegClone>
                                        <Link className=" w-full rounded-none m-0" to="/dashboard/UserPayment">
                                            Payment
                                        </Link>
                                    </div>
                                </li>
                                <li className="mt-3">
                                    <div className="flex flex-row hover:bg-gray-400">
                                        <FaBriefcase></FaBriefcase>
                                        <Link className=" w-full rounded-none m-0" to="/dashboard/aCampaign">
                                            Campaign
                                        </Link>
                                    </div>
                                </li>
                                <li className="mt-3">
                                    <div className="flex flex-row hover:bg-gray-400">
                                        <FaLock></FaLock>
                                        <Link className=" w-full rounded-none m-0" to="/dashboard/aEvent">
                                            Event
                                        </Link>
                                    </div>
                                </li>
                                <li className="mt-3">
                                    <div className="flex flex-row hover:bg-gray-400">
                                        <FaAngular></FaAngular>
                                        <Link className=" w-full rounded-none m-0" to="/dashboard/blog">
                                            Blog
                                        </Link>
                                    </div>
                                </li>

                                <li className="mt-3">
                                    <div className="flex flex-row hover:bg-gray-400">
                                        <FaCog></FaCog>
                                        <Link className=" w-full rounded-none m-0" to="/settings">
                                            Setting
                                        </Link>
                                    </div>
                                </li>
                                <li className="mt-3">
                                    <div className="flex flex-row hover:bg-gray-400">
                                        <FaExternalLinkAlt></FaExternalLinkAlt>
                                        <Link className=" w-full rounded-none m-0" to="/logout">
                                            Log Out
                                        </Link>
                                    </div>
                                </li>
                            </> :
                                <>
                                    <li className="mt-3">
                                        <div className="flex flex-row hover:bg-gray-400">
                                            <FaBriefcase></FaBriefcase>
                                            <Link className=" w-full rounded-none m-0" to="/dashboard/userAddBlogs">
                                                Add Blog
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="mt-3">
                                        <div className="flex flex-row hover:bg-gray-400">
                                            <FaBriefcase></FaBriefcase>
                                            <Link className=" w-full rounded-none m-0" to="/dashboard/userBlog">
                                                My Blogs
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="mt-3">
                                        <div className="flex flex-row hover:bg-gray-400">
                                            <FaBriefcase></FaBriefcase>
                                            <Link className=" w-full rounded-none m-0" to="/dashboard/UserAddCampaign">
                                                All Campaign
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="mt-3">
                                        <div className="flex flex-row hover:bg-gray-400">
                                            <FaBriefcase></FaBriefcase>
                                            <Link className=" w-full rounded-none m-0" to="/dashboard/AddEvent">
                                                All Event
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="mt-3">
                                        <div className="flex flex-row hover:bg-gray-400">
                                            <FaBriefcase></FaBriefcase>
                                            <Link className=" w-full rounded-none m-0" to="/dashboard/payment">
                                                Payment History
                                            </Link>
                                        </div>
                                    </li>
                                </>
                        }
                    </div>

                </ul>
            </div>
        </div>
    );
}
export default Dashboard;