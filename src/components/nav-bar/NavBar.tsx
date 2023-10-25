import mc from "./nav_bar.module.scss";
//logo
import redMLogo from "../../images/redMLogo.png";

const NavBar = () => {
  return (
    <div className={mc.container}>
      <div className={`${mc.logo} adaptive-img-contain`}>
        <span>
          <img
            src={redMLogo}
            alt={`Logo Mirage Beauty Lab`}
            draggable="false"
          />
        </span>
      </div>
      <div className={mc.menu}>
        <ul>
          <li>
            <button className={mc.button}>
              <a>
                <span>Accueil</span>
              </a>
            </button>
          </li>
          <li>
            <button className={mc.button}>
              <a>
                <span>Le labo</span>
              </a>
            </button>
          </li>
          <li>
            <button className={mc.button}>
              <a>
                <span>Les expériences</span>
              </a>
            </button>
          </li>
          <li>
            <button className={mc.button}>
              <a>
                <span>Les formations</span>
              </a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
