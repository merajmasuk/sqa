// import { FaClipboard, FaDollarSign } from "react-icons/fa";

import AreaDashboard from "./Chart/AreaDashboard";
import BarChartDashboard from "./Chart/BarChartDashboard";
import PiChartDashboard from "./Chart/PiChartDashboard";


const Admin = () => {
  const data = [
    { month: "January", expenditure: 1500, earning: 2000 },
    { month: "February", expenditure: 1200, earning: 1800 },
    { month: "March", expenditure: 1800, earning: 2200 },
    { month: "April", expenditure: 1000, earning: 1600 },
    { month: "May", expenditure: 1300, earning: 1900 },
    { month: "June", expenditure: 1700, earning: 2100 },
    { month: "July", expenditure: 2000, earning: 2400 },
    { month: "August", expenditure: 1500, earning: 1900 },
    { month: "September", expenditure: 1600, earning: 2000 },
    { month: "October", expenditure: 1400, earning: 1800 },
    { month: "November", expenditure: 1900, earning: 2300 },
    { month: "December", expenditure: 2200, earning: 2500 },
  ];
  
  return (
    <div className="w-full min-h-screen mt-16 md:mt-20 items-center justify-center text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 gap-x-5 mt-8 gap-y-5">
        <div className="bg-gradient-to-r from-black via-black to-[#F99F24]  py-5 rounded flex flex-col gap-8 p-4">
          <div className="flex mx-1 items-center justify-between">
            <h1>Revenue</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                
              />
            </svg>
          </div>
          <h1 className="text-3xl font-semibold"><span>$</span>628</h1>
        </div>
        <div className="bg-gradient-to-r from-black via-black to-[#F99F24]  py-5 rounded flex flex-col gap-8 p-4">
          <div className="flex mx-1 items-center justify-between">
            <h1>Donation</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-semibold"><span>$</span>628</h1>
        </div>
        <div className="bg-gradient-to-r from-black via-black to-[#F99F24]  py-5 rounded flex flex-col gap-8 p-4">
          <div className="flex mx-1 items-center justify-between">
            <h1>Projects</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-semibold"><span>$</span>628</h1>
        </div>
        <div className="bg-gradient-to-r from-black via-black to-[#F99F24] py-5 rounded flex flex-col gap-8 p-4">
          <div className="flex mx-1 items-center justify-between">
            <h1>Campaigns</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-semibold"><span>$</span>628</h1>
        </div>
      </div>
      <div className="grid md:grid-cols-3 w-full grid-cols-1 md:grid-rows-2 grid-rows-1 grid-flow-row gap-4 mt-10  px-5">
  {/* <!-- First Container --> */}
  <div className=" bg- rounded text-white pr-5 pb-12 pt-0 pl-1 md:col-span-2 h-[35vh] col-span-1 row-span-1">
  <p className="text-2xl font-bold text-white mb-2 mt-2 ml-5 ">Donations</p>
  <BarChartDashboard data={data}/>
   </div> 

  {/* <!-- Second Container --> */}
  <div className="col-span-1 bg-black rounded-bl-full rounded-tl-full  h-[70vh] md:row-span-2 row-span-1">
   {/* <div className="bg-[#125E8A] h-full  py-5 rounded flex flex-col gap-8 p-4">
          <div className="flex mx-1 items-center justify-between">
            <h1>Revenue</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-semibold"><span>$</span>628</h1>
        </div> */}
        <div className="h-full w-full ">
        <PiChartDashboard data={data}/>
        </div>
       
      
  </div>

  {/* <!-- Third Container --> */} 
  <div className="md:col-span-2  pb-14 px-5 rounded col-span-1 h-[33vh]  row-span-1">
  <p className="text-2xl font-bold text-white mb-2 mt-2 ml-5 ">Revenue</p>
   <AreaDashboard data={data}/>
  </div>
</div>

    </div>
  );
};

export default Admin;