import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";


function AllUsers() {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const hendelupdate = user =>{
          fetch(`https://musical-oasis-server.vercel.app/users/admin/${user._id}`,{
            method: 'PATCH'
          })
          .then(res=>res.json())
          .then(data =>{
            console.log(data)
            if(data.modifiedCount){
              refetch();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500
              })
            }
          })

  }

  const hendeldelete = id =>{

  }


  return (
    <div className="w-full ml-10">
      <h3 className="text-3xl font-semibold">Total User: {users.length}</h3>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
       
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{ user.role === 'admin' ? 'admin' :
                                  <button
                                  onClick={() => hendelupdate(user)}
                                  className="btn btn-ghost  bg-orange-400 text-white"
                                >
                                  <FaUserShield></FaUserShield>
                                </button>
                
                      }</td>
                <td>
                  <button
                    onClick={() => hendeldelete(user)}
                    className="btn btn-ghost  bg-red-600 text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllUsers;
