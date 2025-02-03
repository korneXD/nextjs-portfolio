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
    <div className="flex justify-center items-center w-full h-fit bg-black flex-col">
      <h1 className="text-2xl font-cubano uppercase text-green-600">Skills</h1>
      <div className="w-[40%] flex justify-center items-center flex-row flex-wrap gap-2 py-6">
        {skills.map((e, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-fit h-fit px-2 rounded-lg bg-green-600"
          >
            <h1 className="text-white uppercase font-cubano text-xl">
              {e.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
