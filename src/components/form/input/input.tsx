import styles from './input.module.css';

interface InputProps {
  label: string;
  name: string;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  error?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label = '', name, type = 'text', placeholder = '', error = '', value = '', onChange }: InputProps) => {
  return (
    <div className={`${styles.input_container} ${type === 'password' ? styles.password : ''}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
      {error && <div className={styles.input_error}>{error}</div>}
      {/* {type === 'password' && <i className="far fa-eye-slash" />} */}
    </div>
  );
};

export default Input;
