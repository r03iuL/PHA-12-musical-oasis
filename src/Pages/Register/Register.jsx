import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex justify-center items-center lg:h-screen">
            <img
              src="https://img.freepik.com/free-vector/digital-lifestyle-concept-illustration_114360-7327.jpg?w=740&t=st=1686412587~exp=1686413187~hmac=63fd24def51183329743102aa7c4334bc7bf15f6c8ede6def9994ceeac5b8708"
              alt=""
              className="w-full mx-auto h-full"
            />
          </div>
          <div className="card p-12 flex-shrink-0 w-full lg:h-screen flex flex-col justify-center items-center shadow-2xl bg-base-100">
            <form className="w-full">
              <div className="card-body">
                <div className="form-control">
                  <h1 className="text-center text-4xl mb-5 font-bold">
                    Sign Up!!
                  </h1>
                  <label className="label">
                    <span className="text-xl label-text font-semibold">
                      Email
                    </span>
                  </label>
                  <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    className="input input-bordered text-xl"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl label-text font-semibold">
                      Password
                    </span>
                  </label>
                  <input
                    name="password"
                    type="text"
                    placeholder="Password"
                    className="input input-bordered text-xl"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl label-text font-semibold">
                      Confirm Password
                    </span>
                  </label>
                  <input
                    name="conPassword"
                    type="text"
                    placeholder="Confirm Password"
                    className="input input-bordered text-xl"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl label-text font-semibold">
                      Photo Url
                    </span>
                  </label>
                  <input
                    name="photo"
                    type="text"
                    placeholder="Password"
                    className="input input-bordered text-xl"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn border-2 border-indigo-800 my-4 bg-indigo-500 text-xl  text-white">
                    Register
                  </button>
                  <Link to={`/LogIn`} className="text-xl label-text-alt link link-hover" >
                    Already have an account yet? Log In
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
