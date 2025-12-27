import { motion } from "framer-motion";
import { memo } from "react";

const AboutSection = memo(() => {
  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      {/* Full-page background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/6.PNG')",
          backgroundAttachment: "scroll",
          backgroundSize: "cover"
        }}
        aria-hidden="true"
      />

      {/* Mobile-friendly overlay */}
      <div className="absolute inset-0 bg-black/30 sm:bg-transparent" aria-hidden="true" />

      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Section Header (centered) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-12 text-left"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 text-center">
            The <span className="text-jungle-emerald">Vision</span>
          </h2>
        </motion.div>

        {/* RIGHT-ALIGNED CONTENT WRAPPER */}
        <div className="flex justify-center sm:justify-end">
          {/* Control max width so ratio matches left layout, but anchored right */}
          <div className="w-full max-w-4xl px-2 sm:px-0">
            {/* Main About Content with background image */}
            {/* Main About Content with background image */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="relative rounded-lg p-4 sm:p-5 md:p-6 mb-8 sm:mb-10 overflow-hidden"
  style={{
    backgroundImage: "url('/895-235.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-black/20 sm:bg-transparent" aria-hidden="true" />
  <div className="relative ml-5 sm:ml-7">
  {/* 14–16px responsive text */}
  <p className="font-body text-white text-sm sm:text-base leading-snug sm:leading-relaxed mb-2 sm:mb-3">
    Vali and Sugriva brothers, kings, and reflections of each other. Bound by love.
    Divided by a single<br /> moment of fear.
  </p>
  <p className="font-body text-white text-sm sm:text-base leading-snug sm:leading-relaxed mb-2 sm:mb-3">
    The game lets you live both their stories to see how two versions of
    truth and misunderstanding can<br /> destroy a kingdom.
  </p>
  <p className="font-body text-white d text-sm sm:text-base leading-snug sm:leading-relaxed font-semibold">
    You don't play heroes. You play memory, pride, guilt, and forgiveness.
  </p>
</div>

</motion.div>


            {/* Key Points Grid aligned to the RIGHT under the plank */}
            <div className="flex justify-end">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
                {[
                  {
                    title: "Dual Narrative",
                    description:
                      "Play as both brothers. Experience one conflict through two perspectives.",
                    icon: "⚔️",
                    image: "/dual-narrative.jpg",
                  },
                  {
                    title: "Epic Combat",
                    description:
                      "Tight, weighty melee action inspired by Hades and God of War.",
                    icon: "🛡️",
                    image: "/epic-combat.jpg",
                  },
                  {
                    title: "Authentic Lore",
                    description:
                      "Based on Valmiki's Ramayana, researched, respectful, emotionally true.",
                    icon: "📜",
                    image: "/authentic-lore.jpg",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="relative rounded-lg p-4 sm:p-5 overflow-hidden cursor-default transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      backgroundImage: `url('/285192.png')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div
                      className="absolute inset-0  transition-colors duration-300"
                      aria-hidden="true"
                    />
                    <div className="relative text-left">
                      <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">
                        {item.icon}
                      </div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="font-body text-white/80 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mission Statement (still full-width in this column) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-10 sm:mt-12 text-left"
            >
              <p className="font-display text-lg sm:text-xl md:text-2xl text-jungle-emerald italic">
                "Every myth ends in a war. Ours ends in understanding."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
