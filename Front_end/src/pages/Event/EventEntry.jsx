import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import configUrl from "../../config/config";

const EventEntry = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [coverImage, setCoverImage] = useState("");
    const [logo, setLogo] = useState("");
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const eventInfo = {
            eventName: form.name.value,
            eventCode: 1000,
            eventVenue: form.venue.value,
            startDate: form.startDate.value,
            endDate: form.endDate.value,
            startTime: form.startTime.value,
            endTime: form.endTime.value,
            eventCoverImage: form.coverImage.value,
            eventLogo: form.logo.value,
            eventSlogan: form.slogan.value,
            eventDetails: form.detail.value,
        }
        try {
            let coverImageFormData = new FormData();
            coverImageFormData.append('image', form.coverImage.files[0]);
            let coverImageResponse = await fetch('https://api.imgbb.com/1/upload?key=01d3eafd9fb565419fba52e1e14a7d5a', {
                method: 'POST',
                body: coverImageFormData,
            });
            let coverImageData = await coverImageResponse.json();
            eventInfo.eventCoverImage = coverImageData.data.display_url;

            coverImageFormData.append('image', form.logo.files[0]);
            coverImageResponse = await fetch('https://api.imgbb.com/1/upload?key=01d3eafd9fb565419fba52e1e14a7d5a', {
                method: 'POST',
                body: coverImageFormData,
            });
            coverImageData = await coverImageResponse.json();
            eventInfo.eventLogo = coverImageData.data.display_url;
            await axios.post(`${configUrl.BASEURL}/api/v1/setSponsor`, eventInfo)
                .then(result => {
                    console.log(result);
                    navigate("/");
                })
                .catch(err => {
                    setErrorMessage("Form do not submit unsuccessful");
                })
        } catch (err) {
            setErrorMessage("Form submitted unsuccessfully.")
        }
        setLoading(false);
    }
    if (loading) {
        return <div className="text-center text-xl"><span className="loading loading-spinner loading-lg text-info "></span></div>
    }
    return (
        <div className="bg-slate-200 rounded-xl py-5 mx-auto px-2" style={{width:"60vw"}}>
            <h1 className="text-blue-500 text-3xl text-center">Event Entry Form</h1>
            {
                errorMessage?.errorMessage && <p className="text-red-500 text-center my-2">{errorMessage?.errorMessage}</p>
            }
            <form onSubmit={handleFormSubmit} className="my-5">
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter Event Name: </span>
                    </div>
                    <input name="name" required type="text" placeholder="Event Name" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter Event Venue: </span>
                    </div>
                    <input name="venue" required type="text" placeholder="Event Venue" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter start date: </span>
                    </div>
                    <input name="startDate" required type="date" placeholder="Event start date" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter end date: </span>
                    </div>
                    <input name="endDate" required type="date" placeholder="Event end date" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter start time: </span>
                    </div>
                    <input name="startTime" required type="time" placeholder="Event end time" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter end time: </span>
                    </div>
                    <input name="endTime" required type="time" placeholder="Event end time" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    {/* <div className="label">
                        <span className="label-text">Enter Cover Image: </span>
                    </div>
                    <input onChange={(e) => setCoverImage(e.target.files[0])} name="coverImage" required type="file" placeholder="Event cover image" className="input input-bordered w-full max-w-lg" /> */}

                    <div className="label">
                        <span className="label-text">Enter Cover Image: </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <input onChange={(e) => setCoverImage(e.target.files[0])} name="coverImage" required type="file" placeholder="Event cover image" className="input input-bordered w-full max-w-lg" />
                        </div>
                        <div>
                            {
                                coverImage && <img src={URL.createObjectURL(coverImage)} alt="preview" className="rounded-full h-20 w-20" />
                            }
                        </div>
                    </div>
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter logo Image: </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <input onChange={(e) => setLogo(e.target.files[0])} name="logo" required type="file" placeholder="Event logo image" className="input input-bordered w-full max-w-lg" />
                        </div>
                        <div>
                            {
                                logo && <img src={URL.createObjectURL(logo)} alt="preview" className="rounded-full h-20 w-20" />
                            }
                        </div>
                    </div>
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter Event slogan: </span>
                    </div>
                    <input name="slogan" required type="text" placeholder="Event slogan" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter Event Detail: </span>
                    </div>
                    <input name="detail" required type="text" placeholder="Event detail" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-2">
                    <input type="submit" value="SUBMIT" className="btn btn-outline w-full max-w-lg my-1"></input>
                </label>
            </form>
        </div>
    );
};

export default EventEntry;