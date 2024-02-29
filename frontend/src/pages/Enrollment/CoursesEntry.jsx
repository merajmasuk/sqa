import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CoursesEntry = () => {

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
            courseid: form.courseid.value,
            course_Name: form.course_Name.value,
            Instructor_id: form.Instructor_id.value,
            start_date: form.start_date.value,
            end_date: form. end_date.value,
            capacity: form. capacity.value,

            

            

           
        }
        console.log(courseInfo)
        try {
            await axios.post(`${configUrl.BASEURL}/api/v1/setcourses`, courseInfo)
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
            <h1 className="text-blue-500 text-3xl text-center">Courses Entry Form</h1>
            {
                errorMessage?.errorMessage && <p className="text-red-500 text-center my-2">{errorMessage?.errorMessage}</p>
            }
            <form onSubmit={handleFormSubmit} className="my-5">
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter Courses Id: </span>
                    </div>
                    <input name="courseid" required type="text" placeholder="Course id" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter CourseName: </span>
                    </div>
                    <input name="course_Name" required type="text" placeholder="Enter course_Name" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter Instructor Id: </span>
                    </div>
                    <input name="Instructor_id" required type="text" placeholder="Enter Instructor_id" className="input input-bordered w-full max-w-lg" />
                </label>
                {/* first course entry form */}
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter Start Date: </span>
                    </div>
                    <input name="start_date" required type="date" placeholder="Enter  start_date" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter end date: </span>
                    </div>
                    <input name="end_date" required type="date" placeholder="Enter end_date" className="input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control w-full max-w-lg mx-auto my-1">
                    <div className="label">
                        <span className="label-text">Enter Capacity: </span>
                    </div>
                    <input name="capacity" required type="text" placeholder="capacity" className="input input-bordered w-full max-w-lg" />
                </label>
                
                <label className="form-control w-full max-w-lg mx-auto my-2">
                    <input type="submit" value="SUBMIT" className="btn btn-outline w-full max-w-lg my-1"></input>
                </label>
            </form>
        </div>
    );
};


export default CoursesEntry;
