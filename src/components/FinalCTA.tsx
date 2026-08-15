import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FinalCTA() {
  return (
    <Section variant="primary">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <SectionLabel>Un petit geste</SectionLabel>
            <h2 className="editorial-heading mt-5 font-serif text-[#F7F4EC]">
              Un avenir différent.
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-[#F7F4EC]/75 md:text-lg">
              L&apos;éducation commence avec une porte ouverte. Votre soutien
              peut la maintenir entrouverte pour un enfant de plus.
            </p>
            <div className="mt-12 flex justify-center">
              <Button href="#don" variant="gold">
                Faire un don
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
