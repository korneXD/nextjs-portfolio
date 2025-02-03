import { projects } from "@/app/utils/utils";
import Link from "next/link";
import Github from "../svg/github";

export default function Project() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="flex justify-center gap-10 px-4 items-center w-full h-screen bg-black flex-row flex-wrap py-16">
      {projects.map((e) => (
        <div
          key={e.name}
          className="flex justify-center items-center w-96
              h-64
              max-h-64"
        >
          <div
            className="
              w-96
              h-64
              flex
              justify-center
              items-end
              p-4
              absolute
              overflow-hidden
              rounded-lg
              z-10
              bg-cover
              bg-no-repeat
              bg-center
              before:content-['']
              before:absolute
              before:inset-0
              before:block
              before:bg-gradient-to-t
              before:from-35%
              before:from-black border border-gray-600
              before:to-black/50
              to-10%
              before:z-[-5]"
            style={{
              backgroundImage:
                'url("https://res.cloudinary.com/simpsonsblog/image/upload/v1736939227/dzhphc3cl42amxonku4u.png")',
            }}
          >
            <div className="flex flex-col gap-2 w-full">
              <p className="h-12 overflow-y-clip text-ellipsis font-cubano text-white text-lg">
                {e.name}
              </p>
              <div className="relative flex justify-center items-center">
                <a
                  href={e.github}
                  target="_blank"
                  className={
                    e.github != ""
                      ? "flex w-fit absolute left-0 bottom-0"
                      : "flex w-fit absolute left-0 bottom-0 pointer-events-none"
                  }
                >
                  <Github />
                </a>
                <Link
                  href={e.path}
                  target="_blank"
                  className={
                    e.path != ""
                      ? "bg-green-600 p-2 rounded-lg w-max mx-auto font-cubano text-black text-xl"
                      : "bg-green-950 p-2 pointer-events-none rounded-lg w-max mx-auto font-cubano text-black text-xl"
                  }
                >
                  Megnyitás
                </Link>
                <p className="absolute right-0 bottom-0 text-white font-cubano">
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
