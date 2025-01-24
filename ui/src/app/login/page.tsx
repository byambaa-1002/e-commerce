"use client";
import axios from "axios";
import Link from "next/link";
import { SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleEmail = (e: { target: { value: SetStateAction<string> } }) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: { target: { value: SetStateAction<string> } }) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage("Имэйл болон Нууц үг заавал оруулна уу.");
      return;
    }
    try {
      const response = await axios.post(`http://localhost:8000/users/login`, {
        email: email,
        password: password,
      });
      localStorage.setItem("userid", response.data.user.id);
      router.push("/");
    } catch (error) {
      setErrorMessage("Имэйл эсвэл Нууц үг буруу байна.");
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div>
        <h1 className="text-2xl font-semibold mb-6">Нэвтрэх</h1>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <input
            className="rounded-2xl font-normal text-sm p-3 h-[36px] border"
            placeholder="Имэйл хаяг"
            type="email"
            value={email}
            onChange={handleEmail}
            aria-label="Имэйл хаяг"
          />
          <input
            className="rounded-2xl font-normal text-sm p-3 h-[36px] border"
            placeholder="Нууц үг"
            type="password"
            value={password}
            onChange={handlePassword}
            aria-label="Нууц үг"
          />
        </div>
        {errorMessage && (
          <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
        )}
        <div>
          <button
            className="bg-blue-600 w-[334px] rounded-2xl mt-5 text-white font-medium text-sm h-[36px]"
            onClick={handleLogin}
          >
            Нэвтрэх
          </button>
        </div>

        <div>
          <h2 className="text-gray-400 flex justify-center">Нууц үг мартсан</h2>
        </div>
        <div>
          <Link href="/register">
            <button className="bg-white w-[334px] h-[36px] rounded-2xl text-blue-500 text-sm font-medium leading-5 border-blue-500 border mt-5">
              Бүртгүүлэх
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
