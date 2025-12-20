import { motion } from "framer-motion";
import { Calendar, TrendingUp } from "lucide-react";
import { memo } from "react";

const DevlogSection = memo(() => {
  const milestones = [
    {
      status: "Current",
      progress: 100,
      title: "Prototype Stage",
      description: "8-member team working on core mechanics and gameplay",
      date: "2024 - Present"
    },
    {
      status: "Q1 2026",
      progress: 0,
      title: "Full Production",
      description: "Complete development of all 20 handcrafted levels",
      date: "January - March 2026"
    },
    {
      status: "Q4 2026",
      progress: 0,
      title: "Alpha & Closed Playtest",
      description: "Internal testing and refinement with select players",
      date: "October - December 2026"
    },
    {
      status: "Q1 2027",
      progress: 0,
      title: "Final Launch",
      description: "Official release on Steam and other platforms",
      date: "Early 2027"
    }
  ];

  return (
    <section id="devlog" className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-jungle-charcoal/20 to-background" />
      <div className="absolute inset-0 film-grain opacity-30" />

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Development <span className="text-jungle-emerald">Journey</span>
          </h2>
          <div className="divider-forest mx-auto mb-6 sm:mb-8" />
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow our progress as we bring Kishkindha Kand to life
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="relative mb-12 last:mb-0"
            >
              {/* Connecting Line */}
              {index < milestones.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-full bg-gradient-to-b from-jungle-emerald/50 to-jungle-emerald/10 hidden md:block" />
              )}

              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Timeline Marker */}
                <div className="flex-shrink-0 relative">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border-4 ${
                    milestone.progress === 100
                      ? "bg-jungle-emerald border-jungle-emerald/50"
                      : "bg-jungle-charcoal border-jungle-emerald/30"
                  }`}>
                    {milestone.progress === 100 ? (
                      <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-background" />
                    ) : (
                      <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-jungle-emerald" />
                    )}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-secondary/30 backdrop-blur-sm border border-jungle-emerald/20 rounded-lg p-6 md:p-8 hover:border-jungle-emerald/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                        milestone.progress === 100
                          ? "bg-jungle-emerald/20 text-jungle-emerald"
                          : "bg-jungle-gold/20 text-jungle-gold"
                      }`}>
                        {milestone.status}
                      </span>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                        {milestone.title}
                      </h3>
                    </div>
                    <div className="text-left md:text-right mt-2 md:mt-0">
                      <p className="font-body text-sm text-muted-foreground">
                        {milestone.date}
                      </p>
                    </div>
                  </div>

                  <p className="font-body text-muted-foreground mb-4">
                    {milestone.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="relative h-2 bg-jungle-charcoal rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${milestone.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-jungle-emerald to-jungle-gold"
                    />
                  </div>
                  <p className="text-right font-body text-xs text-muted-foreground mt-1">
                    {milestone.progress}%
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto mt-16 sm:mt-20 bg-jungle-charcoal/50 backdrop-blur-sm border border-jungle-emerald/30 rounded-lg p-6 sm:p-8 md:p-12 text-center"
        >
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Zenith <span className="text-jungle-emerald">Studio LLC</span>
          </h3>
          <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
            A compact, focused, multi-disciplinary team led by a designer moving with a 
            singular vision of making games meaningful and satisfying
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="w-full sm:w-auto bg-secondary/50 border border-jungle-emerald/20 rounded-lg px-4 sm:px-6 py-3">
              <p className="font-display text-jungle-gold text-xs sm:text-sm uppercase tracking-wider">
                Mission
              </p>
              <p className="font-body text-foreground text-sm sm:text-base mt-2">
                Empowering progress through innovation and integrity
              </p>
            </div>
            <div className="w-full sm:w-auto bg-secondary/50 border border-jungle-emerald/20 rounded-lg px-4 sm:px-6 py-3">
              <p className="font-display text-jungle-gold text-xs sm:text-sm uppercase tracking-wider">
                Vision
              </p>
              <p className="font-body text-foreground text-sm sm:text-base mt-2">
                Setting a global benchmark for authentic experiences
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="font-display text-xl md:text-2xl text-jungle-emerald italic max-w-4xl mx-auto">
            "To make gameplay a medium to convey truth and authenticity with fun and engagement."
          </p>
        </motion.div>
      </div>
    </section>
  );
});

DevlogSection.displayName = 'DevlogSection';

export default DevlogSection;
