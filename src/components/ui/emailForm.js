"use client";

import sendEmail from "@/actions/sendEmail";
import { useState } from "react";

export default function EmailForm() {
  const [formData, setFormData] = useState({ email: "", message: "" });

  return (
    <div className="flex justify-center items-center w-full h-fit flex-col gap-4 py-8">
      <h1 className="text-white text-2xl font-cubano">Küldj nekem üzenetet!</h1>
      <form
        onSubmit={() => sendEmail(formData)}
        className="flex justify-center items-center w-fit flex-col gap-8"
      >
        <div className="flex flex-col">
          <input
            required
            value={formData.email}
            type="text"
            placeholder="Email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="text-left bg-black px-2 py-1 text-xl font-cubano outline-none text-green-600"
          />
          <hr className="border w-full rounded-xl border-gray-400" />
        </div>
        <div className="flex flex-col">
          <input
            required
            type="text"
            placeholder="Üzenet"
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="text-left bg-black px-2 py-1 text-xl font-cubano outline-none text-gray-400"
          />
          <hr className="border w-full rounded-xl border-gray-400" />
        </div>
        <button
          type="submit"
          className="text-white tracking-wide text-xl font-cubano bg-green-600 px-2 rounded-lg"
        >
          Küldés
        </button>
      </form>
    </div>
  );
}
