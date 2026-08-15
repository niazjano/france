import Link from "next/link";
import { navLinks } from "@/lib/content";
import { Container } from "@/components/ui/Container";

const footerLinks = [
  ...navLinks,
  { label: "Faire un don", href: "#don" },
  { label: "Contact", href: "mailto:contact@ecolelibre.org" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-16 md:py-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link href="/" className="font-serif text-2xl tracking-tight text-text">
              École Libre
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Association loi 1901 dédiée à l&apos;accès à l&apos;éducation des
              enfants défavorisés en Afghanistan. Programmes éducatifs, matériel
              scolaire et soutien humanitaire.
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Navigation
            </p>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="link-underline text-sm text-text/80 transition-colors hover:text-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-text/80">
              <li>
                <a
                  href="mailto:contact@ecolelibre.org"
                  className="link-underline hover:text-text"
                >
                  contact@ecolelibre.org
                </a>
              </li>
              <li>Paris, France</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="text-sm text-muted">
            © 2026 École Libre — Association loi 1901
          </p>
        </div>
      </Container>
    </footer>
  );
}
