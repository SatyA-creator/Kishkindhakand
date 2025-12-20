import { motion } from "framer-motion";
import { memo } from "react";

const AboutSection = memo(() => {
  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-jungle-charcoal/20 to-background" />
      <div className="absolute inset-0 film-grain opacity-30" />

      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            The <span className="text-jungle-emerald">Vision</span>
          </h2>
          <div className="divider-forest mx-auto mb-6 sm:mb-8" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main About Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-secondary/30 backdrop-blur-sm border border-jungle-emerald/20 rounded-lg p-6 sm:p-8 md:p-12 mb-10 sm:mb-12"
          >
            <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              <span className="text-jungle-gold font-semibold">Vali and Sugriva</span> — brothers, kings, and reflections of each other. 
              Bound by love. Divided by a single moment of fear.
            </p>
            <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              The game lets you live both their stories to see how two versions of truth and misunderstanding 
              can destroy a kingdom.
            </p>
            <p className="font-body text-base sm:text-lg md:text-xl text-jungle-emerald leading-relaxed font-semibold">
              You don't play heroes. You play memory, pride, guilt, and forgiveness.
            </p>
          </motion.div>

          {/* Key Points Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Dual Narrative",
                description: "Play as both brothers. Experience one conflict through two perspectives.",
                icon: "⚔️"
              },
              {
                title: "Epic Combat",
                description: "Tight, weighty melee action inspired by Hades and God of War.",
                icon: "🛡️"
              },
              {
                title: "Authentic Lore",
                description: "Based on Valmiki's Ramayana — researched, respectful, emotionally true.",
                icon: "📜"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-jungle-charcoal/50 backdrop-blur-sm border border-jungle-emerald/20 rounded-lg p-6 hover:border-jungle-emerald/50 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
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
            className="text-center mt-16"
          >
            <p className="font-display text-xl sm:text-2xl md:text-3xl text-jungle-emerald italic px-4">
              "Every myth ends in a war. Ours ends in understanding."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;
