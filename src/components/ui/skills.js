export default function Skills() {
  const skills = [
    { title: "HTML" },
    { title: "CSS" },
    { title: "JavaScript" },
    { title: "React" },
    { title: "Next.JS" },
    { title: "Node.JS" },
    { title: "TailwindCSS" },
    { title: "Firebase" },
  ];
  return (
    <div className="flex h-fit w-full flex-col items-center justify-center bg-black px-4">
      <h1 className="font-cubano text-2xl uppercase text-cyan-600">
        Tapasztalataim
      </h1>
      <div className="flex w-full flex-row flex-wrap items-center justify-center gap-2 py-6 md:w-[40%]">
        {skills.map((e, index) => (
          <div
            key={index}
            className="flex h-fit w-fit items-center justify-center rounded-lg border border-gray-600 bg-cyan-500 px-2"
          >
            <h1 className="font-cubano text-xl uppercase text-black">
              {e.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
