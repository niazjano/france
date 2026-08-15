import Link from "next/link";
import { navLinks } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const footerLinks = [
  ...navLinks,
  { label: "Faire un don", href: "#don" },
  { label: "Contact", href: "mailto:contact@ecolelibre.org" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="section-space !pb-12">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Link href="/" className="font-serif text-2xl tracking-tight text-text">
              École Libre
            </Link>
            <p className="body-text mt-5 max-w-sm">
              Association loi 1901 dédiée à l&apos;accès à l&apos;éducation des
              enfants défavorisés en Afghanistan. Programmes éducatifs, matériel
              scolaire et soutien humanitaire.
            </p>
            <div className="mt-8">
              <Button href="#don" variant="primary" size="sm" showArrow={false}>
                Faire un don
              </Button>
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Navigation
            </p>
            <ul className="mt-5 space-y-3">
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
            <ul className="mt-5 space-y-3 text-sm text-text/80">
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

        <div className="surface-divider mt-16 pt-8">
          <p className="text-sm text-muted">
            © 2026 École Libre — Association loi 1901
          </p>
        </div>
      </Container>
    </footer>
  );
}
