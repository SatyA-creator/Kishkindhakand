import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative py-12 sm:py-14 md:py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-jungle-charcoal" />
      <div className="absolute inset-0 bg-gradient-to-t from-jungle-charcoal to-background/50" />

      {/* Film Grain */}
      <div className="absolute inset-0 film-grain opacity-50" />

      <div className="relative container mx-auto px-4">
        {/* Divider */}
        <div className="divider-forest mb-12" />

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              <span className="text-jungle-emerald">Kishkindha</span> Kand
            </h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              An isometric narrative-action adventure based on Valmiki's Ramayana. Experience the mythic jungle kingdom through the eyes of two brothers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Features", href: "#features" },
                { name: "Media", href: "#media" }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-muted-foreground text-sm hover:text-jungle-emerald transition-colors duration-300 link-underline inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* More Links */}
          <div>
            <h4 className="font-display text-lg font-bold text-foreground mb-4">
              Community
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Steam", href: "#steam" },
                { name: "Devlog", href: "#devlog" },
                { name: "Join", href: "#join" },
                { name: "Support", href: "#support" }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-muted-foreground text-sm hover:text-jungle-emerald transition-colors duration-300 link-underline inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold text-foreground mb-4">
              Contact
            </h4>
            <div className="space-y-2">
              <p className="font-body text-muted-foreground text-sm">
                <span className="text-jungle-gold">Email:</span> info@zenithstudio.in
              </p>
              
            </div>

            {/* Social Icons Placeholder */}
           
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="divider-forest mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-muted-foreground text-xs">
            © 2024 Zenith Studio LLC. All rights reserved.
          </p>
          <p className="font-display text-jungle-emerald text-xs tracking-wider">
            Made with mythic passion in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
