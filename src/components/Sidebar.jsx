import style from "../styles/Sidebar.module.css";
import { FaFire } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

const SideBarIcon = ({ icon, text = "tooltip 💡" }) => (
  <div className={`${style.sidebar_icon} ${style.group}`}>
    {icon}

    <span className={style.sidebar_tooltip}>{text}</span>
  </div>
);

export const Sidebar = () => {
  return (
    <div className={style.sidebarContainer}>
      <div className={style.sidebarUp}>
        <SideBarIcon icon={<FaFire size={32} />} />
        <SideBarIcon icon={<FaFire size={32} />} />
        <SideBarIcon icon={<FaFire size={32} />} />
        <SideBarIcon icon={<FaFire size={32} />} />
      </div>
      <div className={style.sidebarDown}>
        <SideBarIcon icon={<BiLogOut size={32} />} text="Cerrar Sesión" />
      </div>
    </div>
  );
};
