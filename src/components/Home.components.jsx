import "./Home.css";

export default function Home() {
  return (
    <div className="App">
      <div className="date">
        <h3>08/05/2024 - Monday </h3>
      </div>
      <div className="switcher">
        <div className="tab">
          <span>View</span>
        </div>
        <div className="tab">
          <span>Summary</span>
        </div>
      </div>
      <div className="jot-button">
        <span>Feel like doing a lift?</span>
        <button>Jot Down The Workout</button>
      </div>
      <div className="rec-exercise-main">
        <h2>Recommended Exercises Today</h2>
        <div className="row-1">
          <div className="rec-exercise">
            <span>Bench Press</span>
          </div>
          <div className="rec-exercise">
            <span>Pull-Ups</span>
          </div>
        </div>
        <div className="row-1">
          <div className="rec-exercise">
            <span>Overhead Press</span>
          </div>
          <div className="rec-exercise">
            <span>Bent-Over</span>
          </div>
        </div>
        <div className="row-1">
          <div className="rec-exercise">
            <span>Bicep Curls</span>
          </div>
          <div className="rec-exercise">
            <span>Tricep Extension</span>
          </div>
        </div>
      </div>
      <div className="rec-exercise-day">
        <h2>All Exercises</h2>
        <div className="row-1">
          <div className="rec-exercise">
            <span>Bench Press</span>
          </div>
          <div className="rec-exercise">
            <span>Pull-Ups</span>
          </div>
        </div>
        <div className="row-1">
          <div className="rec-exercise">
            <span>Overhead Press</span>
          </div>
          <div className="rec-exercise">
            <span>Bent-Over</span>
          </div>
        </div>
        <div className="row-1">
          <div className="rec-exercise">
            <span>Bicep Curls</span>
          </div>
          <div className="rec-exercise">
            <span>Tricep Extension</span>
          </div>
        </div>
      </div>
    </div>
  );
}
