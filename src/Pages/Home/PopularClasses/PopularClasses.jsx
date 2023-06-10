import { useEffect, useState } from "react";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("Classes.json")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <div>
      <p className="border-b-4 border-indigo-500 mx-auto text-center mt-10 p-10 text-3xl font-bold">
        | Popular Classes |
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
        {classes.map((item) => (
          <div key={item.Class_id} className="card w-full md:w-96 glass">
            <figure>
              <img src={item.Image_link} alt={item.Name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.Name}</h2>
              <p className="text-gray-500">
                Number of Students: {item.Student_number}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
