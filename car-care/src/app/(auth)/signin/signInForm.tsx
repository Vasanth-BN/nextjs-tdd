"use client";

import { AUTH_ERROR } from "@/constants/apiError";
import { SIGN_IN_CONST } from "@/constants/appConstants";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";

export type SignInFormProps = {
  error: string;
};

export default function SignInForm({ error }: SignInFormProps) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loginError, setError] = useState("");

  const handlePasswordChange = (password: string) => {
    setPassword(password);
  };
  const handleEmailChange = (email: string) => {
    setEmail(email);
  };
  useEffect(() => {
    setError(error);
  }, [error]);

  const handleSubmit = async () => {
    await signIn("credentials", {
      email: email,
      password: password,
    });
  };
  return (
    <>
      <div className="m-5 flex items-center space-x-2">
        <p className="text-lg font-bold text-black">
          {SIGN_IN_CONST.EMAIL_LABEL}
        </p>
        <input
          placeholder={SIGN_IN_CONST.EMAIL_PLACEHOLDER}
          className="bg-white text-black p-2"
          onChange={(e) => handleEmailChange(e.target.value)}
          value={email}
        />
        <p className="text-lg font-bold text-black">
          {SIGN_IN_CONST.PASSWORD_LABEL}
        </p>
        <input
          placeholder={SIGN_IN_CONST.PASSWORD_PLACEHOLDER}
          className="bg-white text-black p-2"
          onChange={(e) => handlePasswordChange(e.target.value)}
          value={password}
        />
      </div>
      {loginError && (
        <p className="text-red-500">{AUTH_ERROR.INVALID_CREDENTIALS}</p>
      )}
      <button onClick={() => handleSubmit()}>
        {SIGN_IN_CONST.SUBMIT_BUTTON_LABEL}
      </button>
    </>
  );
}
