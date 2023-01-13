import styles from './button.module.css';

interface ButtonProps {
  form?: string | undefined;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  className?: string;
  loading?: boolean;
  variant?: 'default' | 'primary';
  style?: object;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({
  type = 'button',
  form = undefined,
  disabled = false,
  style,
  variant = 'default',
  loading = false,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      form={form}
      type={type}
      disabled={disabled || loading}
      className={`${styles.button} ${styles[variant]} ${loading ? styles['button--loading'] : ''}`}
      style={style}
      onClick={onClick}
    >
      {loading && (
        <span className={styles.spinner}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </span>
      )}

      <span className={styles.label}>{children}</span>
    </button>
  );
};

export default Button;
