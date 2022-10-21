import { FiMenu } from "react-icons/fi";
import styles from "../styles/Header.module.css";
import { IconButton } from "./IconButton";

export const Header = ({ title = "Title" }) => {
  const onClick = () => {
    console.log("hi");
  };
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLeft}>
        <div className={styles.icon}>
          <IconButton
            icon={<FiMenu size={24} />}
            onClick={onClick}
          ></IconButton>
        </div>

        <div className={styles.title}>{title}</div>
      </div>

      <div className={styles.headerRight}>
        <span>Admin</span>
        <img
          src="https://res.cloudinary.com/dzgiu2txq/image/upload/v1665616153/avatar/blank_profile_picture_hf0cjj.png"
          alt="Admin"
        />
      </div>
    </div>
  );
};
