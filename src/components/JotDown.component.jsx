import { useState } from "react";
import "./JotDown.css";

export default function Logger({ weightValue, onWeightChange }) {
  const [typeValue, setTypeValue] = useState("");
  const [exerciseValue, setExerciseValue] = useState("");
  const [repValue, setRepValue] = useState(0);
  const [sepValue, setSepValue] = useState(0);
  // const [weightValue, setWeightValue] = useState(0);

  const handleTypeChange = (event) => {
    setTypeValue(event.target.value);
    setExerciseValue(""); //Reset when different type
  };
  const handleExerciseChange = (event) => {
    setExerciseValue(event.target.value);
    console.log(
      `Type selected: ${typeValue} and selected exercise is ${event.target.value}`
    );
  };

  // const handleWeightChange = (event) => {
  //   setWeightValue(event.target.value);
  // };

  const exerciseOptions = {
    "Upper Body": [
      "Bicep",
      "Tricep",
      "Shoulder",
      "Chest Press",
      "Bench Press",
      "Pull-Up",
      "Push-Up",
      "Lat Pulldown",
      "Bent-Over Row",
      "Overhead Tricep Extension",
      "Incline Bench Press",
      "Dumbbell Fly",
      "Arnold Press",
      "Front Raise",
      "Lateral Raise",
      "Hammer Curl",
      "Skull Crusher",
    ],
    "Lower Body": [
      "Squat",
      "Leg Press",
      "Lunge",
      "Deadlift",
      "Leg Curl",
      "Leg Extension",
      "Calf Raise",
      "Glute",
      "Glute Bridge",
      "Step-Up",
      "Bulgarian Split Squat",
      "Hip Thrust",
      "Sumo Squat",
      "Hack Squat",
      "Box Jump",
      "Romanian Deadlift",
    ],
    "Cardio Exercise": [
      "Running",
      "Cycling",
      "Rope Jump",
      "Rowing",
      "Swimming",
      "Elliptical",
      "Stair Climber",
      "HIIT Spritns",
      "Jumping Jacks",
      "Burpees",
      "Mountain Climbers",
      "Boxing",
      "Shadowboxing",
      "Speed Skaters",
      "High Knees",
    ],
    "Full Body": [
      "Burpee",
      "Deadlift",
      "Clean and Press",
      "Clean and Press",
      "Kettlebell Swing",
      "Thruster",
      "Turkish Get-Up",
      "Medicine Ball Slam",
      "Battle Ropes",
      "Man Maker",
      "Snatch",
      "Farmer's Walk",
      "Power Clean",
      "Sled Push/Pull",
      "Wall Ball",
    ],
  };

  const filteredExercises = exerciseOptions[typeValue] || [];

  const handleIncreaseRep = () => {
    setRepValue(repValue + 1);
    if (repValue > 20) setRepValue(0);
  };

  const handleDecreaseRep = () => {
    if (repValue > 1) setRepValue(repValue - 1);
  };

  const handleIncreaseSet = () => {
    setSepValue(sepValue + 1);
    if (sepValue > 9) setSepValue(0);
  };

  const handleDecreaseSet = () => {
    if (sepValue > 1) setSepValue(sepValue - 1);
  };

  return (
    <div className="App">
      <div className="jot-down-title">
        <h2>Jot Down Your Workout</h2>
        <span>Type: </span>
        <select value={typeValue} onChange={handleTypeChange}>
          <option value="" disabled>
            Select Type
          </option>
          <option value="Upper Body">Upper Body</option>
          <option value="Lower Body">Lower Body</option>
          <option value="Cardio Exercise">Cardio</option>
          <option value="Full Body">Full Body</option>
        </select>
        <span>Exercise: </span>
        <select value={exerciseValue} onChange={handleExerciseChange}>
          <option value="" disabled>
            Select Exercise
          </option>
          {filteredExercises.map((exercise) => (
            <option key={exercise} value={exercise}>
              {exercise}
            </option>
          ))}
        </select>
        <span>Rep: </span>
        <button className="" onClick={handleDecreaseRep}>
          -
        </button>
        <input type="number" value={repValue} readOnly className="rep-input" />

        <button onClick={handleIncreaseRep}>+</button>

        <span>Set: </span>
        <button onClick={handleDecreaseSet}>-</button>
        <input type="number" value={sepValue} readOnly className="set-input" />
        <button onClick={handleIncreaseSet}>+</button>
        <input
          type="number"
          value={weightValue}
          onChange={onWeightChange}
          className="lbInput"
          placeholder="0"
        />
      </div>
    </div>
  );
}
