export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const navigationLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Work" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: "fab fa-github", href: "https://github.com/singhrohit30", name: "GitHub" },
    { icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/iamrohitsingh/", name: "LinkedIn" },
    { icon: "fab fa-twitter", href: "https://x.com/rohitsingh30", name: "Twitter" },
    { icon: "fab fa-hashnode", href: "https://hashnode.com/@iamrohitsingh", name: "Hashnode" },
  ];

  return (
    <footer
      className="py-12 border-t"
      style={{
        background: "hsl(var(--portfolio-primary))",
        borderColor: "hsl(215 28% 17% / 0.5)"
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold portfolio-accent mb-4">Rohit Kumar</h3>
            <p className="portfolio-text-muted max-w-md mx-auto">
              Creating digital experiences that make a difference, one line of code at a time.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {navigationLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="portfolio-text-muted hover:portfolio-accent transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex justify-center space-x-4 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-text-muted hover:portfolio-accent transition-colors"
                title={link.name}
              >
                <i className={`${link.icon} text-xl`}></i>
              </a>
            ))}
          </div>

          <div
            className="border-t pt-8"
            style={{ borderColor: "hsl(215 28% 17% / 0.5)" }}
          >
            <p className="portfolio-text-muted text-sm">
              © 2025 Rohit Kumar. All rights reserved. Built with passion and modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
