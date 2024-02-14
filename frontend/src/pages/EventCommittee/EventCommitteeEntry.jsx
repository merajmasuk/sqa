import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import configUrl from "../../config/config";

const EventCommitteeEntry = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [batchInfo, setBatchInfo] = useState([]);
    const [accessToken, setAccessToken] = useState();
    const [status, setStatus] = useState(true);

    const tokenUrl = 'https://pims.police.gov.bd:8443/pimslive/webpims/oauth/token';
    const clientId = 'ipzE6wqhPmeED-EV3lvPUA..';
    const clientSecret = 'ZIBtAfMkfuKKYqZtbik-TA..';
    const credentials = `${clientId}:${clientSecret}`;
    const base64Credentials = btoa(credentials);
    const headers = {
        'Authorization': `Basic ${base64Credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
    };
    const data = 'grant_type=client_credentials';
    useEffect(() => {
        const getAccessToken = async () => {
            try {
                const response = await axios.post(tokenUrl, data, { headers });
                setAccessToken(response.data.access_token);
            } catch (error) {
                console.error('Error getting access token:', error);
            }
        }
        getAccessToken();
    }, [])


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const eventInfo = {
            batch: form.batch.value,
            mobile: form.mobile.value,
        }

        const apiUrl = `https://pims.police.gov.bd:8443/pimslive/webpims/asp-info/batchmates-list/${form.batch.value}`;
        const headers = {
            'Authorization': `Bearer ${accessToken}`,
        };
        try {
            const response = await axios.get(apiUrl, { headers });
            if (form.mobile.value) {
                const filterData = response.data.items.filter(batchData => batchData.mobilephone.includes(form.mobile.value));
                setBatchInfo(filterData);
                setLoading(false);
                setStatus(false);
                return;
            }
            setLoading(false);
        } catch (error) {
            console.error('Error calling API:', error);
            setLoading(false);
        }
    }
    const handleComitySubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        const form=e.target;
        const committeeInfo={
            memberName:form.name.value,
            eventName:form.event.value,
            committeePost:form.committeePost.value,
            details:form.details.value,
        }

        try {
            const result = await axios.post(`${configUrl.BASEURL}/api/v1/setEventCommittee`, committeeInfo);
            console.log(result?.data);
            setLoading(false);
            navigate("/");
        } catch (error) {
            // Check if the error has a response
            if (error.response) {
                // The request was made, but the server responded with an error status code
                console.error("Response Error:", error.response.data);
                console.error("Status Code:", error.response.status);
                console.error("Headers:", error.response.headers);
            } else if (error.request) {
                // The request was made, but no response was received
                console.error("Request Error:", error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error("General Error:", error.message);
            }
            setLoading(false);
        }

    }
    if (loading) {
        return <div className="text-center text-xl"><span className="loading loading-spinner loading-lg text-info "></span></div>
    }
    return (
        <div className="bg-slate-200 rounded-xl py-5 mx-auto px-2 min-h-screen" style={{ width: "60vw" }}>
            <h1 className="text-blue-500 text-3xl text-center">Event Committee Entry Form</h1>
            {
                errorMessage?.errorMessage && <p className="text-red-500 text-center my-2">{errorMessage?.errorMessage}</p>
            }
            <div className="mx-auto text-center flex items-center justify-center mt-6">
                {batchInfo[0]?.pic && (
                    <img
                        src={`data:image/jpeg;base64,${batchInfo[0]?.pic}`}
                        alt="Avatar Tailwind CSS Component"
                        className="rounded-full h-24 w-24"
                    />
                )}
            </div>

            {
                status ? <>
                    <form onSubmit={handleFormSubmit} className="my-5">
                        <label className="form-control w-full max-w-lg mx-auto my-1">
                            <div className="label">
                                <span className="label-text">Enter BCS Batch: </span>
                            </div>
                            <input name="batch" required type="number" placeholder="BCS Batch" className="input input-bordered w-full max-w-lg" />
                        </label>
                        <label className="form-control w-full max-w-lg mx-auto my-1">
                            <div className="label">
                                <span className="label-text">Enter mobile number: </span>
                            </div>
                            <input name="mobile" required type="number" placeholder="mobile number" className="input input-bordered w-full max-w-lg" />
                        </label>
                        <label className="form-control w-full max-w-lg mx-auto my-2">
                            <input type="submit" value="SUBMIT" className="btn btn-outline w-full max-w-lg my-1"></input>
                        </label>
                    </form>
                </> : <>
                    <form onSubmit={handleComitySubmit} className="my-5">
                        <label className="form-control w-full max-w-lg mx-auto my-1">
                            <div className="label">
                                <span className="label-text">Enter Member name: </span>
                            </div>
                            <input name="name" disabled defaultValue={batchInfo[0]?.employeenameinenglish} required type="text" placeholder="member name" className="input input-bordered w-full max-w-lg" />
                        </label>
                        <label className="form-control w-full max-w-lg mx-auto my-1">
                            <div className="label">
                                <span className="label-text">Enter Event Name: </span>
                            </div>
                            <select name="event" id="event" className="select select-info w-full max-w-lg my-2" required>
                                <option disabled selected>Select event name</option>
                                <option value={"picnic"}>picnic</option>
                                <option value={"tour"}>tour</option>
                                <option value={"avatar"}>avatar</option>
                                {/* {
                                designation?.map(designationId => <>
                                    <option value={designationId?.id}>{designationId?.id}</option>
                                </>)
                            } */}
                            </select>
                            {/* <input name="event" required type="text" placeholder="event name" className="input input-bordered w-full max-w-lg" /> */}
                        </label>
                        <label className="form-control w-full max-w-lg mx-auto my-1">
                            <div className="label">
                                <span className="label-text">Enter Committee post: </span>
                            </div>
                            <select name="committeePost" id="committeePost" className="select select-info w-full max-w-lg my-2" required>
                                <option disabled selected>Select Committee post</option>
                                <option value={"chairman"}>Chairman</option>
                                <option value={"president"}>President</option>
                                <option value={"secretary"}>secretary</option>
                                {/* {
                                designation?.map(designationId => <>
                                    <option value={designationId?.id}>{designationId?.id}</option>
                                </>)
                            } */}
                            </select>
                            {/* <input name="event" required type="text" placeholder="event name" className="input input-bordered w-full max-w-lg" /> */}
                        </label>
                        <label className="form-control w-full max-w-lg mx-auto my-1">
                            <div className="label">
                                <span className="label-text">Enter committee detail: </span>
                            </div>
                            <input name="details" required type="text" placeholder="committee detail" className="input input-bordered w-full max-w-lg" />
                        </label>
                        <label className="form-control w-full max-w-lg mx-auto my-2">
                            <input type="submit" value="SUBMIT" className="btn btn-outline w-full max-w-lg my-1"></input>
                        </label>
                    </form>
                </>
            }
        </div>
    );
};

export default EventCommitteeEntry;