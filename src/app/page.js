import Image from "next/image";

export default function Home() {
  return (
      <>
          <header>
              <nav className="py-5 px-10 flex justify-between items-center text-lg">
                  <div className="text-4xl font-extrabold">OCTAV<span className={"text-blueOctavia"}>IA</span></div>
                  <div className="absolute left-[50%] translate-x-[-50%] font-bold text-xl">Version Beta - 1.0</div>
                  <div className="flex gap-4">
                      <a href="" className="btn-white shadow-hover">Se connecter</a>
                      <a href="" className="btn-blue shadow-hover">Essayer gratuitement</a>
                  </div>
              </nav>
          </header>
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
              <form className="main-cta bottom-border w-[50%] mx-auto flex justify-between mb-16">
                  <input
                      name="actvity"
                      type={"text"}
                      placeholder={"Décris moi ton activité en quelques mots…"}
                      className={"w-full flex flex-col justify-center outline-none"}
                  ></input>
                  <input
                      type={"submit"}
                      value={"Générer"}
                      className={"btn-blue shadow-hover"}
                  ></input>
              </form>
              <div className={"flex justify-center items-center"}>
                  <div className={"font-bold text-xl w-[50%] flex flex-col justify-center items-center"}>
                      <p className={"mb-4 text-3xl"}>Je t'aide à :</p>
                      <ul className={"flex flex-col gap-3"}>
                          <li className={"li-box full-shadow"}>Trouver des idées de posts</li>
                          <li className={"li-box full-shadow"}>Rédiger des posts de engageants</li>
                          <li className={"li-box full-shadow"}>Structurer efficacement</li>
                          <li className={"li-box full-shadow"}>Publier régulièrement en optimisant pour l'algorithme
                              Linkedin
                          </li>
                      </ul>
                  </div>
              </div>
          </section>
      </>
  );
}
