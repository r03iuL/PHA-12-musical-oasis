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
      <p className="border-b-4 border-indigo-500 mx-auto text-center p-10">
        Popular Instructors
      </p>
        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
      {instructors.map(instructor => (
        <div key={instructor.Instructor_id} className="carousel-item w-full">
          <img src={instructor.Image_link} alt={instructor.Name} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default PopularInstructors;
