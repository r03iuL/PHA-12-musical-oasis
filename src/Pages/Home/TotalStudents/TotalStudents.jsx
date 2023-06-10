const TotalStudents = () => {
  return (
    <div className="my-10">
      <div className="hero px-5 min-h-screen bg-base-200 rounded-xl border-4 border-indigo-500">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.freepik.com/free-vector/composer-concept-illustration_114360-2844.jpg?w=740&t=st=1686382579~exp=1686383179~hmac=8a1b07ff527d4ba7062c09775d8fb8f2dea0193ddb9e0dcf36ace988ccd134bf"
            className="max-w-sm rounded-lg shadow-2xl w-full lg:max-w-none lg:w-1/2"
          />
          <div className="px-5 lg:w-1/2">
            <h1 className="pb-4 text-5xl font-bold">Hurry UP!!!</h1>
            <p className="pb-5">
              Over <span className="text-3xl font-semibold">1000</span> students have already enrolled in our exclusive Summer
              Music Camp. Secure your spot now and experience the magic of music
              with comprehensive instruction tailored to your aspirations. Our
              expert instructors provide personalized attention and our camp
              offers collaborative activities to enrich your journey. Unlock
              your musical potential today! Elevate your
              skills and embark on an unforgettable summer of harmonious
              learning.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalStudents;
