"use client";
import EmailForm from "@/components/ui/emailForm";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import Skills from "@/components/ui/skills";
import Project from "@/components/ui/projects";
import MainPage from "@/components/ui/main";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Halmosi Kornél - Portfólió";
  }, []);
  return (
    <>
      <Navbar />
      <MainPage />
      <Skills />
      <Project />
      <div className="flex h-fit w-full flex-col items-center justify-center bg-black px-8 py-8">
        <EmailForm />
      </div>
      <Footer />
    </>
  );
}
