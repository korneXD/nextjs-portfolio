"use client";

import EmailForm from "@/components/ui/emailForm";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Halmosi Kornél - Kontakt";
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex h-screen w-full flex-col items-center justify-center bg-black">
        <EmailForm />
      </div>
      <Footer />
    </>
  );
}
