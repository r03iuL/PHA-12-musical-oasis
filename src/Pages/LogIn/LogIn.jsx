import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../../Providers/Authcontexts";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const LogIn = () => {
  const { signIn, googleLogIn,setUser } = useContext(Authcontext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const handleGoogle = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire("", "You Have Logged In Successfully!", "success");
        navigate(from, { replace: true });
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        reset(); // Reset the form
        Swal.fire("", "You Have Logged In Successfully!", "success");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
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
                    {...register("email", {
                      required: true,
                    })}
                    type="email"
                    placeholder="Email"
                    className="input input-bordered text-xl"
                  />
                  {errors.email?.type === "required" && (
                    <span className="text-red-500">
                      * This field is required!
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl label-text font-semibold">
                      Password
                    </span>
                  </label>
                  <input
                    {...register("password", {
                      required:true ,
                    })}
                    type="password"
                    placeholder="Password"
                    className="input input-bordered text-xl"
                  />
                  {errors.password?.type === "required" && (
                    <span className="text-red-500">
                      * This field is required!
                    </span>
                  )}
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
                  <input
                    type="submit"
                    className="btn border-2 border-indigo-800 my-4 bg-indigo-500 text-xl text-white"
                    value="Log in"
                  />

                  <button
                    onClick={handleGoogle}
                    className="btn border-2 border-indigo-800 my-4 bg-indigo-500 text-xl  text-white"
                  >
                    Google LogIn
                  </button>

                  <Link
                    to={`/Register`}
                    className="text-xl label-text-alt link link-hover"
                  >
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
