import { techStack } from "@/data/tech-stack";

export default function TechStack() {
  return (
    <section id="tech-stack" className="w-full py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-400">
            What I use
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            My Tech Stack
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-300 md:text-base">
            These are the technologies and tools I use to build modern web
            applications and continue improving my engineering skills.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {techStack.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <h3 className="mb-5 text-lg font-semibold text-white">
                {group.category}
              </h3>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {group.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.name}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 transition-transform duration-300 hover:-translate-y-1 hover:border-white/20"
                    >
                      <Icon className="h-5 w-5 shrink-0 text-neutral-200" />
                      <span className="text-sm text-neutral-300">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}