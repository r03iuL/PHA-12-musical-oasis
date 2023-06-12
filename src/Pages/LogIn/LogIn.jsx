import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../Providers/Authcontexts";

const LogIn = () => {
  const { signIn } = useContext(Authcontext);
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      form.reset();
    })
    .catch((error) => {
      console.log(error);
    });
  }
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex justify-center items-center lg:h-screen">
            <img
              src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=740&t=st=1686398751~exp=1686399351~hmac=bf6b705e3f8683676826593358a1edd034b60d4247afb8ac06373c6421ba0ffa"
              alt=""
              className="h-full"
            />
          </div>
          <div className="card p-12 flex-shrink-0 w-full lg:h-screen flex flex-col justify-center items-center shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="w-full max-w-lg">
              <div className="card-body">
                <div className="form-control">
                  <h1 className="text-center text-4xl mb-5 font-bold">
                    Log In !!
                  </h1>
                  <label className="label">
                    <span className="text-xl label-text font-semibold">
                      Email
                    </span>
                  </label>
                  <input
                    name="email"
                    type="email"
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
                    type="password"
                    placeholder="Password"
                    className="input input-bordered text-xl"
                  />
                  <label className="label">
                    <a
                      href="#"
                      className="text-xl label-text-alt link link-hover"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input type="submit" className="btn border-2 border-indigo-800 my-4 bg-indigo-500 text-xl text-white"
                  value="Login"/>
                    

                  <button className="btn border-2 border-indigo-800 my-4 bg-indigo-500 text-xl  text-white">
                    Google LogIn
                  </button>

                  <Link to={`/Register`} className="text-xl label-text-alt link link-hover">
                    Don&apos;t have an account? SignUp. 
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

export default LogIn;
