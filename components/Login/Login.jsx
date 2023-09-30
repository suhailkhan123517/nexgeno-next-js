"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { ImSpinner9 } from "react-icons/im";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const showPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("All fields are necessary");
      return;
    }

    try {
      setLoading(true);
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        toast.error("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="w-full h-screen grid place-items-center bg-[#fffbfd]">
        <div className="w-full max-w-lg relative">
          <div className="bg-white py-8 px-10 shadow-2xl  rounded-3xl">
            <Image
              src="/images/logo.webp"
              alt="logo"
              width={200}
              height={100}
              className="object-contain"
            />
            <h1 className="font-satoshi font-semibold text-xl text-black tracking-wide mt-4">
              Sign in
            </h1>
            <p className="text-lg text-gray-600">to continue to Nexgeno</p>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1 mt-5">
                <label className="text-black font-medium">Email Address</label>
                <input
                  type="email"
                  className="border border-gray-300 py-2 px-4 rounded-md"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1 mt-4">
                <label className="text-black font-medium">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="border border-gray-300 py-2 px-4 rounded-md w-full"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {showPassword ? (
                    <>
                      <AiFillEyeInvisible
                        className="absolute top-[8px]   right-3 text-3xl text-gray-700 cursor-pointer"
                        onClick={showPasswordToggle}
                      />
                    </>
                  ) : (
                    <>
                      <AiFillEye
                        className="absolute top-[8px]  right-3 text-3xl text-gray-700 cursor-pointer"
                        onClick={showPasswordToggle}
                      />
                    </>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="bg-gray-800 hover:bg-black w-full mt-7 p-2 flex items-center justify-center gap-3 rounded-md text-white transition duration-300"
              >
                {loading ? (
                  <>
                    <ImSpinner9 className="animate-spin text-2xl" />
                    Continue...
                  </>
                ) : (
                  "Continue"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
