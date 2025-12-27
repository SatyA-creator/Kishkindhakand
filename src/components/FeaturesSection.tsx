import { motion } from "framer-motion";
import { Swords, Users, Gamepad2, Shield, Zap, Target } from "lucide-react";
import { memo } from "react";

const FeaturesSection = memo(() => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dual Narrative Play",
      description:
        "One conflict, two perspectives. Experience moral dilemmas through both protagonists' eyes as you alternate between Vali and Sugriva.",
      color: "text-jungle-emerald",
      bgImage: "/feature-card-1.png",
    },
    {
      icon: <Swords className="w-8 h-8" />,
      title: "Tight Combat System",
      description:
        "Weighty melee inspired by Hades and God of War (2018). Master the power of The Mace in intense, strategic battles.",
      color: "text-jungle-gold",
      bgImage: "/feature-card-2.png",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Authentic Canon",
      description:
        "Based on Valmiki's Ramayana—researched, respectful, emotionally true. Experience an authentic mythological journey.",
      color: "text-jungle-emerald",
      bgImage: "/feature-card-3.png",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Action Packed",
      description:
        "Fight 3 main bosses, several sub-bosses, and different enemy types across 20 handcrafted levels of epic combat.",
      color: "text-jungle-gold",
      bgImage: "/feature-card-4.png",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "12 Unique Abilities",
      description:
        "2 active abilities switchable between 12 total - create your own playstyle and master divine powers.",
      color: "text-jungle-emerald",
      bgImage: "/feature-card-5.png",
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Core Mechanics",
      description:
        "JUMP - EVADE - LIGHT ATTACK - HEAVY ATTACK - CHARACTER SHIFT. Fluid controls designed for mastery.",
      color: "text-jungle-gold",
      bgImage: "/feature-card-6.png",
    },
  ];

  return (
    <section
      id="features"
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/border-1.PNG')",
          backgroundAttachment: "scroll",
          backgroundSize: "cover"
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-jungle-charcoal/50 sm:bg-jungle-charcoal/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-jungle-emerald/10 to-transparent" />
      <div className="absolute inset-0 film-grain opacity-40" />

      {/* CONTENT */}
      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Gameplay <span className="text-jungle-emerald">Loop</span>
          </h2>
          <p className="font-display text-lg sm:text-xl md:text-2xl text-jungle-gold mb-4 sm:mb-6">
            Fight. Feel. Reflect.
          </p>
          <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto">
            Isometric narrative-action adventure where players alternate between
            Vali and Sugriva across 20 handcrafted levels.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300"
              style={{
                backgroundImage: `url('/328228.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark overlay for readability */}
              <div className="absolute inset-0  transition-colors duration-300" />

              {/* Content */}
              <div className="relative p-4 sm:p-6">
                <div
                  className={`${feature.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="font-body text-white/85 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-jungle-emerald/0 via-jungle-emerald/0 to-jungle-gold/0 group-hover:from-jungle-emerald/10 group-hover:to-jungle-gold/10 rounded-lg transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Target Audience */}
                {/* Target Audience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mt-12 max-w-4xl mx-auto rounded-lg overflow-hidden"
          style={{
            backgroundImage: "url('/895197.png')", // <-- your image
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 " aria-hidden="true" />

          <div className="relative p-5 sm:p-6 md:p-8">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-center text-white mb-6">
              Target <span className="text-jungle-emerald">Audience</span>
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {[
                { label: "Platform", value: "PC (Unity Engine)" },
                { label: "Age", value: "12+" },
                { label: "Genre Appeal", value: "Indie narrative & mythic action" },
                { label: "Audience", value: "All genders, RPG & action lovers" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="text-center"
                >
                  <p className="font-display text-jungle-gold text-xs uppercase tracking-wider mb-2">
                    {item.label}
                  </p>
                  <p className="font-body text-white text-base">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
});

FeaturesSection.displayName = "FeaturesSection";

export default FeaturesSection;
