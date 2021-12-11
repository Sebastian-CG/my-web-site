// http://localhost:3000/api/projects

export default function handler(req, res) {
  res.status(200).json([
    {
      id: "1",
      title: "Pokedex",
      description:
        "Pokedex is a project in which you can see your favorite pokémon, search for a pokémon and even filter them according to their type; This application was made with the purpose of practicing technologies like Nextjs, React and JavaScript.",
      buttonLinks: {
        view: "https://pokedex-phi-eight.vercel.app/",
        code: "https://github.dev/Sebastian-CG/pokedex",
        sourceCode: "https://github.com/Sebastian-CG/pokedex",
      },
      url: "https://pokedex-phi-eight.vercel.app/",
    },
    {
      id: "2",
      title: "Company Colaborators Dashboard",
      description:
        "The company employee dashboard is intended to provide centralized data management about each employee of a company, to have a better control of the information.",
      buttonLinks: {
        view: "https://next-proyect-beta.vercel.app/",
        code: "https://github.dev/Sebastian-CG/next-project",
        sourceCode: "https://github.com/Sebastian-CG/next-project",
      },
      url: "https://next-proyect-beta.vercel.app/",
    },
  ]);
}
