"use client";

import EmailForm from "@/components/ui/emailForm";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center w-full h-screen bg-black flex-col gap-4">
        <EmailForm />
      </div>
      <Footer />
    </>
  );
}
