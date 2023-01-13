import styles from './select-input.module.css';
import { RiArrowDownSFill } from 'react-icons/ri';

interface SelectInputProps {
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<{ value: string; name: string }>;
}

const SelectInput = ({ label, name, value, placeholder, options, onChange }: SelectInputProps) => {
  return (
    <div className={styles.inputContainer}>
      {label && <label htmlFor={name}>{label}</label>}
      <div className={styles.selectContainer}>
        <select style={{ color: value.length ? 'unset' : '#777777' }} id={name} value={value} onChange={onChange}>
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
        <RiArrowDownSFill className={styles.icon} />
        {/* <i className="icon fa-solid fa-caret-down" /> */}
      </div>
    </div>
  );
};

export default SelectInput;
