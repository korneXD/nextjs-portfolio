import { links } from "@/app/utils/utils";
import Link from "next/link";
import Github from "../svg/github";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="flex flex-col bg-black w-full h-fit justify-center gap-2 items-center py-4 px-4 border-t border-gray-400">
      <p className="text-gray-400 uppercase font-cubano text-md">Linkek:</p>
      <div className="flex justify-center items-cente flex-row gap-8">
        {links.map((e) => (
          <Link
            key={e.name}
            href={e.path}
            className="text-white uppercase font-cubano text-lg hover:text-green-600 transition-all"
          >
            {e.name}
          </Link>
        ))}
      </div>
      <p className="text-gray-400 font-cubano">{year}</p>
      <Link href={"https://github.com/korneXD"} target="_blank">
        <Github />
      </Link>
    </div>
  );
}
