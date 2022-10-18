import styles from "../styles/Input.module.css";

export const Input = ({
  type,
  name,
  id,
  onChange,
  value,
  onClick,
  icon,
  text,
  disabled,
  options
}) => {
  if (type === "select") {
    return (
      <div className={styles.cont_input}>
        <select
          name={name}
          id={id}
          className={`${styles.form__input} ${styles.my_select}`}
          onChange={onChange}
        >
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <label className={styles.form__label} htmlFor={id}>
          {text}
        </label>
      </div>
    );
  } else {
    return (
      <div className={styles.cont_input}>
        <input
          type={type}
          name={name}
          id={id}
          onChange={onChange}
          value={value}
          autoComplete="off"
          placeholder=" "
          className={styles.form__input}
          disabled={disabled}
        />

        <span className={styles.icon} onClick={onClick}>
          {icon}
        </span>

        <label className={styles.form__label} htmlFor={id}>
          {text}
        </label>
      </div>
    );
  }
};
