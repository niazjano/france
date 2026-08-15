import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function FinalCTA() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="editorial-heading font-serif text-text">
              Un petit geste.
              <br />
              Un avenir différent.
            </h2>
            <p className="body-text-lg mx-auto mt-8 max-w-xl">
              L&apos;éducation commence avec une porte ouverte. Votre soutien
              peut la maintenir entrouverte pour un enfant de plus.
            </p>
            <div className="mt-12 flex justify-center">
              <Button href="#don" variant="accent">
                Faire un don
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
