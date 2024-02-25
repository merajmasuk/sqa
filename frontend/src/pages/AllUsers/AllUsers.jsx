import axios from "axios";
import React, { useEffect, useState } from "react";
import configUrl from "../../config/config";
import AllUserComponent from './AllUsersComponent'

const AllUser = () =>{
    const [users,setUsers] = useState([])
    useEffect(()=>{
        axios.get(`${configUrl.BASEURL}/api/v1/getAllUsers`)
            .then(result => {
                setUsers(result.data)
              //  console.log(users)
            })
    })
    return(
        <div className="text-white mt-10">
            {
                users.map((user)=>(
                   <AllUserComponent user={user}/>
                ))
            }
            <p>THis is all User</p>
        </div>
    )
}

export default AllUser