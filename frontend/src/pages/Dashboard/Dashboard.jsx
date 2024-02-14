
import { FaBars, FaBell, FaCog, FaExpand, FaHouseDamage } from "react-icons/fa";
import logo from "../../assets/img/logo-main/logo.png"
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
    FaAddressCard, FaAngular, FaArtstation, FaBriefcase, FaDollarSign, FaExternalLinkAlt, FaLock, FaQrcode, FaRegClone,
} from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import profile from "../../assets/professional.jpg";
const Dashboard = () => {
    const [status, setStatus] = useState(false);
    const [adminStatus,setAdminStatus]=useState(true);
    const navigate = useNavigate();
    useEffect(() => {
    }, [])

    useEffect(()=>{
        axios.get(`https://crowd-founding-new-server-site.vercel.app/api/authentication/admin/mdraselislam1944@gmail.com`,{
            headers:{
                Authorization: `bearer ${localStorage.getItem('set-token-for-user')}`
            }
        })
        .then(res=>setAdminStatus(res.data.admin));
    },[]);

    if (status) {
        localStorage.removeItem('set-token-for-user');
        setStatus(false);
        navigate('/login')
    }


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
                                <div className="badge">+{0}</div>
                            </button>
                        </Link>
                        <div className="avatar">
                            <div className="w-12 cursor-pointer rounded-full" title={""}>
                                <img src={""} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="md:w-64 w-40 absolute z-30 top-5 md:top-2 md:left-5 left-4 lg:hidden md:hidden block">
                        <Link to="/"><img src={logo} alt="" /></Link>
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
                    <img src={logo} className="w-52 ml-8" alt="" />

                    {/* Sidebar content here */}


                    <div className="mt-10 ml-5 text-xl">
                        <li className="mt-3">
                            <div className="flex flex-row bg-gray-400">
                                {/* <img className="w-4 h-4" src={dashboard} alt="" /> */}
                                <FaQrcode></FaQrcode>
                                <Link className="rounded-none m-0" to="/dashboard">
                                    Dashboard admin
                                </Link>
                            </div>
                        </li>
                        {
                            userInfo.role == 'admin' ? <>
                                <li className="mt-3">
                                    <div className="flex flex-row hover:bg-gray-400">
                                        <FaDollarSign className="border rounded-full"></FaDollarSign>
                                        <Link to="/dashboard/revenue" className=" w-full rounded-none m-0" >
                                            Revenue admin
                                        </Link>
                                    </div>
                                </li>
                                <li className="mt-3">
                                    <div className="flex flex-row hover:bg-gray-400">
                                        <FaArtstation></FaArtstation>
                                        <Link className=" w-full rounded-none m-0" to="/dashboard/allProject">
                                            All Projects admin
                                        </Link>
                                    </div>
                                </li>
                                <li className="mt-3">
                                    <div className="flex flex-row hover:bg-gray-400">
                                        <FaAddressCard></FaAddressCard>
                                        <Link className=" w-full rounded-none m-0" to="/dashboard/allUser">
                                            All Users admin
                                        </Link>
                                    </div>
                                </li>
                                <li className="mt-3">
                                    <div className="flex flex-row hover:bg-gray-400">
                                        {/* <img className="w-4 h-4" src={products} alt="" /> */}
                                        <FaRegClone></FaRegClone>
                                        <Link className=" w-full rounded-none m-0" to="/dashboard/UserPayment">
                                            Payment admin
                                        </Link>
                                    </div>
                                </li>
                                <li className="mt-3">
                                    <div className="flex flex-row hover:bg-gray-400">
                                        <FaBriefcase></FaBriefcase>
                                        <Link className=" w-full rounded-none m-0" to="/dashboard/aCampaign">
                                            Campaign admin
                                        </Link>
                                    </div>
                                </li>
                                <li className="mt-3">
                                    <div className="flex flex-row hover:bg-gray-400">
                                        <FaLock></FaLock>
                                        <Link className=" w-full rounded-none m-0" to="/dashboard/aEvent">
                                            Event admin
                                        </Link>
                                    </div>
                                </li>
                                <li className="mt-3">
                                    <div className="flex flex-row hover:bg-gray-400">
                                        <FaAngular></FaAngular>
                                        <Link className=" w-full rounded-none m-0" to="/dashboard/blog">
                                            Blog admin
                                        </Link>
                                    </div>
                                </li>

                                <li className="mt-3">
                                    <div className="flex flex-row hover:bg-gray-400">
                                        <FaCog></FaCog>
                                        <Link className=" w-full rounded-none m-0" to="/settings">
                                            Setting admin
                                        </Link>
                                    </div>
                                </li>
                                <li className="mt-3">
                                    <div className="flex flex-row hover:bg-gray-400">
                                        <FaExternalLinkAlt></FaExternalLinkAlt>
                                        <Link className=" w-full rounded-none m-0" to="/logout">
                                            Log Out admin
                                        </Link>
                                    </div>
                                </li>
                            </> : userInfo.role == 'moderator' ?
                                <>
                                    <li className="mt-3">
                                        <div className="flex flex-row hover:bg-gray-400">
                                            <FaBriefcase></FaBriefcase>
                                            <Link className=" w-full rounded-none m-0" to="/dashboard/userAddBlogs">
                                                Add Blog moderator
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="mt-3">
                                        <div className="flex flex-row hover:bg-gray-400">
                                            <FaBriefcase></FaBriefcase>
                                            <Link className=" w-full rounded-none m-0" to="/dashboard/userBlog">
                                                My Blogs moderator
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="mt-3">
                                        <div className="flex flex-row hover:bg-gray-400">
                                            <FaBriefcase></FaBriefcase>
                                            <Link className=" w-full rounded-none m-0" to="/dashboard/UserAddCampaign">
                                                All Campaign moderator
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="mt-3">
                                        <div className="flex flex-row hover:bg-gray-400">
                                            <FaBriefcase></FaBriefcase>
                                            <Link className=" w-full rounded-none m-0" to="/dashboard/AddEvent">
                                                All Event moderator
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="mt-3">
                                        <div className="flex flex-row hover:bg-gray-400">
                                            <FaBriefcase></FaBriefcase>
                                            <Link className=" w-full rounded-none m-0" to="/dashboard/payment">
                                                Payment History moderator
                                            </Link>
                                        </div>
                                    </li>
                                </> : <>
                                    <li className="mt-3">
                                        <div className="flex flex-row hover:bg-gray-400">
                                            <FaBriefcase></FaBriefcase>
                                            <Link className=" w-full rounded-none m-0" to="/dashboard/userAddBlogs">
                                                Add Blog student
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="mt-3">
                                        <div className="flex flex-row hover:bg-gray-400">
                                            <FaBriefcase></FaBriefcase>
                                            <Link className=" w-full rounded-none m-0" to="/dashboard/userBlog">
                                                My Blogs student
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="mt-3">
                                        <div className="flex flex-row hover:bg-gray-400">
                                            <FaBriefcase></FaBriefcase>
                                            <Link className=" w-full rounded-none m-0" to="/dashboard/UserAddCampaign">
                                                All Campaign student
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="mt-3">
                                        <div className="flex flex-row hover:bg-gray-400">
                                            <FaBriefcase></FaBriefcase>
                                            <Link className=" w-full rounded-none m-0" to="/dashboard/AddEvent">
                                                All Event student
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="mt-3">
                                        <div className="flex flex-row hover:bg-gray-400">
                                            <FaBriefcase></FaBriefcase>
                                            <Link className=" w-full rounded-none m-0" to="/dashboard/payment">
                                                Payment History student
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="mt-3">
                                        <div className="flex flex-row hover:bg-gray-400">
                                            <FaBriefcase></FaBriefcase>
                                            <Link className=" w-full rounded-none m-0" to="/practice">
                                               practice Path
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

