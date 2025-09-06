import { useState } from "react";

function CookTime() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <button onClick={handleToggle} className="prem-time">
        <span>Max Prep Time</span>
        <img src="./images/icon-chevron-down.svg" alt="" />
      </button>

      {isOpen && (
        <div className="prem__box">
          <ul className="prem__list">
            <li className="prem__item">
              <button className="prem__text">0 minutes</button>
            </li>
            <li className="prem__item">
              <button className="prem__text">5 minutes</button>
            </li>
            <li className="prem__item">
              <button className="prem__text">10 minutes</button>
            </li>
            <li className="prem__item">
              <button className="prem__text">15 minutes</button>
            </li>
            <li className="prem__item">
              <button className="prem__text">20 minutes</button>
            </li>
          </ul>
          <button className="prem__btn">Clear</button>
        </div>
      )}
    </div>
  );
}

export default CookTime;
