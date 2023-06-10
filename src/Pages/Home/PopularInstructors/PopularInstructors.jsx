import { useState } from "react";
import { useEffect } from "react";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("Instructors.json")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);

  return (
    <div>
     <p className="border-y-4 border-indigo-500 mx-auto text-center p-10 text-3xl font-bold">
        | Popular Instructors |
      </p>
      <div className="py-10 grid grid-cols-3 gap-10">
        {instructors.map((instructors, index) => (
          <div key={index} className="card  bg-base-100 shadow-xl">
            <figure>
              <img
                src={instructors.Image_link}
                alt={instructors.Name}
                className="rounded-full h-3/4"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{instructors.Name}</h2>
              <p>Students:{instructors.Student_number}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
