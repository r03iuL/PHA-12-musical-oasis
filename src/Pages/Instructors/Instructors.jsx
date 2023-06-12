import { useEffect, useState } from "react";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("Instructors.json")
      .then((response) => response.json())
      .then((data) => setInstructors(data));
  }, []);

  const openModal = (instructor) => {
    setSelectedInstructor(instructor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedInstructor(null);
    setIsModalOpen(false);
  };

  const handleModalChange = (event) => {
    if (!event.target.checked) {
      closeModal();
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 text-white">
      {instructors.map((instructor) => (
        <div
          key={instructor.Instructor_id}
          className="card lg:card-side bg-base-100 shadow-xl p-5"
        >
          <figure>
            <img
              src={instructor.Image_link}
              alt={instructor.Name}
              className="h-64 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold uppercase">
              {instructor.Name}
            </h2>
            <p className="text-xl font-semibold">Email: {instructor.Email}</p>

            <div className="card-actions">
              <button
                className="btn bg-indigo-500 px-5 text-white text-lg"
                onClick={() => openModal(instructor)}
              >
                Show Details
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* The modal */}
      <input
        type="checkbox"
        id="my_modal_7"
        className="modal-toggle"
        checked={isModalOpen}
        onChange={handleModalChange}
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

export default Instructors;
