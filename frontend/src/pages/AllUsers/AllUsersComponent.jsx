import axios from "axios";
import React from 'react'
import configUrl from "../../config/config";


const AllUserComponent =({user})=>{

  const handleOnclick=(id)=>{
    axios.put(`${configUrl.BASEURL}/api/v1/updateUser/${id}`,{
     role:"admin"
    })
    .then(result => {
      alert("user role changed")
      window.location.reload        
     })

  }
    return(
        <body>

  <div class="p-10">
    <div class=" max-w-sm rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <p class="">
        Name : {user.name}
        </p>
        <p class="">
        Email : {user.email}
        </p>
        <p class="">
        Name : {user.mobile}
        </p>
        <p>
          Role: {user.role}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <button onClick={()=>handleOnclick(user._id)}class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Make Admin</button>
      </div>
    </div>
  </div>
</body>
    )
}

export default AllUserComponent
