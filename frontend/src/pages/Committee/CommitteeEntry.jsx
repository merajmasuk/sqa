import axios from "axios";
import { useState } from "react";
import configUrl from "../../config/config";
import { useNavigate } from "react-router-dom";

const CommitteeEntry = () => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const token = localStorage.getItem("access-token");
    const configToken = {
        headers: {
            Authorization: `Bearer ${token.replace(/^"(.*)"$/, '$1')}`
        }
    };
    const handleComitySubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const committeeInfo = {
            committeeName: form.committeeName.value,
            committeeYear: form.committeeYear.value,
            committeeDetail: form.committeeDetail.value,
            committeeDesignation: [
                {
                    name: form.name1.value,
                    designation: form.designation1.value
                },
                {
                    name: form.name2.value,
                    designation: form.designation2.value
                },
            ],
        }
        await axios.post(`${configUrl.BASEURL}/api/v1/setCommittee`, committeeInfo, configToken)
            .then(result => {
                navigate("/");
            })
            .catch(err => {
                setErrorMessage(err.message)
                console.log(err.message)
                // setErrorMessage("Form do not submit unsuccessful");
            })
        setLoading(false)
    }

    if (loading) {
        return <div className="text-center text-xl"><span className="loading loading-spinner loading-lg text-info "></span></div>
    }
    return (
        <div>
            <form onSubmit={handleComitySubmit} className="my-5">
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter committee name: </span>
                    </div>
                    <input name="committeeName" required type="text" placeholder=" committee Name" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter committee Year: </span>
                    </div>
                    <input name="committeeYear" required type="number" placeholder=" committee Year" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter committee Detail: </span>
                    </div>
                    <textarea name="committeeDetail" required type="text" placeholder=" committee Detail" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter member name: </span>
                    </div>
                    <input name="name1" required type="text" placeholder=" member Name" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter member designation: </span>
                    </div>
                    <input name="designation1" required type="text" placeholder=" member designation" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter member name: </span>
                    </div>
                    <input name="name2" required type="text" placeholder=" member Name" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter member designation: </span>
                    </div>
                    <input name="designation2" required type="text" placeholder=" member designation" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-2">
                    <input type="submit" value="SUBMIT" className="btn btn-outline w-full max-w-lg my-1"></input>
                </label>
            </form>
        </div>
    );
};

export default CommitteeEntry;