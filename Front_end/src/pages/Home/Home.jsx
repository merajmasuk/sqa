import image from "./../../assets/Online-courses.jpg"
const Home = () => {
    return (
        <div className="text-center">
            <h1 className="my-5 font-bold text-3xl">Welcome Online Course Website</h1>
            <img  className="w-full rounded-xl" style={{height:"70vh"}} src={image} alt="" />
        </div>
    );
};

export default Home;