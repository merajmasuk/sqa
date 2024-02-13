import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import configUrl from "../../config/config";
const CommitteeEntry = () => {
    const [accessToken, setAccessToken] = useState();
    const [batch, setBatch] = useState([]);
    const [committeeMember, setCommitteeMember] = useState({});
    const [loading, setLoading] = useState(false);
    const [batchFind, setBatchFind] = useState(1);
    const [designation, setDesignation] = useState([]);
    const [committeeDesignation, setCommitteeDesignation] = useState([]);
    const [photo, setPhoto] = useState("");
    const [errorMessage, setErrorMessage] = useState({
        designation: "",
        group: "",
        year: "",
        serial_no: "",
        errorMessage: "",
    });
    const navigate = useNavigate();
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
        axios.get(`${configUrl.BASEURL}/api/v1/getDesignation`)
            .then(result => {
                setDesignation(result?.data?.data)
            })
            .catch(error => {
                setErrorMessage("Network issue")
            })

        axios.get(`${configUrl.BASEURL}/api/v1/getCommitteeGroup`)
            .then(result => {
                setCommitteeDesignation(result?.data?.data);
            })
            .catch(error => {
                setErrorMessage("Network issue")
            })

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setBatch([]);
        setErrorMessage((prev) => ({ ...prev, errorMessage: "" }));
        const form = e.target;
        const apiUrl = `https://pims.police.gov.bd:8443/pimslive/webpims/asp-info/batchmates-list/${form.batch.value}`;
        const headers = {
            'Authorization': `Bearer ${accessToken}`,
        };
        try {
            const response = await axios.get(apiUrl, { headers });
            if (form.mobile.value) {
                const filterData = response.data.items.filter(batchData => batchData.mobilephone.includes(form.mobile.value));
                if (filterData.length == 0) {
                    setErrorMessage((prev) => ({ ...prev, errorMessage: " Search by mobile number is not found." }));
                    setBatchFind(1);
                    setLoading(false);
                    return;
                }
                if (filterData.length > 1) {
                    setBatch(filterData);
                    setBatchFind(2);
                    setLoading(false);
                    return;
                }
                setCommitteeMember(filterData[0]);
                setBatchFind(3);
                setLoading(false);
                return;
            }
            if (response.data.items.length > 0) {
                setBatch(response.data.items);
                setBatchFind(2);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error calling API:', error);
            setLoading(false);
        }
    }

    const handleSubmitEntryCommittee = async (e) => {
        e.preventDefault();
        const form = e.target;
        setErrorMessage({});
        if (form.BPSA_Designation_id.value == 'Select BPSA Designation Id') {
            setErrorMessage((prev) => ({ ...prev, designation: "designation is required." }));
            return;
        }
        if (form.comm_group_slug.value == 'Select committee Group Slug') {
            setErrorMessage((prev) => ({ ...prev, group: "committee group is required." }));
            return;
        }
        if (form.Association_Year.value == 'Select committee Year') {
            setErrorMessage((prev) => ({ ...prev, year: "committee year is required." }));
            return;
        }
        if (!form.serial_no.value) {
            setErrorMessage((prev) => ({ ...prev, serial_no: "committee serial No is required." }));
            return;
        }
        setLoading(true);

        const committeeInfo = {
            BPSA_Designation_id: form.BPSA_Designation_id.value,
            comm_group_slug: form.comm_group_slug.value,
            Association_Year: form.Association_Year.value,
            serial_no: form.serial_no.value,
            Name: committeeMember?.employeename,
            // photo: committeeMember?.pic,
            photo: "",
            Officail_Designation: committeeMember?.present_workplace,
            Mobile_Number: committeeMember?.mobilephone,
            PIMS_ID: committeeMember?.employeecode,
        }

        const coverImageFormData = new FormData();
        coverImageFormData.append('image', photo);
        const coverImageResponse = await fetch('https://api.imgbb.com/1/upload?key=01d3eafd9fb565419fba52e1e14a7d5a', {
            method: 'POST',
            body: coverImageFormData,
        });
        const coverImageData = await coverImageResponse.json();
        committeeInfo.photo = coverImageData.data.display_url;

        try {
            const result = await axios.post(`${configUrl.BASEURL}/api/v1/setCommittee`, committeeInfo);
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

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 2019 }, (_, index) => 2020 + index);

    if (loading) {
        return <div className="text-center text-xl"><span className="loading loading-spinner loading-lg text-info "></span></div>
    }
    return (
        <div className="bg-slate-200 rounded-xl py-5 mx-auto px-2 text-center min-h-screen" style={{ width: "60vw" }}>
            <h1 className="text-blue-500 text-3xl">Committee Entry Form</h1>
            {
                errorMessage?.errorMessage && <p className="text-red-500 text-center my-2">{errorMessage?.errorMessage}</p>
            }
            {
                batchFind == 1 ? <>
                    <form onSubmit={handleSubmit} className="my-5">
                        <input required name="batch" type="number" placeholder="Enter batch" className="input input-bordered input-info w-full max-w-lg my-1" /><br />
                        <input name="mobile" type="text" placeholder="Enter mobile" className="input input-bordered input-info w-full max-w-lg my-1" /><br />
                        <input type="submit" value="Submit" className="btn btn-outline w-full max-w-lg my-1"></input>
                    </form>
                </> : batchFind == 2 ? <>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Serial No.</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>BCS Batch</th>
                                    <th>Mobile Number</th>
                                    <th>Current Designation</th>
                                    <th>Present WorkPlace</th>
                                    <th>COMMITTEE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    batch?.map((batchInfo, index) =>
                                        <tr key={index}>
                                            <th>
                                                <h1>{++index}</h1>
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={`data:image/jpeg;base64,${batchInfo?.pic}`} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    {/* <div>
                                                        <div className="font-bold">Hart Hagerty</div>
                                                        <div className="text-sm opacity-50">United States</div>
                                                    </div> */}
                                                </div>
                                            </td>
                                            <td>
                                                {batchInfo?.employeenameinenglish}
                                                <br />
                                                <span className="badge badge-ghost badge-sm">{batchInfo?.employeename}</span>
                                            </td>
                                            <td>{batchInfo?.cadre}</td>
                                            <td>{batchInfo?.mobilephone}</td>
                                            {
                                                batchInfo?.current_designation ? <><td>{batchInfo?.current_designation}</td></> : <td>NA</td>
                                            }
                                            <td>{batchInfo?.present_workplace}</td>
                                            <th>
                                                <button onClick={() => {
                                                    setBatchFind(3)
                                                    setCommitteeMember(batchInfo)
                                                }} className="btn btn-ghost btn-xs">Add Committee</button>
                                            </th>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </> : <>
                    <form onSubmit={handleSubmitEntryCommittee} className="my-5">
                        <input disabled defaultValue={committeeMember?.employeename} name="name" type="text" placeholder="Enter name" className="input input-bordered input-info w-full max-w-lg my-1" /><br />
                        <input disabled defaultValue={committeeMember?.employeecode} name="PIMS_ID" type="text" placeholder="Enter BPSA ID" className="input input-bordered input-info w-full max-w-lg my-1" /><br />
                        <input disabled defaultValue={committeeMember?.mobilephone} name="PIMS_ID" type="number" placeholder="Enter mobile no" className="input input-bordered input-info w-full max-w-lg my-1" /><br />
                        {
                            errorMessage?.photo && <p className="text-red-500 text-center">member photo is required</p>
                        }
                        <div className="grid grid-cols-1">
                            <div className="flex justify-center items-center my-1">
                                {
                                    photo && <img src={photo && URL.createObjectURL(photo)} alt="no preview" className="rounded-full h-20 w-20 " />
                                }
                            </div>
                            <div className="flex justify-center my-1">
                                <input onChange={(e) => setPhoto(e.target.files[0])} name="photo" type="file" placeholder="Enter photo " className="input input-bordered input-info w-full max-w-lg my-1" />
                            </div>
                        </div>
                        {
                            errorMessage.designation && <p className="text-red-500 text-center">Committee designation is required</p>
                        }
                        <select name="BPSA_Designation_id" id="BPSA_Designation_id" className="select select-info w-full max-w-lg my-1" required>
                            <option disabled selected>Select BPSA Designation Id</option>
                            {
                                designation?.map(designationId => <>
                                    <option value={designationId?.id}>{designationId?.id}</option>
                                </>)
                            }
                        </select><br />
                        {
                            errorMessage?.group && <p className="text-red-500 text-center">Committee Group is required</p>
                        }
                        <select name="comm_group_slug" id="comm_group_slug" className="select select-info w-full max-w-lg my-1" required>
                            <option disabled selected>Select committee Group Slug</option>
                            {
                                committeeDesignation?.map(designationId => <>
                                    <option value={designationId?.name}>{designationId?.name}</option>
                                </>)
                            }
                        </select><br />
                        {
                            errorMessage?.year && <p className="text-red-500 text-center">Committee year is required</p>
                        }
                        <select name="Association_Year" id="Association_Year" className="select select-info w-full max-w-lg my-1" required>
                            {/* <option disabled defaultValue>Select committee Year</option> */}
                            <option disabled selected>Select committee Year</option>
                            {years.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select><br />
                        {
                            errorMessage?.serial_no && <p className="text-red-500 text-center">Committee serial is required</p>
                        }
                        <input name="serial_no" id="serial_no" type="number" placeholder="Enter serial number" className="input input-bordered input-info w-full max-w-lg my-1" /><br />
                        <input type="submit" value="Submit" className="btn btn-outline w-full max-w-lg my-1"></input>
                    </form>
                </>
            }
        </div>
    );
};

export default CommitteeEntry;