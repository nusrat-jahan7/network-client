import { useFormik } from "formik";
import Link from "next/link";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const formik = useFormik({ initialValues });
  return (
    <div className="py-20">
      <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white font-poppins rounded-lg shadow-lg">
        <div>
          <h1 className="text-lg text-center text-blue-500">
            {"Do'nt Have An Account?"}
          </h1>
        </div>

        <h3 className="mt-3 text-4xl font-bold text-blue-500 text-center">
          Register
        </h3>

        <form className="mt-6">
          <div>
            <label htmlFor="username" className="block text-sm text-gray-800">
              Name
            </label>
            <input
              required
              type="text"
              name="name"
              placeholder="your name"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="username" className="block text-sm text-gray-800">
              Email
            </label>
            <input
              required
              type="text"
              name="email"
              placeholder="example@gmail.com"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm text-gray-800">
                Password
              </label>
            </div>

            <input
              required
              type="password"
              name="password"
              placeholder="•••••••••"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-950 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 disabled:bg-blue-500/50"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-8 text-sm font-light text-center text-gray-400">
          {" "}
          Do you have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-blue-500 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
