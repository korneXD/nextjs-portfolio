import Link from "next/link";
import Github from "../svg/github";
import Image from "next/image";

export default function MainPage() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center gap-4 bg-black px-4">
      <Image
        src={"/memoji.avif"}
        width={200}
        height={200}
        alt="Memoji"
        draggable={false}
        className="select-none border-b border-cyan-950"
      />
      <p className="font-cubano text-2xl text-cyan-600">Halmosi Kornél</p>
      <p className="text-center font-nohemiLight text-2xl tracking-wide text-white">
        <span className="italic">
          2 éve foglalkozom weboldal készítéssel, <br />
          illetve kisebb Full-Stack weboldalak készítésével.
        </span>
        <br />
        <span className="font-cubano">
          <span className="text-cyan-600">Focus:</span>
          <span className="text-white">
            &nbsp;React {"("}Next.js
            {")"}
          </span>
        </span>
      </p>
      <div className="flex w-full flex-row items-center justify-center gap-6">
        <Link
          href={"/contact"}
          className="rounded-lg border border-gray-600 bg-cyan-500 px-2 font-cubano text-xl tracking-wide text-black transition-all hover:scale-105"
        >
          Elérhetöségeim
        </Link>
        <div className="flex w-fit items-center justify-center gap-4">
          <Github />
        </div>
      </div>
    </div>
  );
}
