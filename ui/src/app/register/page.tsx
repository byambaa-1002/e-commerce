"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRePassword(event.target.value);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const signUpClick = async () => {
    setError(null);
    setIsSubmitting(true);

    if (!userName || !email || !password || !rePassword) {
      setError("Бүх талбарыг бөглөнө үү.");
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(email)) {
      z.string().email();
      setError("Имэйл хаяг буруу байна.");
      setIsSubmitting(false);
      return;
    }

    if (password !== rePassword) {
      setError("Нууц үг давтахад алдаа гарлаа.");
      setIsSubmitting(false);
      return;
    }

    if (password.length < 8) {
      setError(
        "Нууц үг хамгийн багадаа 8 тэмдэгт байж, үсэг, тоо агуулсан байх ёстой."
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/users", {
        email,
        password,
        userName,
      });
      console.log(response);
      router.push("/login");
    } catch (error) {
      console.log(error);
      setError("Бүртгэл хийхэд алдаа гарлаа.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col justify-center text-center">
      <div className="font-semibold text-base">
        <h1>Бүртгүүлэх</h1>
      </div>
      <div className="flex flex-col w-[334px] mx-auto gap-3 mt-5">
        <input
          className="rounded-2xl text-xs h-[36px] leading-5 border p-3"
          placeholder="Нэр"
          onChange={handleName}
        />
        <input
          className="rounded-2xl text-xs h-[36px] leading-5 border p-3"
          placeholder="Имэйл хаяг"
          onChange={handleEmail}
        />
        <input
          className="rounded-2xl text-xs h-[36px] leading-5 border p-3"
          placeholder="Нууц үг"
          type="password"
          onChange={handlePassword}
        />
        <input
          className="rounded-2xl text-xs h-[36px] leading-5 border p-3"
          placeholder="Нууц үг давтах"
          type="password"
          onChange={handleRePassword}
        />
      </div>

      {error && <div className="text-red-500 text-xs mt-2">{error}</div>}

      <div className="flex flex-col items-start mt-10 gap-1 w-[334px] mx-auto">
        <li className="text-xs text-gray-400 font-normal">
          Том үсэг орсон байх
        </li>
        <li className="text-xs text-gray-400 font-normal">
          Жижиг үсэг орсон байх
        </li>
        <li className="text-xs text-gray-400 font-normal">Тоо орсон байх</li>
        <li className="text-red-500 text-xs font-normal">Тэмдэгт орсон байх</li>
      </div>

      <div>
        <button
          className="bg-blue-600 w-[334px] rounded-2xl mt-5 text-white font-medium text-sm h-[36px]"
          onClick={signUpClick}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Бүртгэж байна..." : "Үүсгэх"}
        </button>
      </div>

      <div>
        <Link href="/login">
          <button className="bg-white w-[334px] h-[36px] rounded-2xl text-blue-500 text-sm font-medium leading-5 border-blue-500 border mt-5">
            Нэвтрэх
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
