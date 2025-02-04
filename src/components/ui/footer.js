import { links } from "@/app/utils/utils";
import Link from "next/link";
import Github from "../svg/github";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="flex h-fit w-full flex-col items-center justify-center gap-2 border-t border-gray-400 bg-black px-4 py-4">
      <p className="text-md font-cubano uppercase text-gray-400">Linkek:</p>
      <div className="items-cente flex flex-row justify-center gap-8">
        {links.map((e) => (
          <Link
            key={e.name}
            href={e.path}
            className="font-cubano text-lg uppercase text-white transition-all hover:text-cyan-500"
          >
            {e.name}
          </Link>
        ))}
      </div>
      <p className="font-cubano text-gray-400">{year}</p>
      <Link href={"https://github.com/korneXD"} target="_blank">
        <Github />
      </Link>
    </div>
  );
}
