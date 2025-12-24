import { Button } from "./ui/button";
// If logo in /src/assets:
// import Logo from "@/assets/logo-kishkindha.png";

const Footer = () => {
  return (
    <footer className="relative py-10 sm:py-12 md:py-14 bg-jungle-charcoal text-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6 mb-8 sm:mb-10">
          {/* Brand */}
          <div>
            {/* Logo instead of text */}
            <a href="#home" className="inline-flex items-center gap-3 mb-4">
              {/* If using public folder */}
              <img
                src="/logo.png"
                alt="Kishkindha Kand"
                className="h-10 w-auto sm:h-12"
              />
              {/* If you want optional text beside logo, uncomment:
              <span className="font-display text-xl sm:text-2xl font-bold text-foreground">
                <span className="text-jungle-emerald">Kishkindha</span> Kand
              </span>
              */}
            </a>

            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              An isometric narrative-action adventure based on Valmiki&apos;s Ramayana. Experience
              the mythic jungle kingdom through the eyes of two brothers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "About", "Features", "Media"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-body text-muted-foreground text-sm hover:text-jungle-emerald transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-display text-lg font-bold text-foreground mb-4">
              Community
            </h4>
            <ul className="space-y-2">
              {["Steam", "Devlog", "Join", "Support"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-body text-muted-foreground text-sm hover:text-jungle-emerald transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="font-display text-lg font-bold text-foreground mb-4">
              Newsletter
            </h4>
            <p className="font-body text-xs text-muted-foreground mb-2">
              Signup to receive news on events, donations, and new project alerts
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your Email"
                className="flex-1 px-3 py-2 bg-background/50 border border-jungle-emerald/30 rounded text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-jungle-emerald/70"
              />
             <Button
  variant="mythic"
  size="default"
  className="
    relative overflow-hidden
    px-6 py-3 sm:px-8 sm:py-4
    text-sm sm:text-base lg:text-lg
    font-display font-bold tracking-wider
    rounded-xl
    text-amber-100
    bg-[linear-gradient(135deg,#3b1f0e,#5a2e16,#3b1f0e)]
    shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),0_10px_25px_rgba(0,0,0,0.4)]
    border border-amber-700/40
    transition-all duration-300
    hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)]
    active:scale-95
    whitespace-nowrap
  "
>
  {/* Wood grain overlay */}
  <span
    className="absolute inset-0 opacity-30 pointer-events-none"
    style={{
      backgroundImage:
        "repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 2px, transparent 2px, transparent 6px)",
    }}
  />

  {/* Glow on hover */}
  <span className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-amber-300/20 to-amber-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />

  {/* Button text */}
  <span className="relative z-10 text-sm sm:text-base">
    Subscribe
  </span>
</Button>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-jungle-emerald/20 pt-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <p>© 2024 Zenith Studio LLC. All rights reserved.</p>
          <p className="text-jungle-emerald tracking-wider">
            Made with mythic passion in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
