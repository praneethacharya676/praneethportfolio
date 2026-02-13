import capcutLogo from "../assets/capcut.png"

function Skills() {
  const skills = [
    { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", whiteBg: true },
    { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Microsoft Office", img: "https://img.icons8.com/color/96/microsoft-office-2019.png" },
    {name: "PowerPoint",img: "https://img.icons8.com/color/96/microsoft-powerpoint-2019.png"},
    {name: "Excel",img: "https://img.icons8.com/color/96/microsoft-excel-2019.png"},
    { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Canva", img: "https://img.icons8.com/fluency/96/canva.png" },
    { name: "Photoshop", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
    { name: "CapCut", img: capcutLogo, },

  ]

  return (
    <section id="skills" className="bg-black text-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-cyan-400">
            Skills & Tools
          </h2>
          <div className="w-20 md:w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative bg-[#111] border border-gray-800 
              rounded-2xl p-6 flex flex-col items-center justify-center
              transition duration-300 group
              hover:border-cyan-400 hover:scale-105"
            >

              <div className="absolute inset-0 rounded-2xl 
              opacity-0 group-hover:opacity-100
              transition duration-500
              bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl"></div>

              <div className="relative z-10 flex flex-col items-center">

                <div className={`p-3 rounded-xl ${skill.whiteBg ? "bg-white" : ""}`}>
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-12 h-12 skill-float object-contain"
                  />
                </div>

                <p className="text-sm text-gray-400 group-hover:text-white mt-3 text-center">
                  {skill.name}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Skills
