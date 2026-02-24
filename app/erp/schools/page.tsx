"use client";
import { useState } from "react";

export default function Create() {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const vision = formData.get("vision") as string;
    const motto = formData.get("motto") as string;
    const phone = formData.get("phone") as string;

    const request = await fetch("/api/erp/schools", {
      method: "POST",
      body: JSON.stringify({ name, email, phone, vision, motto }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await request.json();

    setMessage(data);

    setName(name);
    setEmail(email);
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md space-y-4"
    >
      <h1>Registration form</h1>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>
      <div>
        <label
          htmlFor="motto"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Motto
        </label>
        <input
          type="motto"
          id="motto"
          name="motto"
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <label
          htmlFor="vision"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Vision
        </label>
        <input
          type="vision"
          id="vision"
          name="vision"
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
      >
        Submit
      </button>

      {submitted && (
        <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-md">
          <h1 className="text-lg font-bold text-green-800">Welcome {name}</h1>
          <h2 className="text-green-700">Your email address is {email}</h2>
        </div>
      )}

      {message ? `${message}` : null}
    </form>
  );
}
