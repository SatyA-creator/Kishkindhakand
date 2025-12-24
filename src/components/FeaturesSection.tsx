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
    },
    {
      icon: <Swords className="w-8 h-8" />,
      title: "Tight Combat System",
      description:
        "Weighty melee inspired by Hades and God of War (2018). Master the power of The Mace in intense, strategic battles.",
      color: "text-jungle-gold",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Authentic Canon",
      description:
        "Based on Valmiki's Ramayana—researched, respectful, emotionally true. Experience an authentic mythological journey.",
      color: "text-jungle-emerald",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Action Packed",
      description:
        "Fight 3 main bosses, several sub-bosses, and different enemy types across 20 handcrafted levels of epic combat.",
      color: "text-jungle-gold",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "12 Unique Abilities",
      description:
        "2 active abilities switchable between 12 total - create your own playstyle and master divine powers.",
      color: "text-jungle-emerald",
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Core Mechanics",
      description:
        "JUMP - EVADE - LIGHT ATTACK - HEAVY ATTACK - CHARACTER SHIFT. Fluid controls designed for mastery.",
      color: "text-jungle-gold",
    },
  ];

  return (
    <section id="features" className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* ================= BACKGROUND ================= */}

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/border-1.PNG')" }}
        aria-hidden="true"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-jungle-charcoal/30" />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-jungle-emerald/10 to-transparent" />

      {/* Film grain */}
      <div className="absolute inset-0 film-grain opacity-40" />

      {/* ================= CONTENT ================= */}
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
          <div className="divider-forest mx-auto mb-6" />
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
              className="group relative bg-secondary/30 backdrop-blur-sm border border-jungle-emerald/20 rounded-lg p-4 sm:p-6 hover:border-jungle-emerald/50 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`${feature.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-jungle-emerald/0 via-jungle-emerald/0 to-jungle-gold/0 group-hover:from-jungle-emerald/5 group-hover:to-jungle-gold/5 rounded-lg transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Target Audience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 bg-jungle-charcoal/80 backdrop-blur-sm border border-jungle-emerald/30 rounded-lg p-5 sm:p-6 md:p-8 max-w-4xl mx-auto"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-6">
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
                <p className="font-body text-foreground text-base">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

FeaturesSection.displayName = 'FeaturesSection';

export default FeaturesSection;
