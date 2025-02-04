"use client";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Project from "@/components/ui/projects";
import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    document.title = "Halmosi Kornél - Projektek";
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center bg-black py-16">
        <Project />
      </div>
      <Footer />
    </>
  );
}
