import style from "../styles/Sidebar.module.css";
import { BiLogOut } from "react-icons/bi";
import { useEffect } from "react";
import { optionsSidebar } from "../constants/constants";

const SideBarIcon = ({ icon, text = "tooltip 💡" }) => (
  <div className={style.sidebar_icon}>
    {icon}

    <span className={style.sidebar_tooltip}>{text}</span>
  </div>
);

export const Sidebar = () => {
  useEffect(() => {
    let options = document.querySelectorAll(
      `.${style.sidebarUp} .${style.sidebar_icon}`
    );
    options.forEach((option) => {
      option.addEventListener("click", () => {
        reset();
        option.classList.add(`${style.active}`);
      });
    });
    const reset = () => {
      options.forEach((option) => {
        option.classList.remove(`${style.active}`);
      });
    };
  }, []);

  return (
    <div className={style.sidebarContainer}>
      <div className={style.sidebarUp}>
        {optionsSidebar.map((option, index) => (
          <SideBarIcon key={index} icon={option.icon} text={option.text} />
        ))}
      </div>
      <div className={style.sidebarDown}>
        <SideBarIcon icon={<BiLogOut size={20} />} text="Cerrar Sesión" />
      </div>
    </div>
  );
};
