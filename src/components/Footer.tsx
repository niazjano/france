import Link from "next/link";
import { legalLinks, navLinks } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

const footerLinks = [
  ...navLinks,
  { label: "Faire un don", href: "#don" },
  { label: "Contact", href: "mailto:contact@ecolelibre.org" },
];

export function Footer() {
  return (
    <footer className="section-space bg-primary-dark !pb-12 text-[#F7F4EC] transition-colors duration-500">
      <Container>
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="font-serif text-2xl tracking-tight text-[#F7F4EC]"
            >
              École Libre
            </Link>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-[#F7F4EC]/70">
              Association loi 1901 dédiée à l&apos;accès à l&apos;éducation des
              enfants défavorisés en Afghanistan. Programmes éducatifs, matériel
              scolaire et soutien humanitaire.
            </p>
            <div className="mt-8">
              <Button href="#don" variant="gold" size="sm" showArrow={false}>
                Faire un don
              </Button>
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <SectionLabel className="text-accent">Navigation</SectionLabel>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="link-underline text-sm text-[#F7F4EC]/75 transition-colors duration-500 hover:text-[#F7F4EC]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <SectionLabel className="text-accent">Contact</SectionLabel>
            <ul className="mt-5 space-y-3 text-sm text-[#F7F4EC]/75">
              <li>
                <a
                  href="mailto:contact@ecolelibre.org"
                  className="link-underline transition-colors duration-500 hover:text-[#F7F4EC]"
                >
                  contact@ecolelibre.org
                </a>
              </li>
              <li>Paris, France</li>
            </ul>

            <SectionLabel className="mt-10 text-accent">Légal</SectionLabel>
            <ul className="mt-5 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="link-underline text-sm text-[#F7F4EC]/75 transition-colors duration-500 hover:text-[#F7F4EC]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-[#F7F4EC]/12 pt-8">
          <p className="text-sm text-[#F7F4EC]/55">
            © 2026 École Libre — Association loi 1901
          </p>
        </div>
      </Container>
    </footer>
  );
}
