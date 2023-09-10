"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaPaperPlane } from "react-icons/fa";
import clsx from "clsx";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [submissionFeedBack, setSubmissionFeedBack] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (submissionFeedBack !== "") setSubmissionFeedBack("");
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const successMessage = "Email sent. Thanks for contacting me.";

  const handleSubmit = async (event: FormEvent) => {
    setSendingMessage(true);
    event.preventDefault();
    const { email, message } = formData;
    const body = JSON.stringify({ email, message });
    const endPoint = "/message";
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body,
    } as const;
    try {
      const response = await fetch(endPoint, fetchOptions);
      const responseData = await response.json();

      if (!(responseData.message === "sent")) {
        setSubmissionFeedBack(responseData.error);
        setSendingMessage(false);
        return;
      }
      setSubmissionFeedBack(responseData.success);
      setFormData({ email: "", message: "" });
      setSendingMessage(false);
    } catch (e) {
      setSubmissionFeedBack(
        "Something went wrong when sending message. Please try again"
      );
      setSendingMessage(false);
    }
  };

  return (
    <form
      className="mt-10 flex flex-col gap-2 dark:text-black"
      onSubmit={handleSubmit}
    >
      <input
        name="email"
        onChange={handleChange}
        value={formData.email}
        type="email"
        maxLength={500}
        required
        placeholder="Your email"
        className="h-14 rounded-lg px-4 border bg-white dark:bg-opacity-80
        dark:focus:bg-opacity-100 border-black/10 transition-all dark:outline-none
        "
      />
      <textarea
        name="message"
        onChange={handleChange}
        value={formData.message}
        placeholder="Your message"
        required
        className="h-52 px-4 p-2 bg-white dark:bg-opacity-80 dark:outline-none 
        dark:focus:bg-opacity-100 rounded-lg border border-black/10 transition-all"
      />
      <div
        className={clsx(
          `
         text-red-700 mb-2 text-sm my-4 max-w-full text-center`,
          {
            "text-green-700": submissionFeedBack === successMessage,
          }
        )}
      >
        {submissionFeedBack}
      </div>
      <button
        disabled={sendingMessage}
        type="submit"
        className="group dark:bg-white dark:bg-opacity-10 h-[3rem] w-[8rem] self-center flex gap-2 items-center
        bg-gray-900 justify-center text-white rounded-full hover:bg-gray-950
        outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105
        disabled:scale-100 disabled:bg-opacity-70"
      >
        {sendingMessage ? (
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        ) : (
          <>
            Submit{" "}
            <FaPaperPlane
              className="group-hover:translate-x-1 
          group-hover:-translate-y-1 text-xs opacity-70 transition-all"
            />
          </>
        )}
      </button>
    </form>
  );
}
