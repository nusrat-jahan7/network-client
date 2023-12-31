"use client";
import { AuthContext } from "@/context/AuthProvider";
import { loginSchema } from "@/schema";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const initialValues = {
  email: "nusrat@gmail.com",
  password: "12345678",
};

const Login = () => {
  const router = useRouter();
  const { signIn, setLoading, googleSignIn } = useContext(AuthContext);

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
      const { email, password } = values;
      signIn(email, password)
        .then((result) => {
          console.log(result);
          formik.resetForm();
          router.push("/");
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    },
  });

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  return (
    <div className="py-20">
      <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white font-poppins rounded-lg shadow-lg">
        <div>
          <h1 className="text-center text-blue-500">{"Welcome Back"}</h1>
        </div>

        <h3 className="mt-3 text-4xl font-bold text-blue-500 text-center">
          Login
        </h3>

        <form onSubmit={formik.handleSubmit} className="mt-6">
          <div>
            <label htmlFor="username" className="block text-sm text-gray-800">
              Email
            </label>
            <input
              required
              type="text"
              name="email"
              placeholder="example@gmail.com"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-950 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 disabled:bg-blue-500/50"
            >
              Login
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b lg:w-1/5"></span>

          <a
            href="#"
            className="text-xs text-center text-gray-500 uppercase hover:underline"
          >
            or login with Social Media
          </a>

          <span className="w-1/5 border-b lg:w-1/5"></span>
        </div>

        <div className="flex items-center mt-6 -mx-2">
          <button
            onClick={() => handleGoogleSignIn()}
            type="submit"
            className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-950 focus:bg-blue-700 focus:outline-none"
          >
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
            </svg>

            <span className="hidden mx-2 sm:inline">Sign in with Google</span>
          </button>
        </div>

        <p className="mt-8 text-sm font-light text-center text-gray-400">
          {" "}
          Do not have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-blue-500 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
