import axios from "axios";
import React from 'react'

const AllUserComponent =({user})=>{
    return(
        <body>

  <div class="p-10">
    <div class=" max-w-sm rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Mountain</div>
        <p class="">
        Name : {user.name}
        </p>
        <p class="">
        Email : {user.email}
        </p>
        <p class="">
        Name : {user.mobile}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Update</button>
      </div>
    </div>
  </div>

</body>
    )
}

export default AllUserComponent
