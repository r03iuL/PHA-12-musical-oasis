import { useState, useEffect } from "react";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("Instructors.json")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);

  return (
    <div>
      <p className="border-b-4 border-indigo-500 mx-auto text-center mt-10 p-10 text-3xl font-bold">
        | Popular Instructors |
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
        {instructors.map((instructor, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={instructor.Image_link}
                alt={instructor.Name}
                className="rounded-full h-3/4"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{instructor.Name}</h2>
              <p>Students: {instructor.Student_number}</p>
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
