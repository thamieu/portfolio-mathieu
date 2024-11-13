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
        {/* Accueil */}
        <section id="accueil" className="text-center my-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            À propos de moi
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Je m'appel Mathieu, j'ai 19 ans et suis né à Châlons-en-Champagne,
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
                "Flatcraft est un jeu qui à pour but de recréer le jeu Minecraft mais en version 2D. Ce jeu est fait en groupe de 4 lors du cadre de notre formation en BUT informatique. Ce jeu permet de se balader librement (openWorld) dans différents univers et avec des monstres différents selon ces biomes, mais aussi différentes ressources récoltables et qu'il est possible de transformer.",
              imageSrc: "/image/overworld.webp", // Image de Flatcraft
            },
            {
              name: "Bookshelf",
              description:
                "Bookshelf est un projet qui a eu lieu lors du marathon du web de l'année 2023. Le but de ce marathon était de faire un site web en 48 heures. Nous étions dans des équipes de 9, composées de 4 personnes du département informatique mais aussi de 5 personnes du département multimédia. Ce fut une expérience très enrichissante car j'ai pu rencontrer de nouvelles personnes. Toutefois, nous avons également eu la possibilité de partager nos connaissances et de communiquer au sein d'une équipe.",
              imageSrc: "/image/pagehistoire.webp", // Image de Bookshelf
            },
            {
              name: "Pokedex",
              description:
                "Ce projet permet de connaitre les informations d'un Pokémon via un appel d'une API. On peut donc voir les points de vie, les attaques et on peut aussi rechercher un Pokémon. Ce projet m'a permis de comprendre comment fonctionne une API et comment faire une requête en Python.",
              imageSrc: "/image/acceuilPokedex-min.webp", // Image de Pokedex
            },
            {
              name: "JO Paris 2024",
              description:
                "Ce projet est en cours de développement, avec pour objectif de nous familiariser avec l'utilisation de Laravel, un framework PHP. Grâce à cela, nous pouvons observer les différentes facettes de ce Framework et comprendre les possibilités qu'il offre. Nous avons donc pu apprendre un nouveau langage avec ses défauts et ses avantages. Cependant, le site n'étant pas fini, il n'y a pas encore toutes les fonctionnalités et le style.",
            },
            {
              name: "Ray Tracing",
              description:
                "Ce projet a été réalisé lors du 1er semestre du BUT2. Le but de ce projet était de réaliser une application qui permettait de faire du Ray tracing. Ce projet a été réalisé en équipe de 4, ce qui m'a permis de m'améliorer en Java et de comprendre l'organisation au sein d'une équipe de développement.",
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
                  {" "}
                  {/* Ajustez la taille de l'image ici */}
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
