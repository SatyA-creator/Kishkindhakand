import { motion } from "framer-motion";
import { memo } from "react";

const AboutSection = memo(() => {
  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      {/* Background */}
       <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img003.PNG')" }}
        aria-hidden="true"
      />
      

      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Section Header */}
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
          <div className="divider-forest mb-4 sm:mb-6" />
        </motion.div>

        <div className="max-w-4xl">
          {/* Main About Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-secondary/30 backdrop-blur-sm border border-jungle-emerald/20 rounded-lg p-5 sm:p-6 md:p-8 mb-8 sm:mb-10"
          >
            <p className="font-body text-white sm:text-lg text-muted-foreground leading-relaxed mb-3 sm:mb-4">
              <span className="text-jungle-gold font-semibold">Vali and Sugriva</span>  brothers, kings, and reflections of each other.
              Bound by love. Divided by a single moment of fear.
            </p>
            <p className="font-body text-white sm:text-lg text-muted-foreground leading-relaxed mb-3 sm:mb-4">
              The game lets you live both their stories to see how two versions of truth and misunderstanding
              can destroy a kingdom.
            </p>
            <p className="font-body text-white sm:text-lg text-jungle-emerald leading-relaxed font-semibold">
              You don't play heroes. You play memory, pride, guilt, and forgiveness.
            </p>
          </motion.div>

          {/* Key Points Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {[
              {
                title: "Dual Narrative",
                description:
                  "Play as both brothers. Experience one conflict through two perspectives.",
                icon: "⚔️",
              },
              {
                title: "Epic Combat",
                description:
                  "Tight, weighty melee action inspired by Hades and God of War.",
                icon: "🛡️",
              },
              {
                title: "Authentic Lore",
                description:
                  "Based on Valmiki's Ramayana  researched, respectful, emotionally true.",
                icon: "📜",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-jungle-charcoal/50 backdrop-blur-sm border border-jungle-emerald/20 rounded-lg p-4 sm:p-5 hover:border-jungle-emerald/50 transition-all duration-300 text-left"
              >
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{item.icon}</div>
                <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mission Statement */}
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
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
