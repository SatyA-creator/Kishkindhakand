import { motion } from "framer-motion";
import { Calendar, TrendingUp } from "lucide-react";
import { memo } from "react";

const DevlogSection = memo(() => {
  const milestones = [
    {
      status: "Current",
      title: "Prototype Stage",
      description: "8-member team building core mechanics and gameplay systems",
      date: "2024 – Present",
      completed: true,
      bgImage: "/roadmap-card-1.png",
    },
    {
      status: "Q1 2026",
      title: "Full Production",
      description: "Development of all 20 handcrafted levels",
      date: "Jan – Mar 2026",
      bgImage: "/roadmap-card-2.png",
    },
    {
      status: "Q4 2026",
      title: "Alpha & Playtest",
      description: "Internal testing and refinement",
      date: "Oct – Dec 2026",
      bgImage: "/roadmap-card-3.png",
    },
    {
      status: "Q1 2027",
      title: "Final Launch",
      description: "Release on Steam and other platforms",
      date: "Early 2027",
      bgImage: "/roadmap-card-4.png",
    },
  ];

  return (
    <section
      id="devlog"
      className="relative py-12 sm:py-16 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/dev.PNG')",
          backgroundAttachment: "scroll",
          backgroundSize: "cover",
        }}
        aria-hidden="true"
      />

      {/* Optional global overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 sm:bg-black/25" aria-hidden="true" />

      <div className="relative max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Development <span className="text-jungle-emerald">Roadmap</span>
          </h2>

          <p className="font-body text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            A focused journey from prototype to launch
          </p>
        </motion.div>

        {/* Zig-Zag Timeline Line */}
        <div className="relative mb-6">
          <svg
            viewBox="0 0 1000 120"
            preserveAspectRatio="none"
            className="w-full h-20"
          >
            <defs>
              <linearGradient id="zigzagGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#facc15" />
              </linearGradient>
            </defs>

            <motion.path
              d="
                M 0 60
                L 125 20
                L 250 60
                L 375 20
                L 500 60
                L 625 20
                L 750 60
                L 875 20
                L 1000 60
              "
              fill="none"
              stroke="url(#zigzagGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </svg>

          {/* Labels */}
          <div className="absolute inset-0 flex justify-between items-end px-1 text-xs font-display text-jungle-gold">
            <span>Current</span>
            <span>2027</span>
          </div>
        </div>

        {/* Roadmap Grid with image-backed cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {milestones.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative rounded-md overflow-hidden cursor-pointer transition-all hover:scale-[1.02]"
              style={{
                backgroundImage: `url('/236161.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark overlay on each card */}
              <div className="absolute inset-0 transition-colors duration-300" />

              <div className="relative p-4">
                {/* Phase Tag */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display text-xs uppercase tracking-wide text-jungle-gold">
                    {item.status}
                  </span>
                  {item.completed ? (
                    <TrendingUp className="w-4 h-4 text-jungle-emerald" />
                  ) : (
                    <Calendar className="w-4 h-4 text-jungle-emerald" />
                  )}
                </div>

                {/* Title */}
                <h3 className="font-display text-base font-bold text-white mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-body text-xs text-white/85 leading-relaxed mb-3">
                  {item.description}
                </p>

                {/* Date */}
                <p className="font-body text-[11px] text-white/70 text-right">
                  {item.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Studio Block with image background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-14 max-w-3xl mx-auto rounded-md overflow-hidden"
          style={{
            backgroundImage: "url('/768113.png')", // <-- your studio card image
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 " aria-hidden="true" />
          <div className="relative p-6 text-center">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
              Zenith <span className="text-jungle-emerald">Studio LLC</span>
            </h3>
            <p className="font-body text-sm text-white/85">
              A compact, multi-disciplinary team driven by clarity, authenticity,
              and meaningful gameplay experiences.
            </p>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="font-display text-lg italic text-jungle-emerald max-w-3xl mx-auto">
            “Gameplay is our language — authenticity is our promise.”
          </p>
        </motion.div>
      </div>
    </section>
  );
});

DevlogSection.displayName = "DevlogSection";
export default DevlogSection;
