"use client";
import { links } from "@/app/utils/utils";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed left-0 top-0 z-20 flex h-fit w-full items-center justify-center px-2 py-2">
      <div className="flex h-fit w-full flex-col items-center justify-center rounded-xl border border-gray-600 bg-white/10 px-4 py-2 shadow-md shadow-white/20 backdrop-blur-md lg:w-[40%]">
        <h1 className="hidden text-center font-cubano text-lg text-cyan-500 lg:inline-block">
          Web designer &amp; developer
        </h1>
        <div className="hidden w-full items-center justify-center lg:flex">
          {links.map((e) => (
            <Link
              key={e.name}
              href={e.path}
              className="grow basis-1 text-center font-cubano text-xl text-white transition-all hover:text-cyan-500"
            >
              {e.name}
            </Link>
          ))}
        </div>
        <div className="flex w-full items-center justify-between lg:hidden">
          <div className="flex w-full items-center justify-center">
            <h1 className="inline-block text-center font-cubano text-xl text-cyan-500 lg:hidden">
              Web designer &amp; developer
            </h1>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 cursor-pointer text-white transition-colors hover:text-cyan-500"
            onClick={() => setOpen(!open)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      {open && (
        <div className="absolute left-0 top-0 flex h-screen w-full p-8 backdrop-blur-md">
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-10 rounded-3xl border border-gray-600 bg-black md:flex-row md:gap-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute right-4 top-4 size-6 cursor-pointer text-cyan-500 transition-colors hover:text-white"
              onClick={() => setOpen(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
            <h1 className="inline-block text-center font-cubano text-xl text-cyan-500 lg:hidden">
              Web designer &amp; developer
            </h1>
            {links.map((e) => (
              <Link
                key={e.name}
                href={e.path}
                onClick={() => setOpen(false)}
                className="text-center font-cubano text-xl text-white transition-all hover:text-cyan-500"
              >
                {e.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
