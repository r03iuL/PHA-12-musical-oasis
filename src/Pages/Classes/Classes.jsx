import { useEffect, useState } from "react";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("Classes.json")
      .then((response) => response.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 text-white">
      {classes.map((item) => (
        <div
          key={item.Class_id}
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
            <h2 className="card-title text-2xl font-bold uppercase">{item.Name}</h2>
            <p className="text-xl font-semibold">Instructor: {item.Instructor_name}</p>
            <p className="text-xl font-semibold">Available Seats: {item.Available_seats}</p>
            <p className="text-xl font-semibold">Price: ${item.Price}</p>
            <div className="card-actions">
              <button className="btn bg-indigo-500 px-5 text-white text-lg">Buy now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;
