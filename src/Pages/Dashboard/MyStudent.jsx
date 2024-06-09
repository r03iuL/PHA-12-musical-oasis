

import { FaTrashAlt } from 'react-icons/fa';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useCart from '../../Hook/useCart';

function MyStudent() {
  const [cart,refetch] = useCart();
  if (!Array.isArray(cart)) {
    // Handle the case where `cart` is not an array
    // You can log an error message or take appropriate action
    console.error("Invalid cart data. Expected an array.");
    return null; // Or return a fallback component, display an error message, etc.
  }
  
  const hendeldelete=item =>{
    console.log(item._id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`https://musical-oasis-server.vercel.app/carts/${item._id}`,{
          method:"DELETE"
        })
        .then(res=>res.json())
        .then(data =>{
          if(data.deletedCount >0){
            refetch();
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
        
      }
    })
  }
  console.log(cart);
  
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div className="w-full ml-28">
      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
        <h3 >total registration : {cart.length}</h3>
        <h3 >total Amount: ${total}</h3>
        <Link to="/Dashboard/payment"><button className="btn btn-warning btn-sm">PAY</button></Link>
        
      </div>

      <div className="overflow-x-auto">
        <table className="table">
  
          <thead>
            <tr>
              <th>
              #
              </th>
              <th>Image</th>
              <th>Sports Name</th>
              <th>Price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
        {
          cart.map((item,index) => <tr key={item._id}>
            <td >
              <label>
                {index+1}
              </label>
            </td>
            <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={item.image}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                
              </div>
            </td>
            <td>
              {item.activity}
            </td>
            <td >${item.price}</td>
            <td>
              <button onClick={()=>hendeldelete(item)} className="btn btn-ghost  bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
            </td>
          </tr> )
        }
           
          </tbody>
         
        </table>
      </div>
    </div>
  );
}

export default MyStudent;
