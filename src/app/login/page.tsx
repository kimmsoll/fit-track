"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <section className="h-screen bg-gray-50 flex flex-col items-center justify-center gap-5">
      <h1 className="whitespace-pre text-center text-lg font-bold">
        {`손쉽게 기록하고\n나의 변화를 한눈에 파악하세요`}
      </h1>
      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Google로 로그인
      </button>
    </section>
  );
}
