import { Children, createContext, useContext, useState } from "react";

const ExerciseContext = createContext();

export const useExercises = () => useContext(ExerciseContext);

export const ExerciseProvider = ({ children }) => {
  const [exercises] = useState([
    {
      id: 1,
      name: "Bench Press",
      instruction:
        "Bench Press - Lorem ipsum odor amet, consectetuer adipiscing elit. Integer imperdiet rhoncus fusce, phasellus aptent potenti varius. Scelerisque sapien nulla nullam euismod nisi diam erat. At tortor sociosqu pretium mattis morbi eleifend?",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ad arcu quam auctor erat velit ultrices.",
    },
    {
      id: 2,
      name: "Pull-Ups",
      instruction:
        "Pull-Ups - Lorem ipsum odor amet, consectetuer adipiscing elit. Integer imperdiet rhoncus fusce, phasellus aptent potenti varius. Scelerisque sapien nulla nullam euismod nisi diam erat. At tortor sociosqu pretium mattis morbi eleifend?",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ad arcu quam auctor erat velit ultrices.",
    },
    {
      id: 3,
      name: "Bent-Over",
      instruction:
        "Bent-Over - Lorem ipsum odor amet, consectetuer adipiscing elit. Integer imperdiet rhoncus fusce, phasellus aptent potenti varius. Scelerisque sapien nulla nullam euismod nisi diam erat. At tortor sociosqu pretium mattis morbi eleifend?",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ad arcu quam auctor erat velit ultrices.",
    },
    {
      id: 4,
      name: "Bicep Curl",
      instruction:
        "Bicep Curl - Lorem ipsum odor amet, consectetuer adipiscing elit. Integer imperdiet rhoncus fusce, phasellus aptent potenti varius. Scelerisque sapien nulla nullam euismod nisi diam erat. At tortor sociosqu pretium mattis morbi eleifend?",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ad arcu quam auctor erat velit ultrices.",
    },
    {
      id: 5,
      name: "Overhead Press",
      instruction:
        "Overhead Press - Lorem ipsum odor amet, consectetuer adipiscing elit. Integer imperdiet rhoncus fusce, phasellus aptent potenti varius. Scelerisque sapien nulla nullam euismod nisi diam erat. At tortor sociosqu pretium mattis morbi eleifend?",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ad arcu quam auctor erat velit ultrices.",
    },
  ]);

  return (
    <ExerciseContext.Provider value={exercises}>
      {children}
    </ExerciseContext.Provider>
  );
};
