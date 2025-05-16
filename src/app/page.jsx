import Image from "next/image";
import GenerationForm from "@/component/GenerationForm";

export default function Home() {
  return (
      <>
          <section id="hero" className="flex flex-col gap-8">
              <h1 className="leading-snug text-center">
                  Deviens visible sur{" "}
                  <span className="bg-blueOctavia20 text-blueOctavia px-1.5 rounded-md">Linkedin</span>
                  <br/>
                  grâce à l’IA
                  <Image
                      src="/img/ia-logo.svg"
                      alt="Logo IA"
                      width={40}
                      height={40}
                      className="inline-block ml-1 mb-2 align-middle"
                  />
              </h1>
              <p className="font-bold text-3xl text-center">Je suis Octav<span className={"text-blueOctavia"}>IA</span>,
                  ton assistant IA pour Linkedin.</p>
              <p className={"text-3xl font-bold text-center"}>Essaie moi <span className={"text-blueOctavia"}>gratuitement</span> !</p>
              <GenerationForm />
          </section>
      </>
  );
}
