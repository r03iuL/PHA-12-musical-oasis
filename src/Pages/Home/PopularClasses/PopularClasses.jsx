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
      <p>PopularClasses</p>
      <div className="grid grid-cols-3 gap-4">
        {classes.map((item) => (
          <div key={item.Class_id} className="bg-white rounded shadow p-4">
            <h3 className="text-xl font-semibold">{item.Name}</h3>
            <p className="text-gray-500">Class ID: {item.Class_id}</p>
            <p className="text-gray-500">
              Number of Students: {item.Student_number}
            </p>
            <img
              src={item.Image_link}
              alt={item.Name}
              className="mt-4 mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
