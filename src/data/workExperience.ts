import { date } from "astro:schema";

export const workExperience = [
    {
      company: {
        name: "Worksop Riset Informatika (WRI)",
        website: "https://wridev.id/"
      },
      position: "Vice Head of Game Development divisional & Mentor",
      type: "hybrid",
      time: "2025 - Present",
      period: [new Date(2025, 1), null],
      detail: [
        "Support the Head of the Miniclass in planning and managing all activities.",
        "Act as a liaison between the mentoring team and participants to ensure smooth communication.",
        "Design and structure the syllabus, focusing on foundational game development concepts.",
        "Ensure the curriculum aligns with industry trends and participant needs.",
        "Provide hands-on mentoring to participants, offering guidance on technical and creative aspects of game development.",
        "Gather feedback from participants and mentors to improve the miniclass experience.",
    ]
      ,
      technologies: ["C#","Unity"]
    },
    {
      company: {
        name: "Ikatan Keluarga Banyuwangi (IKAWANGI)",
        website: ""
      },
      position: "Human Resource Development",
      type: "hybrid",
      time: "2023 - Present",
      period: [new Date(2023, 7), null],
      detail: [
        "Support the Head of the Miniclass in planning and managing all activities.",
        "Act as a liaison between the mentoring team and participants to ensure smooth communication.",
        "Design and structure the syllabus, focusing on foundational game development concepts.",
        "Ensure the curriculum aligns with industry trends and participant needs.",
        "Provide hands-on mentoring to participants, offering guidance on technical and creative aspects of game development.",
        "Gather feedback from participants and mentors to improve the miniclass experience.",
    ]
      ,
      technologies: ["C#","Unity"]
    },
    
    
  ];
  
  export default workExperience;  