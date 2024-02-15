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
        const courseInfo = {
            email: form.name.value,
            mobile: form.mobile.value,
            name: form.name.value,
            courses: [
                {
                    courseName: form.courseName1.value,
                    courseCode: form.courseCode1.value,
                    totalMark: form.totalMark1.value
                },
                {
                    courseName: form.courseName2.value,
                    courseCode: form.courseCode2.value,
                    totalMark: form.totalMark2.value
                },
                {
                    courseName: form.courseName3.value,
                    courseCode: form.courseCode3.value,
                    totalMark: form.totalMark3.value
                },
            ]
        }

        try {
            await axios.post(`${configUrl.BASEURL}/api/v1/setSubjectCourse`, courseInfo)
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
        <div className="bg-slate-200 rounded-xl py-5 mx-auto px-2" style={{ width: "60vw" }}>
            <h1 className="text-blue-500 text-3xl text-center">Course Mark Entry Form</h1>
            {
                errorMessage?.errorMessage && <p className="text-red-500 text-center my-2">{errorMessage?.errorMessage}</p>
            }
            <form onSubmit={handleFormSubmit} className="my-5">
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter email: </span>
                    </div>
                    <input name="email" required type="email" placeholder="Course email" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter mobile: </span>
                    </div>
                    <input name="mobile" required type="text" placeholder="Enter mobile" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter student name: </span>
                    </div>
                    <input name="name" required type="text" placeholder="Enter name" className="input input-bordered w-full max-w-lg" />
                </label>
                {/* first course entry form */}
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter First Course Name: </span>
                    </div>
                    <input name="courseName1" required type="text" placeholder="Enter First Course" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter First Course code: </span>
                    </div>
                    <input name="courseCode1" required type="text" placeholder="Enter Course Code" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter First Course total mark: </span>
                    </div>
                    <input name="totalMark1" required type="number" placeholder="Enter mark" className="input input-bordered w-full max-w-lg" />
                </label>
                {/* second course entry form */}
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter Second Course Name: </span>
                    </div>
                    <input name="courseName2" required type="text" placeholder="Enter First Course" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter Second Course code: </span>
                    </div>
                    <input name="courseCode2" required type="text" placeholder="Enter Course Code" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter Second Course total mark: </span>
                    </div>
                    <input name="totalMark2" required type="number" placeholder="Enter mark" className="input input-bordered w-full max-w-lg" />
                </label>
                {/* third course entry form */}
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter Third Course Name: </span>
                    </div>
                    <input name="courseName3" required type="text" placeholder="Enter Third Course" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter Third Course code: </span>
                    </div>
                    <input name="courseCode3" required type="text" placeholder="Enter Course Code" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter Third Course total mark: </span>
                    </div>
                    <input name="totalMark3" required type="number" placeholder="Enter mark" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-2">
                    <input type="submit" value="SUBMIT" className="btn btn-outline w-full max-w-lg my-1"></input>
                </label>
            </form>
        </div>
    );
};

export default EventEntry;