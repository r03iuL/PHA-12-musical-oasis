import { useState, useEffect } from "react";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/instructor")
      .then((res) => res.json())
      .then((data) => {
        // Sort instructors based on the number of students
        const sortedInstructors = data.sort(
          (a, b) => b.Student_number - a.Student_number
        );
        // Get the top six popular instructors
        const topSixInstructors = sortedInstructors.slice(0, 6);
        setInstructors(topSixInstructors);
      });
  }, []);

  const openModal = (instructor) => {
    setSelectedInstructor(instructor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedInstructor(null);
    setIsModalOpen(false);
  };

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
                <button className="btn btn-primary" onClick={() => openModal(instructor)}>
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* The modal */}
      <input
        type="checkbox"
        id="my_modal_7"
        className="modal-toggle"
        checked={isModalOpen}
        onChange={() => {}}
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Instructor Details</h3>
          {selectedInstructor && (
            <div>
              <p>
                <strong>Name:</strong> {selectedInstructor.Name}
              </p>
              <p>
                <strong>Email:</strong> {selectedInstructor.Email}
              </p>
              <p>
                <strong>Number of Classes:</strong>{" "}
                {selectedInstructor.Taken_classes.length}
              </p>
              <p>
                <strong>Classes Taken:</strong>{" "}
                {selectedInstructor.Taken_classes.join(", ")}
              </p>
            </div>
          )}
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7" onClick={closeModal}>
          Close
        </label>
      </div>
    </div>
  );
};

export default PopularInstructors;
