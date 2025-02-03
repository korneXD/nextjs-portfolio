import { links } from "@/app/utils/utils";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center w-full h-fit fixed z-20 top-0 left-0 py-2">
      <div className="flex justify-center bg-white/10 items-center w-[40%] rounded-xl border shadow-md shadow-white/20 border-gray-600 h-fit gap-10 backdrop-blur-md px-4 py-2">
        {links.map((e) => (
          <Link
            key={e.name}
            href={e.path}
            className="text-white basis-1 grow font-cubano text-center text-xl hover:text-green-600 transition-all"
          >
            {e.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
