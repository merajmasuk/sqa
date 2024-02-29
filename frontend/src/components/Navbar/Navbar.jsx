import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Navbar = () => {
    const [loading, setLoading] = useState(false);
    const { user } = useContext(AuthContext);

    const handleLogOut = async () => {
        setLoading(true);
        localStorage.removeItem('access-token');
        localStorage.removeItem('userInfo');
        window.location.reload();
        setLoading(false);
    }
    if (loading) {
        return <div className="text-center text-xl"><span className="loading loading-spinner loading-lg text-info "></span></div>
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                {
                    user && <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={"/committeeEntry"}>Committee Entry</Link></li>
                            <li><Link to={"/eventEntry"}>Course Mark Entry</Link></li>
                            <li><Link to={"/eventCommitteeEntry"}>Event committee Entry</Link></li>
                            <li><Link to={"/sponsorEntry"}>Sponsor Entry</Link></li>
                            {/* <li><a>Item 2</a></li> */}
                            {/* <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li> */}
                            {/* <li><a>Item 3</a></li> */}
                        </ul>
                    </div>
                }
                <Link to={"/"} className="btn btn-ghost text-xl">Online Course</Link>
            </div>
            {
                user?.email ? <>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to={"/committeeEntry"}>Committee Entry</Link></li>
                            <li><Link to={"/eventEntry"}>Course Mark Entry</Link></li>
                            <li><Link to={"/eventCommitteeEntry"}>Event committee Entry</Link></li>
                            <li><Link to={"/sponsorEntry"}>Sponsor Entry</Link></li>                            
                            <li><Link to={"/forum"}>Forum</Link></li>
                        </ul>
                    </div>
                    <Link className="btn mx-2" to={"/dashboard"}>Dashboard</Link>
                    <Link  className="btn mx-2" to={"/resetPassword"}>ResetPassword</Link>
                    <button onClick={handleLogOut} className="btn mx-2" to={"/login"}>LogOut</button>
                </> : <>
                    <div className="navbar-end ">
                        <Link className="btn mx-2" to={"/login"}>LOGIN</Link>
                        <Link className="btn mx-2" to={"/signUp"}>SIGN UP</Link>
                        {/* <Link className="btn mx-2" to={"/discussion"}>f</Link> */}
                    </div>
                </>
            }
        </div>
    );
};

export default Navbar;