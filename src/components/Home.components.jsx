import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const recExercises = [
    "Bench Press",
    "Pull-Ups",
    "Overhead Press",
    "Bent-Over",
    "Bicep Curl",
  ];

  // Display Time
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format of the date and times
  const formattedDate = currentDateTime.toLocaleDateString();
  const formattedTime = currentDateTime.toLocaleTimeString();

  const [activeTab, setActiveTab] = useState("view");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  let navigate = useNavigate();

  return (
    <div className="App">
      <div className="date">
        <h3>
          {formattedDate} - {formattedTime}{" "}
        </h3>
      </div>
      <div className="switcher">
        <div
          className={`tab ${activeTab === "view" ? "active" : ""}`}
          onClick={() => handleTabClick("view")}
        >
          <span>View</span>
        </div>
        <div
          className={`tab ${activeTab === "summary" ? "active" : ""}`}
          onClick={() => handleTabClick("summary")}
        >
          <span>Summary</span>
        </div>
      </div>
      <div className="content">
        {activeTab === "view" && (
          <div>
            <div className="jot-button">
              <span>Feel like doing a lift?</span>
              <button onClick={() => navigate("/logger")}>
                Jot Down The Workout
              </button>
            </div>
            <div className="rec-exercise-main">
              <h2>Recommended Exercises Today</h2>
              {recExercises.map((item) => (
                <div className="row-1">
                  <div className="rec-exercise">
                    <span>{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === "summary" && (
          <div className="summary-details">
            <h2>This is the summary for all workout</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
