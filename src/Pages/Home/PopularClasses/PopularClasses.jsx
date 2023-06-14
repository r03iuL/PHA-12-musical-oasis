import { useContext, useEffect, useState } from "react";
import useCart from "../../../Hook/useCart";
import { Authcontext } from "../../../Providers/Authcontexts";
import { useNavigate } from "react-router-dom";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/populer")
      .then((res) => res.json())
      .then((data) => {
      
        const sortedClasses = data.sort(
          (a, b) => b.Student_number - a.Student_number
        );
        const topSixClasses = sortedClasses.slice(0, 6);
        setClasses(topSixClasses);
      });
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
      fetch("http://localhost:5000/carts", {
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
    <div>
      <p className="border-b-4 border-indigo-500 mx-auto text-center mt-10 p-10 text-3xl font-bold">
        | Popular Classes |
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
        {classes.map((item) => (
          <div key={item._id} className="card w-full md:w-96 glass">
            <figure>
              <img src={item.Image_link} alt={item.Name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.Name}</h2>
              <p className="text-gray-500">
                Number of Students: {item.Student_number}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary"onClick={()=>handlebutton({item})} >Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
