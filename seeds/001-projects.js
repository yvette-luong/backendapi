exports.seed = function (knex) {
  const projects = [
    {
      id: 1,
      project_name: "Astro App - Translate Sign Language ",
      project_founder: "Astrofolic",
      project_description: "What do you write in a Astro project description",
      project_goal: 10000
    },
    {
      id: 2,
      project_name: "Stark App - Healthcare",
      project_founder: "Molasses",
      project_description: "What do you write in  Stark project description",
      project_goal: 20000
    },
    {
      id: 3,
      project_name: "Skyhawks App - Virtual Assistant ",
      project_founder: "Dexstrose",
      project_description: "What do you write in  Skyhawks project description",
      project_goal: 3000
    },
    {
      id: 4,
      project_name: "Project X App - Travel Vision ",
      project_founder: "Iron",
      project_description:
        "What do you write in Project X  project description",
      project_goal: 350000
    },
    {
      id: 5,
      project_name: "Cascade App- Virtual Shopping",
      project_founder: "Benja",
      project_description: "What do you write in Cascade project description ",
      project_goal: 400000
    },
  ];
  return knex("projects").insert(projects);
};
