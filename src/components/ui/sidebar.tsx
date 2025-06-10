import React, { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";

export const Sidebar = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string) => {
    if (!email.includes("@") || !email.includes(".")) {
      return "Please enter a valid email";
    }
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateEmail(email);
    if (error) {
      setEmailError(error);
    } else {
      setEmailError("");
      window.location.href = "https://app.loch.one/welcome";
    }
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`lg:fixed lg:right-0 lg:bottom-0 lg:h-[100vh] lg:w-full lg:max-w-[40rem] bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-2xl drop-shadow-2xl`}
      >
        <div className="flex flex-col justify-center items-center h-full px-8 py-12 lg:py-0">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[340px] mx-auto flex flex-col items-center gap-6"
          >
            <div className="w-full text-left mt-8 mb-4">
              <h3 className="text-[#B0B1B3] font-medium text-[39px] mb-2">
                Sign up for exclusive access.
              </h3>
            </div>
            <Input
              id="email"
              placeholder="Your email address"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(""); // Clear error on change
              }}
              className="w-full px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all text-base h-[59px] placeholder-[#CACBCC] placeholder:font-medium placeholder:text-base placeholder:leading-[1.2]"
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            <Button
              type="submit"
              className="w-full bg-black hover:bg-gray-900 text-white h-[59px] rounded-lg font-semibold text-base transition-all duration-200"
            >
              Get started
            </Button>
            <div className="w-[360px] text-center mt-2">
              <p className="text-[#19191A] font-semibold text-base leading-[1.2]">
                You'll receive an email with an invite link to join.
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
