import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import configUrl from "../../config/config";

const ResetPassword = () => {
    const [errorMessage, setErrorMessage] = useState();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");
        const form = e.target;
        const userInfo = {
            email: form.email.value,
            password: form.oldPassword.value,
            newPassword: form.NewPassword.value,
        }
        await axios.post(`${configUrl.BASEURL}/api/v1/resetPassword`, userInfo)
            .then(result => {
                if (result.data.statusCode == 2) {
                    setLoading(false);
                    return setErrorMessage(result.data.message);
                }
                localStorage.setItem('userInfo', JSON.stringify(result.data.data));
                navigate("/");
                // window.location.reload();
            })
            .catch(err => {
                setErrorMessage(err.message)
                // setErrorMessage("Form do not submit unsuccessful");
            })
        setLoading(false);
    }
    if (loading) {
        return <div className="text-center text-xl"><span className="loading loading-spinner loading-lg text-info "></span></div>
    }
    return (
        <div className="bg-slate-200 rounded-xl py-5 mx-auto px-2" style={{ width: "60vw" }}>
            <h1 className="text-blue-500 text-3xl text-center">Reset Password Form</h1>
            {
                errorMessage && <p className="text-red-500 text-center my-2">{errorMessage}</p>
            }
            <form onSubmit={handleFormSubmit} className="my-5">
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter email: </span>
                    </div>
                    <input name="email" type="email" placeholder="user email" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter current password: </span>
                    </div>
                    <input name="oldPassword" type="password" placeholder="Current password" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter new Password: </span>
                    </div>
                    <input name="NewPassword" type="password" placeholder="new password" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-2">
                    <input type="submit" value="SUBMIT" className="btn btn-outline w-full max-w-lg my-1"></input>
                </label>
            </form>
            <Link to={"/forgetPassword"} className="text-green-500 btn btn-ghost ms-14 ">Reset Password</Link>
        </div>
    );
};

export default ResetPassword;