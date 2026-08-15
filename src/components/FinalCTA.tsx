import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="bg-background py-28 md:py-36 lg:py-44">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="editorial-heading font-serif text-text">
              Un petit geste.
              <br />
              Un avenir différent.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              L&apos;éducation commence avec une porte ouverte. Votre soutien
              peut la maintenir entrouverte pour un enfant de plus.
            </p>
            <div className="mt-10 flex justify-center">
              <Button href="#don" variant="accent">
                Faire un don
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
