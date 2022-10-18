import styles from "../styles/IconButton.module.css";

export const IconButton = ({ icon, text }) => {
  return (
    <button className={styles.btnTooltip}>
      {icon}
      {text && <span className={styles.tooltip}>{text}</span>}
    </button>
  );
};
