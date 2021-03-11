import styles from './ErrorLabel.module.css';

const ErrorLabel = ({error}) => {
  if (!error) return null;
  return <p className={styles.error}>{error}</p>;
};

export default ErrorLabel;
