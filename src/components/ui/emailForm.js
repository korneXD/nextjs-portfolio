"use client";

import sendEmail from "@/actions/sendEmail";
import { useState } from "react";
import Image from "next/image";

export default function EmailForm() {
  const [formData, setFormData] = useState({ email: "", message: "" });

  return (
    <>
      <Image src={"/contact.avif"} width={200} height={200} alt="contact" />
      <div className="flex h-fit w-fit flex-col items-center justify-center gap-4 rounded-xl border border-gray-600 px-8 py-8">
        <h1 className="font-cubano text-2xl text-white">
          Küldj nekem üzenetet!
        </h1>
        <form
          onSubmit={() => sendEmail(formData)}
          className="flex w-fit flex-col items-center justify-center gap-8"
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
              className="bg-black px-2 py-1 text-left font-cubano text-xl text-green-600 outline-none"
            />
            <hr className="w-full rounded-xl border border-gray-400" />
          </div>
          <div className="flex flex-col">
            <input
              required
              type="text"
              placeholder="Üzenet"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="bg-black px-2 py-1 text-left font-cubano text-xl text-gray-400 outline-none"
            />
            <hr className="w-full rounded-xl border border-gray-400" />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-cyan-600 px-2 font-cubano text-xl tracking-wide text-black"
          >
            Küldés
          </button>
        </form>
      </div>
    </>
  );
}
