import React, { useState } from "react";
import DefiChallengeImage from "../../assets/DefiChallenge.jpg";
import TraveListImage from "../../assets/TraveList.jpg";
import RunBuddyImage from "../../assets/Run Buddy.jpg";
import WorkDaySchedulerImage from "../../assets/Work Day Scheduler.jpg";
import PizzaHuntImage from "../../assets/Pizza Hunt.jpg";
import NoteTakerImage from "../../assets/Note Taker.jpg";

function Project() {
  const [projects] = useState([
    {
      name: "DefiChallenge",
      src: DefiChallengeImage,
      link: "https://defi-challenge.herokuapp.com",
      github: "https://github.com/Efox6179/DefiChallenge",
    },
    {
      name: "TraveList",
      src: TraveListImage,
      link: "https://tobyhayde.github.io/travel-app",
      github: "https://github.com/tobyhayde/travel-app",
    },
    {
      name: "Run Buddy",
      src: RunBuddyImage,
      link: "https://sstover25.github.io/run-buddy",
      github: "https://github.com/sstover25/run-buddy",
    },
    {
      name: "Work Day Scheduler",
      src: WorkDaySchedulerImage,
      link: "https://sstover25.github.io/Scheduling_and_Working/",
      github: "https://github.com/sstover25/Scheduling_and_Working",
    },
    {
      name: "Pizza Hunt",
      src: PizzaHuntImage,
      link: "https://pizza-hunt-777.herokuapp.com/",
      github: "https://github.com/sstover25/pizza-hunt",
    },
    {
      name: "Note Taker",
      src: NoteTakerImage,
      link: "https://note-taker-77126.herokuapp.com/",
      github: "https://github.com/sstover25/Note_Taker",
    },
  ]);

  return (
    <div className="portfolio-section">
      <h2 className="d-flex about-me-title px-5 pt-5 justify-content-center">
        Portfolio
      </h2>
      <div className="d-flex flex-column align-items-center justify-content-center p-5">
        {projects.map((image) => (
          <div className="d-flex flex-column align-items-center justify-content-center pb-5">
            <img
              src={image.src}
              alt={image.name}
              className="p-3 profile-images media"
              key={image.name}
            />
            <br></br>
            <a
              href={image.link}
              className="profile-link profile-link-title px-3"
            >
              {image.name}
            </a>
            <a href={image.github} className="profile-link px-3">
              Repository
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
