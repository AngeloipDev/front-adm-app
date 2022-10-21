import styles from "../styles/IconButton.module.css";

export const IconButton = ({ icon, text, onClick }) => {
  return (
    <button className={styles.btnTooltip} onClick={onClick}>
      {icon}
      {text && <span className={styles.tooltip}>{text}</span>}
    </button>
  );
};
