import { skillCategories } from "@/data/content/home";

function Skills() {
  return (
    <div className="relative">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 relative inline-block">
          My Tech Stack
          <img
            className="sqD top-[-15px] right-[-25px]"
            src="/static/doodles/skills/fillStar.svg"
          />
        </h2>
        <p className="text-fun-gray text-lg">
          Tools and technologies I use to bring ideas to life
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="bg-bg border border-fun-pink-darker rounded-lg p-6 hover:border-fun-pink transition-colors"
          >
            <h3 className="text-fun-pink font-bold text-sm uppercase tracking-wider mb-4 text-center">
              {category.category}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {category.skills.map((skill, skillIndex) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skillIndex}
                    title={skill.title}
                    className="flex flex-col items-center group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-fun-pink-darkest/30 group-hover:bg-fun-pink-darkest/50 transition-colors">
                      <Icon size={28} style={{ color: skill.color }} />
                    </div>
                    <p className="text-xs text-fun-gray font-medium mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
                      {skill.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <img
        className="sqD hidden md:block bottom-[-60px] left-[-50px] lg:left-[50px]"
        src="/static/doodles/skills/laptop.svg"
      />
      <img
        className="sqD hidden lg:block top-[100px] right-[-30px]"
        src="/static/doodles/skills/coding.svg"
      />
    </div>
  );
}

export default Skills;
