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
      <p className="border-b-4 border-indigo-500 mx-auto text-center p-10">
        PopularClasses
      </p>
      <div className="grid grid-cols-3 gap-4 py-5">
        {classes.map((item) => (
          <div key={item.Class_id} className="card w-96 glass">
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
