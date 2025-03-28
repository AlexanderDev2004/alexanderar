import { date } from "astro:schema";

export const workExperience = [
    {
      company: {
        name: "Worksop Riset Informatika (WRI)",
        website: "https://wridev.id/"
      },
      position: "Vice Head of Game Development divisional & Mentor",
      type: "hybrid",
      time: "contract",
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
        name: "Ikatan Keluarga Banyuwangi-Malang (IKAWANGI)",
        website: ""
      },
      position: "Human Resource Development",
      type: "hybrid",
      time: "contract",
      period: [new Date(2023, 7), null],
      detail: [
        "Human Resource Management – Managing and developing organization members to work effectively and achieve optimal performance.",
        "Training & Development – Organizing training programs, workshops, or mentoring sessions to enhance members' skills and capabilities.",
        "Performance Management & Evaluation – Monitoring members' performance, providing feedback, and evaluating work effectiveness to achieve organizational goals."
        
    ]
      ,
      technologies: ["NONE"]
    },
    
    
  ];
  
  export default workExperience;  