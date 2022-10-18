import { FiMenu } from "react-icons/fi";
import style from "../styles/Header.module.css";

export const Header = ({ title = "Title" }) => {
  const onClick = () => {
    console.log("hi");
  };
  return (
    <div className={style.headerContainer}>
      <div className={style.headerLeft}>
        <div className={style.icon} onClick={onClick}>
          <FiMenu
            size={24}
            className={style.headerIcon}
            preserveAspectRatio="none"
          />
        </div>

        <div className={style.title}>{title}</div>
      </div>

      <div className={style.headerRight}>
        <span>Admin</span>
        <img
          src="https://res.cloudinary.com/dzgiu2txq/image/upload/v1665616153/avatar/blank_profile_picture_hf0cjj.png"
          alt="Admin"
        />
      </div>
    </div>
  );
};
