import { useState } from "react";

function PremTime() {
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
              <p className="prem__text">0 minutes</p>
            </li>
            <li className="prem__item">
              <p className="prem__text">5 minutes</p>
            </li>
            <li className="prem__item">
              <p className="prem__text">10 minutes</p>
            </li>
          </ul>
          <button className="prem__btn">Clear</button>
        </div>
      )}
      <div>
        <img
          src="./images/quinoa-veggie-bowl-large.webp"
          alt=""
          width={360}
          height={360}
        />
      </div>
    </div>
  );
}

export default PremTime;
