/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-900 text-white fixed w-full z-10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold">
              <Link href="/">Portfolio</Link>
            </h1>
            <nav className="space-x-6">
              <Link href="#accueil" className="hover:text-gray-400">
                Accueil
              </Link>
              <Link href="#competences" className="hover:text-gray-400">
                Compétences
              </Link>
              <Link href="#projets" className="hover:text-gray-400">
                Projets
              </Link>
              <Link href="#contact" className="hover:text-gray-400">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-24 px-8 pb-8">
        {/* Section Introduction */}
        <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center">
          {/* Profile Picture */}
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 mb-8">
            <Image
              src="/image/moi-min.webp" // Mettez le chemin de votre image ici
              alt="Photo de Mathieu"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bonjour, je m'appelle
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold text-blue-500 mb-2">
            Mathieu H.
          </h2>
          <p className="text-2xl md:text-3xl font-light mb-4">
            Je suis développeur web.
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Actuellement en 3ème année de BUT informatique à l'IUT de Lens, en
            alternance chez <span className="text-blue-500">ITEKA</span>.
          </p>
        </section>

        {/* Accueil */}
        <section id="accueil" className="text-center my-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            À propos de moi
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Je m'appelle Mathieu, j'ai 19 ans et suis né à Châlons-en-Champagne,
            dans la Marne (51). Actuellement étudiant en BUT informatique à
            l'IUT de Lens, je suis alternant chez ITEKA, une entreprise
            spécialisée dans le réseau et l'infrastructure informatique. Après
            mon BUT, je souhaite me spécialiser en cybersécurité pour contribuer
            à la protection des données personnelles.
          </p>
        </section>

        {/* Compétences */}
        <section id="competences" className="text-center my-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Compétences</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "SQLite",
              "PostgreSQL",
              "PHP",
              "Python",
              "Java",
              "Next.js",
              "Symfony",
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full shadow-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projets */}
        <section id="projets" className="my-12">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Projets
          </h2>
          {[
            {
              name: "Flatcraft",
              description:
                "Flatcraft est un jeu qui a pour but de recréer le jeu Minecraft en version 2D. Ce jeu est fait en groupe de 4 dans le cadre de notre formation en BUT informatique. Il permet de se balader librement dans différents univers, avec des monstres spécifiques à chaque biome, et propose diverses ressources récoltables.",
              imageSrc: "/image/overworld.webp", // Image de Flatcraft
            },
            {
              name: "Bookshelf",
              description:
                "Bookshelf est un projet réalisé lors du marathon du web 2023, où nous avions 48 heures pour créer un site. En équipe de 9, composée d'étudiants en informatique et en multimédia, nous avons appris à collaborer et partager nos compétences.",
              imageSrc: "/image/pagehistoire.webp", // Image de Bookshelf
            },
            {
              name: "Pokedex",
              description:
                "Ce projet permet de connaitre les informations d'un Pokémon via un appel à une API. On peut voir les points de vie, les attaques, et effectuer des recherches. Ce projet m'a permis de comprendre le fonctionnement des API en Python.",
              imageSrc: "/image/acceuilPokedex-min.webp", // Image de Pokedex
            },
            {
              name: "JO Paris 2024",
              description:
                "Projet en cours utilisant Laravel, un framework PHP, pour comprendre ses fonctionnalités. Ce site, encore en développement, permet d'explorer les possibilités de Laravel, bien qu'il manque encore des fonctionnalités et du style.",
            },
            {
              name: "Ray Tracing",
              description:
                "Ce projet réalisé en équipe de 4 durant le 1er semestre du BUT2 visait à créer une application de Ray Tracing. Ce travail m'a permis de progresser en Java et de renforcer mes compétences de travail en équipe.",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg mb-6 max-w-3xl mx-auto"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {project.description}
              </p>
              {project.imageSrc && (
                <div className="w-full h-80 relative">
                  <Image
                    src={project.imageSrc}
                    alt={project.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md"
                  />
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="bg-gray-900 text-white py-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <p className="text-lg">
            Contactez-moi à{" "}
            <a href="mailto:mathieu.hns@gmail.com" className="underline">
              mathieu.hns@gmail.com
            </a>
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://twitter.com" className="hover:text-gray-400">
              Twitter
            </a>
            <a href="https://linkedin.com" className="hover:text-gray-400">
              LinkedIn
            </a>
            <a href="https://github.com" className="hover:text-gray-400">
              GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
