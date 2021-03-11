import styles from './Input.module.css';

const Input = ({type, label, name, value, onChange, onBlur, error}) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <aside className={styles.error}>{error}</aside>}
    </div>
  );
};

export default Input;
