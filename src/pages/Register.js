import { Link, useNavigate } from "react-router-dom";
import logoImage from "../assets/images/lws-logo-light.svg";
import { useEffect, useState } from "react";
import { useRegisterMutation } from "../features/auth/authAPI";
import { data } from "autoprefixer";
import Error from "../components/ui/Error";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmedPass] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [
    register,
    { data, isError, isLoading, isSuccess, error: responseError },
  ] = useRegisterMutation();

  useEffect(() => {
    if (responseError?.data) {
      setError(responseError.data);
    }
    if (data?.accessToken && data?.user) {
      navigate("/inbox");
    }
  }, [data, responseError]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      setError("Password do not match");
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };
  return (
    <div className="grid place-items-center h-screen bg-[#F9FAFB">
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full  space-y-8">
          <div className=" text-center">
            <Link
              className=" text-3xl font-sans bg-gradient-to-r animate-text from-violet-900 via-red-400 to-orange-600 bg-clip-text text-transparent font-bold"
              to="/"
            >
              Jubair's Chat App
            </Link>
            <h2 className="mt-6 text-center text-3xl font-extrabold bg-gradient-to-r animate-text from-blue-900 via-red-400 to-violet-400 bg-clip-text text-transparent">
              Please Create your account
            </h2>
          </div>
          <form onSubmit={handleOnSubmit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <input
                  id="name"
                  name="Name"
                  type="Name"
                  autoComplete="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>

              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmedPass(e.target.value)}
                  type="confirmPassword"
                  autoComplete="current-confirmPassword"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="confirmPassword"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="agree"
                  name="agree"
                  required
                  checked={checkbox}
                  onChange={(e) => setCheckbox(e.target.checked)}
                  type="checkbox"
                  className="h-4 w-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="accept-terms"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Agreed with the terms and condition
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Sign up
              </button>
            </div>
          </form>
          {error !== "" && <Error message={error} />}{" "}
        </div>
      </div>
    </div>
  );
}
