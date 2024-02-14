import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import configUrl from "../../config/config";

const EventSponsorEntry = () => {
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
            sponsorName: form.sponsorName.value,
            Logo: form.logo.value,
            detail:form.detail.value,
            contractPersonName:form.contractPersonName.value,
            designation:form.designation.value,
            contractNumber:form.contractNumber.value,
            coverPhoto:form.coverPhoto.value,
            email:form.email.value,
            website:form.website.value,
        }
        try {
            let coverImageFormData = new FormData();
            coverImageFormData.append('image', form.coverPhoto.files[0]);
            let coverImageResponse = await fetch('https://api.imgbb.com/1/upload?key=01d3eafd9fb565419fba52e1e14a7d5a', {
                method: 'POST',
                body: coverImageFormData,
            });
            let coverImageData = await coverImageResponse.json();
            eventInfo.coverPhoto = coverImageData.data.display_url;

            coverImageFormData.append('image', form.logo.files[0]);
            coverImageResponse = await fetch('https://api.imgbb.com/1/upload?key=01d3eafd9fb565419fba52e1e14a7d5a', {
                method: 'POST',
                body: coverImageFormData,
            });
            coverImageData = await coverImageResponse.json();
            eventInfo.Logo = coverImageData.data.display_url;
            // console.log(eventInfo)
            await axios.post(`${configUrl.BASEURL}/api/v1/setSponsor`, eventInfo)
                .then(result => {
                    // console.log(result);
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
        <div className="bg-slate-200 rounded-xl py-5 mx-auto px-2" style={{ width: "60vw" }}>
            <h1 className="text-blue-500 text-3xl text-center">Sponsor Entry Form</h1>
            {
                errorMessage?.errorMessage && <p className="text-red-500 text-center my-2">{errorMessage?.errorMessage}</p>
            }
            <form onSubmit={handleFormSubmit} className="my-5">
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter  Sponsor Name: </span>
                    </div>
                    <input name="sponsorName" required type="text" placeholder="Sponsor Name" className="input input-bordered w-full max-w-lg" />
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
                        <span className="label-text">Enter Cover Image: </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <input onChange={(e) => setCoverImage(e.target.files[0])} name="coverPhoto" required type="file" placeholder="Event cover image" className="input input-bordered w-full max-w-lg" />
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
                        <span className="label-text">Enter sponsor detail: </span>
                    </div>
                    <textarea  name="detail" required type="text" placeholder="sponsor detail" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter Contract Person Name: </span>
                    </div>
                    <input name="contractPersonName" required type="text" placeholder=" contract person name" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter Designation: </span>
                    </div>
                    <input name="designation" required type="text" placeholder="designation" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter Contract Person Number: </span>
                    </div>
                    <input name="contractNumber" required type="number" placeholder="sponsor contract person number" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter sponsor email: </span>
                    </div>
                    <input name="email" required type="email" placeholder="sponsor email" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter sponsor website: </span>
                    </div>
                    <input name="website"  type="text" placeholder="sponsor website" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-2">
                    <input type="submit" value="SUBMIT" className="btn btn-outline w-full max-w-lg my-1"></input>
                </label>
            </form>
        </div>
    );
};

export default EventSponsorEntry;

