import { projects } from "@/app/utils/utils";
import Link from "next/link";
import Github from "../svg/github";

export default function Project() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="flex h-fit w-full flex-row flex-wrap items-center justify-center gap-10 bg-black px-4 py-16">
      {projects.map((e) => (
        <div
          key={e.name}
          className="flex h-64 w-96 items-center justify-center"
        >
          <div
            className="absolute z-10 flex h-64 w-[90%] max-w-96 items-end justify-center overflow-hidden rounded-lg border border-gray-600 to-10% bg-cover bg-center bg-no-repeat p-4 before:absolute before:inset-0 before:z-[-5] before:block before:bg-gradient-to-t before:from-black before:from-35% before:to-black/50 before:content-['']"
            style={{
              backgroundImage:
                'url("https://res.cloudinary.com/simpsonsblog/image/upload/v1736939227/dzhphc3cl42amxonku4u.png")',
            }}
          >
            <div className="flex w-full flex-col gap-2">
              <p className="h-12 overflow-y-clip text-ellipsis font-cubano text-lg text-white">
                {e.name}
              </p>
              <div className="relative flex items-center justify-center">
                <a
                  href={e.github}
                  target="_blank"
                  className={
                    e.github != ""
                      ? "absolute bottom-0 left-0 flex w-fit"
                      : "pointer-events-none absolute bottom-0 left-0 flex w-fit"
                  }
                >
                  <Github />
                </a>
                <Link
                  href={e.path}
                  target="_blank"
                  className={
                    e.path != ""
                      ? "mx-auto w-max rounded-lg bg-cyan-600 p-2 font-cubano text-xl text-black transition-all hover:scale-105"
                      : "pointer-events-none mx-auto w-max rounded-lg bg-cyan-950 p-2 font-cubano text-xl text-black"
                  }
                >
                  Megnyitás
                </Link>
                <p className="absolute bottom-0 right-0 font-cubano text-white">
                  {year}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
