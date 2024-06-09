import { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../Hook/useCart";
import { Authcontext } from "../../Providers/Authcontexts";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("https://musical-oasis-server.vercel.app/populer")
      .then((response) => response.json())
      .then((data) => setClasses(data));
  }, []);
  const [, refetch] = useCart();
  const { user } = useContext(Authcontext);
  const navigate = useNavigate();
  
  const handlebutton = ({ item }) => {
    const { _id, Name, Image_link, Available_seats, Price } = item;
   
    if (user && user.email) {
      const list = {
        _id,
        Name,
        Image_link,
        Available_seats,
        Price,
        email: user.email,
      };
      fetch("https://musical-oasis-server.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(list),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            alert("add");
          } else {
            alert("login");
          }
        });
    }

  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 text-white">
      {classes.map((item) => (
        <div
          key={item._id}
          className="card lg:card-side bg-base-100 shadow-xl p-5"
        >
          <figure>
            <img
              src={item.Image_link}
              alt={item.Name}
              className="h-64 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold uppercase">
              {item.Name}
            </h2>
            <p className="text-xl font-semibold">
              Instructor: {item.Instructor_name}
            </p>
            <p className="text-xl font-semibold">
              Available Seats: {item.Available_seats}
            </p>
            <p className="text-xl font-semibold">Price: ${item.Price}</p>
            <div className="card-actions">
              <button
                className="btn bg-indigo-500 px-5 text-white text-lg"
                onClick={() => handlebutton({ item })}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;
