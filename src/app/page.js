"use client";
import Github from "@/components/svg/github";
import EmailForm from "@/components/ui/emailForm";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import Skills from "@/components/ui/skills";
import Link from "next/link";
import Project from "@/components/ui/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative flex justify-center items-center w-full h-screen bg-black flex-col gap-4">
        <div className="border-2 border-green-600 rounded-full">
          <img
            src="https://res.cloudinary.com/simpsonsblog/image/upload/v1736939227/dzhphc3cl42amxonku4u.png"
            alt="Kép"
            draggable="false"
            className="rounded-full object-cover grayscale w-32 h-32"
          />
        </div>
        <p className="text-green-600 font-cubano italic text-2xl">
          Halmosi Kornél
        </p>
        <p className="text-white text-center font-nohemiLight text-2xl tracking-wide">
          2 éve foglalkozom weboldal készítéssel, <br />
          illetve kisebb Full-Stack weboldalak készítésével.
          <br />
          <span className="font-cubano">
            <span className="text-green-600">Focus:</span> React {"("}Next.js
            {")"}
          </span>
        </p>
        <div className="flex justify-center items-center w-full flex-row gap-6">
          <Link
            href={"/contact"}
            className="text-white tracking-wide text-xl font-cubano bg-green-600 px-2 rounded-lg"
          >
            Elérhetöségeim
          </Link>
          <div className="flex justify-center items-center w-fit gap-4">
            <Github />
          </div>
        </div>
        <div className="flex h-1/4 absolute bottom-2 rounded-lg border border-green-900"></div>
      </div>
      <Skills />
      <Project />
      <div className="relative flex flex-col justify-center items-center h-screen w-full bg-black">
        <div className="flex h-[30%] absolute top-2 rounded-lg border border-green-900"></div>
        <EmailForm />
      </div>
      <Footer />
    </>
  );
}
