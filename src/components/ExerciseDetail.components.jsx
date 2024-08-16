import { useNavigate, useParams } from "react-router-dom";
import { useExercises } from "./exerciseContext";

const ExerciseDetail = () => {
  const { exerciseId } = useParams();
  const exercises = useExercises();
  const exercise = exercises.find((e) => e.id === parseInt(exerciseId, 10));

  //Back button
  let navigate = useNavigate();

  if (!exercise) return <div>Exercise not found</div>;
  return (
    <div>
      <h2>This is Exercise Detail Components</h2>
      <h2>{exercise.name}</h2>
      <p>
        <strong>Description: </strong>
        {exercise.description}
      </p>
      <p>
        <strong>Instruction: </strong>
        {exercise.instruction}
      </p>
      <button onClick={() => navigate(-1)} className="button-19">
        Back
      </button>
    </div>
  );
};

export default ExerciseDetail;
